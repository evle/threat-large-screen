import React from 'react';

import {
  FullScreenContainer,
  BorderBox2,
  BorderBox12,
  BorderBox3,
  BorderBox4,
} from '@jiaminghi/data-view-react';

import Header from '../components/header';
import Threat from '../components/threat';
import Stats from '../components/stats';
import Area from '../components/area';
import Map from '../components/map';

import styles from './index.less';

console.log(styles);

export default () => {
  return (
    <FullScreenContainer>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.mid}>
        <div className={styles.stats}>
          <BorderBox12>
            <Stats />
          </BorderBox12>
        </div>
        <div className={styles.threat}>
          <BorderBox12>
            <Threat />
          </BorderBox12>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.area}>
          <BorderBox12>
            <Area />
          </BorderBox12>
        </div>

        <div className={styles.map}>
          <BorderBox12>
            <Map />
          </BorderBox12>
        </div>
      </div>
    </FullScreenContainer>
  );
};
