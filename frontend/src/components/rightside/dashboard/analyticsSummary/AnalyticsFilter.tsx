import classes from "./AnalyticsFilter.module.scss";
import Card from "../../../ui/card/Card";
import { AnalyticsFilterData } from "./AnalyticsFilterData";
import { BiRefresh } from 'react-icons/bi';
import { FiDownload } from 'react-icons/fi';

const AnalyticsFilter = () => {
  return (
    <Card className={classes.container}>
      
      <div className={classes["card-container"]}>
       
        {AnalyticsFilterData.map((data) => {
          const IconOne = data.iconOne;
          const IconTwo = data.iconTwo;
       
          return (
            <div className={classes.item}>
              <p>
                <IconOne />
              </p>
              <Card className={classes.card}>
                <p>{data.text}</p>
                <div>
                  <IconTwo />
                </div>
              </Card>
            </div>
          );
        })}
        
        <div className={classes["far-right"]}>
          <Card className={classes.refresh}>
            <BiRefresh />
            <p>Refresh</p>
          </Card>
          <Card className={classes.export}>
            <FiDownload />
            <p>Export</p>
          </Card>
      </div>
      </div>
      
    </Card>
  );
};

export default AnalyticsFilter;
