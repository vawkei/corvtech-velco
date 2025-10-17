import Button from "../../ui/button/Button";
import Card from "../../ui/card/Card";
import classes from "./LevySchedules.module.scss";
import { IoSettingsOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { RiArrowUpDownFill } from "react-icons/ri";
import { LevyScheduleData } from "./LevySchedulesData";
import { FiDownload } from "react-icons/fi";

const LevySchedules = () => {
  var nairaSymbol = "\u20A6";

  return (
    <div className={classes.container}>
      <h2>Levy Schedules</h2>
      <p>
        View and manage levy rates configured by NESREA. You may adopt these
        rates fully or customize them to fit your state policies.
      </p>
      <Card className={classes["card-container"]}>
        <div className={classes.heading}>
          <div className={classes.title}>
            <span>
              <IoSettingsOutline />{" "}
            </span>
            <h4>NESREA Levy Configuration</h4>
          </div>

          <div className={classes.actions}>
            <FaCheck className={classes.mark} size={12} />
            <Button className={classes["btn-adopt"]}>Adopt</Button>
            < LuPencil className={classes.modify} size={12} />
            <Button className={classes["btn-modify"]}>Modify</Button>
            <FiDownload className={classes.export} size={12} />
            <Button className={classes["btn-export"]}>Export</Button>
          </div>
        </div>

        <div className={classes["table-container"]}>
          <table>
            <thead>
              <tr>
                <th>Vehicle Category</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Fuel Type</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Vehicle Age Brand</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Base Annual Levy</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Penalty Rate</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Exemption Status</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
              </tr>
            </thead>
            <tbody>
              {LevyScheduleData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.vehicleCat}</td>
                    <td></td>
                    <td>{data.FuelType}</td>
                    <td></td>
                    <td>{data.VehcleAge}</td>
                    <td></td>
                    <td>
                      {nairaSymbol}
                      {data.baseAnnualLevy}
                    </td>
                    <td></td>
                    <td>{data.penaltyRate}</td>
                    <td></td>
                    <td className={classes["exemption-status"]}>
                      <p>
                        {data.exemptionStatus}
                      </p>
                    </td>
                    <td></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default LevySchedules;
