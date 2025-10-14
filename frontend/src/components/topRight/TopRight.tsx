import classes from "./TopRight.module.scss";
import { useState } from "react";
import Card from "../ui/card/Card";
import Search from "../ui/search/Search";
import { FaRegBell } from "react-icons/fa";
import avatarImage from "../../assets/default_avatar.png";

const TopRight = () => {
  const [enteredSearch, setEnteredSearch] = useState("");

  return (
    <Card className={classes["card-container"]}>
      {/* <h3>Top</h3> */}
      
      <div className={classes["search-div"]}>
        <Search
          type="text"
          value={enteredSearch}
          placeholder="Search"
          onChange={(event) => setEnteredSearch(event.target.value)}
        />
      </div>

      <div className={classes["last-section"]}>

        <FaRegBell size={12} />
        
        <div className={classes["main-image"]}>
          <img src={avatarImage} alt="profile-image" />
        </div>
        
        <div className={classes["detail"]}>
          <p>Hon.Garba Datti Mohammed</p>
          <p>Admin</p>
        </div>
      </div>

    </Card>
  );
};

export default TopRight;
