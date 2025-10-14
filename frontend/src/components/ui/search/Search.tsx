import classes from "./Search.module.scss";
import type { SearchProps } from "../../../interfaces/interfaces";
import { RxMagnifyingGlass } from "react-icons/rx";

const Search = (props: SearchProps) => {
  return (
    <div className={classes.search}>
      <RxMagnifyingGlass size={18} className={classes.icon} />
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Search;
