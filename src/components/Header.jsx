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
        <h1>Les recettes de Roberto</h1>

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