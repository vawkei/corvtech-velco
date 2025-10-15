import classes from "./RecentTransaction.module.scss";
import Card from "../../../ui/card/Card";
import { TransactionData } from "./TransactionData";
import Button from "../../../ui/button/Button";
import { MdKeyboardArrowLeft } from 'react-icons/md';
import { MdKeyboardArrowRight } from 'react-icons/md';

const RecentTransaction = () => {
    var nairaSymbol = "\u20A6";
  return (
    <Card className={classes.container}>
      <h2>Recent Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Date</th>
            <th>Vehicle Category</th>
            <th>Amount</th>
            <th>Payment Method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {TransactionData.map((data, index) => {
            return (
              <tr key={index} >
                <td >{data.transactionID}</td>
                <td>{data.date}</td>
                <td>{data.vehicleCat}</td>
                <td>{nairaSymbol}{data.amount}</td>
                <td>{data.payMethod}</td>
                <td className={classes.stats} >
                  <p
                    className={
                      data.status === "completed"
                        ? `${classes.completed}`
                        : data.status === "pending"
                        ? `${classes.pending}`
                        : data.status === "overdue"
                        ? `${classes.overdue}`
                        : ""
                    }
                  >
                    {data.status}
                  </p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={classes["lower-div"]}>
        <p>Showing 1-10 0f 50 results</p>
        <div className={classes.action}>
          <MdKeyboardArrowLeft className={classes["arr-left"]} />
          <MdKeyboardArrowRight className={classes["arr-right"]} />
          <Button className={classes["btn-one"]}>Previous</Button>
          <Button className={classes["btn-two"]}>Next</Button>
        </div>
      </div>
    </Card>
  );
};

export default RecentTransaction;
