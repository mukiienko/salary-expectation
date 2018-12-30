import stringSimilarity from 'string-similarity';

export default class TagsBuilder {

  static normalize = (res, [tag, values]) => res.concat(values.map((item) => ({ input: item.toLowerCase(), output: tag })));

  constructor(config){
    this.config = Object.entries(config).reduce(TagsBuilder.normalize, []);
  }

  _findSimilarity(string) {
    return stringSimilarity.findBestMatch(string.toLowerCase(), this.config.map(({input}) => input));
  }

  _retriveTag(similarity) {
    return this.config[similarity.bestMatchIndex].output;
  }

  find(string) {
    if (!(string && typeof(string) === 'string')) {
      return '';
    }

    const similarity = this._findSimilarity(string);
    let tag = '';

    if (similarity.bestMatch.rating > 0.4) {
      tag = this._retriveTag(similarity);
    }
    return tag;
  }
}
