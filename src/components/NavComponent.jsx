const NavComponent = (props) => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <img src={props.src} alt="logo" style={{ width: "40px", height: "40px" }} />
        <ul className="nav-links">
          <li>{props.option1}</li>
          <li>{props.option2}</li>
          <li>{props.option3}</li>
        </ul>
      </div>
    </nav>
  );
};

export default NavComponent;
