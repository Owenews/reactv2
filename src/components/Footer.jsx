const Footer = () => {
  return (
    <footer>
        <a href="http://localhost:5173"><img className="logo-meals" src="https://www.themealdb.com/images/logo.png" alt="Logo de meal" /></a>
        <p>© 2024 Owen Iluobe - All rights reserved</p>
      <p>Made with <span role="img" aria-label="love">❤️</span> by <a href="https://github.com/Owenews">Owen Iluobe</a></p>
      <div id="scrollUp">
      <a href="#top" className="scroll-btn">
        <img src="src/assets/arrow-up.png" alt="Scroll up" />
      </a>
      </div>
    </footer>
  );
};

export default Footer;