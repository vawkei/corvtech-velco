import classes from "./MonthlyRTracker.module.scss";
import Card from "../../../ui/card/Card";
import Button from "../../../ui/button/Button";
import { FiDownload } from "react-icons/fi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { MonthlyRemittanceData } from "./MonthlyRemittanceData";

const MonthlyRemittanceTracker = () => {
  var nairaSymbol = "\u20A6";

  return (
    <div className={classes.container}>
      <Card className={classes["card-container"]}>
        <div className={classes.heading}>
          <div className={classes.title}>
            <h4>Monthly Remittance Tracker</h4>
          </div>

          <div className={classes.actions}>
            <Button className={classes["btn-month"]}>This Month</Button>

            <Button className={classes["btn-LGA"]}>All LGAs</Button>

            <FiDownload className={classes.export} size={12} />
            <Button className={classes["btn-export"]}>Export</Button>
          </div>
        </div>

        <div className={classes["table-container"]}>
          <table>
            <thead>
              <tr>
                <th>LGA</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Expected Amount</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Actual Amount Paid</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Due Date</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Status</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
                <th>Actions</th>
                <th className={classes["icon-cell"]}>
                  <RiArrowUpDownFill />
                </th>
              </tr>
            </thead>
            <tbody>
              {MonthlyRemittanceData.map((data, index) => {
                return (
                  <tr key={index}>
                    <td>{data.lga}</td>
                    <td></td>
                    <td className={classes["amount"]}>
                      {nairaSymbol}
                      {data.expectedAmount}
                    </td>
                    <td></td>
                    <td className={classes["amount"]}>
                      {nairaSymbol}
                      {data.actualAmountPaid}
                    </td>
                    <td></td>
                    <td>{data.dueDate}</td>
                    <td></td>
                    <td className={classes.stats}>
                      <p
                        className={
                          data.status === "On Time"
                            ? classes.onTime
                            : data.status === "Overdue"
                            ? classes.overdue
                            : data.status === "Pending"
                            ? classes.pending
                            : ""
                        }
                      >
                        {data.status}
                      </p>
                    </td>

                    <td></td>
                    <td className={classes["data-action"]}>
                      <p>{data.action}</p>
                    </td>
                    {/* <td></td> */}
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

export default MonthlyRemittanceTracker;
