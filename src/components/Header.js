import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL}></img>
      <div className="searchBar">SearchBar</div>
      <div className="location">Location</div>
      <div className="nav-items">
        <ul className="menu">
          <li>Home</li>
          <li>Account</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
