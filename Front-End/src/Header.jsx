const Header = () => {
  return (
    <header
      className="header text-center text-white d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: "url('./assets/img/Header.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "300px",
      }}
    >
      <h1>Pizzería Mamma Mia</h1>
      <p>Las mejores pizzas al mejor precio</p>
    </header>
  );
};

export default Header;
