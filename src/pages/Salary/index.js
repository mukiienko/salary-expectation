import React, { useEffect, useState } from 'react';
import find from 'lodash/find';

import { loadProfile } from 'redux/modules/account';
import { useMappedState, useDispatcher } from 'utils/hooks/useRedux';
import { useMouted } from 'utils/hooks/behaviors';
import SalaryBuilder from 'utils/services/SalaryBuilder';
import Profile from 'components/Profile';
import Chart from 'components/Chart';
import Select from 'components/Select';
import Chips from 'components/Chips';
import periodFilterConfig from 'config/elements/periodFilter';

import css from 'style/pages/Salary.module.scss';

const mapState = state => ({
  profile: state.account.profile
});

const Salary = () => {
  const [period, changePeriod] = useState(periodFilterConfig[0].id);
  const [salary, changeSalary] = useState([]);
  const [salaryInstance, changeSalaryInstance] = useState();
  const { profile } = useMappedState(mapState);
  const handleGetData = useDispatcher(loadProfile);
  const filterActions = [find(periodFilterConfig, { id: period }).action];
  const tags = salary.tags ? Object.values(salary.tags) : [];

  useMouted(() => {
    handleGetData();
  });
  useEffect(
    () => {
      const salaryInstanceNew = SalaryBuilder.createSalaryFromProfile(
        profile.data
      );
      if (salaryInstanceNew) {
        changeSalary(salaryInstanceNew.result(filterActions));
        changeSalaryInstance(salaryInstanceNew);
      }
    },
    [profile.loaded]
  );
  useEffect(
    () => {
      if (salaryInstance) {
        changeSalary(salaryInstance.result(filterActions));
      }
    },
    [period]
  );

  console.log(salary);

  return (
    <React.Fragment>
      {profile.loaded && (
        <section className={css.container}>
          <div className={css.container__inner}>
            <aside className={css.container__leftside}>
              <Profile info={profile.data} />
              <p className={css.copy}>&copy; 2018 by Alex Mukienko</p>
            </aside>
            <article className={css.container__content}>
              <div className={css.container__headline}>
                <Chips label="Tags" data={tags} />
                <Select
                  label="Period"
                  list={periodFilterConfig}
                  value={period}
                  handleChange={changePeriod}
                />
              </div>
              <Chart data={salary.result} />
            </article>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Salary;
