import "./Header.css";
import classNames from "classnames";

const Header = ({ className, children }) => {
  return (
    <div className={classNames(className, "Header")}>
      <h2>{children}</h2>
    </div>
  );
};

export default Header;
