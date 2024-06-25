import * as React from 'react';
import Styles from './HomeMaine.module.scss';
import InternalJobs from './InternalJobs/InternalJobs';
import BannerImg from './BannerImg/BannerImg';
import Video from './Video/Video';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import Birthdays from './Birthdays/Birthdays';
import LatestNews from './LartestNews/LatestNews';
//import UpcommingEvents from './UpcommingEvents/UpcomingEvents';

const HomeMaine: React.FC<{ context: WebPartContext }> = ({ context }) => {


  return (
    <div className={Styles.HomeMaine}>
      <div className={Styles.cards_holder}>
        <div className={Styles.N1_holder}>

        </div>
        <div className={Styles.N2_holder}>

        </div>
        <div className={Styles.N3_holder}>
        <LatestNews context={context}  />
        </div>
        <div className={Styles.N4_holder}>
        </div>
        <div className={Styles.N5_holder}>
          <Birthdays />
        </div>
        <div className={Styles.N6_holder}>
          <Video context={context} />
        </div>
        <div className={Styles.N7_holder}>
          <InternalJobs />
        </div>
        <div className={Styles.N8_holder}>
          <BannerImg context={context} />
        </div>
      </div>
    </div>
  );
};

export default HomeMaine;
