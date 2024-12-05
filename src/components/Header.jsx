import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    const handleSubmitSearch = (event) => {
      event.preventDefault();
      const query = event.target.query.value;
  
      navigate("/search-results?query=" + query);
    };

    return (
      <header>
        <a href="http://localhost:5173"><img src="https://www.themealdb.com/images/logo.png" alt="Logo de meal" /></a>
        
        <nav>
          <ul>
            <li>
              <Link to={"/"}>Accueil</Link>
            </li>

            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>

            <li>
              <Link to={"/meals"}>Toutes les recettes</Link>
            </li>
          </ul>

          <form method="get" onSubmit={handleSubmitSearch}>
            <label>
               <input type="search" name="query" placeholder="Search for a meal" />
            </label>

            <input type="submit" />
          </form>
        </nav>
      </header>
    );
};

export default Header;