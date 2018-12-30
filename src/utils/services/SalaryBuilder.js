import brain from 'brain.js';
import getValue from 'lodash/get';
import round from 'round-to';

import TagsBuilder from 'utils/services/TagsBuilder';
import diffMonth from 'utils/time';
import professionTags from 'config/professionTags';
import levelTags from 'config/levelTags';
import salaryData from 'config/salaryTrainData';

export default class SalaryBuilder {
  static _instance;

  // Factory Method
  static createSalaryFromProfile = profile => {
    const professionTagsBuilder = new TagsBuilder(professionTags);
    const levelTagsBuilder = new TagsBuilder(levelTags);
    const prof = professionTagsBuilder.find(
      getValue(profile, 'positions.values[0].title')
    );
    const level =
      levelTagsBuilder.find(getValue(profile, 'positions.values[0].title')) ||
      'middle';

    if (prof && level) {
      const startDate = getValue(
        profile,
        'positions.values[0].startDate.year',
        new Date().getFullYear()
      );
      const startMonth = getValue(
        profile,
        'positions.values[0].startDate.month',
        1
      );
      const experience = diffMonth([startDate, startMonth - 1]);
      const salary = new SalaryBuilder({
        prof,
        level,
        experience,
        trainData: salaryData,
        filters: []
      });

      return salary;
    }

    return null;
  };

  static normalizeData = item => ({
    input: [item.experience / 100],
    output: [item.salary / 100000]
  });

  static applyFiletrs = (value, filters) => {
    let changedValue = value;

    filters.forEach(filter => {
      changedValue = filter(changedValue);
    });

    return round(changedValue, -2);
  };

  constructor({ prof, level, experience, trainData }) {
    if (SalaryBuilder._instance) {
      return SalaryBuilder._instance;
    }

    this.countries = Object.keys(trainData);
    this.prof = prof;
    this.level = level;
    this.experience = experience;
    this.trainData = trainData;
    SalaryBuilder._instance = this;
  }

  train(data) {
    this.net = new brain.NeuralNetwork();
    this.net.train(data.map(SalaryBuilder.normalizeData));
  }

  rawResult(input) {
    return this.net.run([input / 100]) * 100000;
  }

  resultForCountry(country, filters) {
    const data = this.trainData[country][this.prof][this.level];
    const { taxes } = this.trainData[country];

    this.train(data);

    const result = SalaryBuilder.applyFiletrs(
      this.rawResult(this.experience),
      filters
    );
    const resultAfterTaxes = result - (result / 100) * taxes;

    return {
      label: country,
      result,
      resultAfterTaxes
    };
  }

  result(filters) {
    const result = this.countries.map(country =>
      this.resultForCountry(country, filters)
    );

    return {
      result,
      tags: {
        prof: this.prof,
        level: this.level,
        experience: `current position ${this.experience} months`
      }
    };
  }
}
