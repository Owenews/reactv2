import { Link } from "react-router-dom";
import useGetRandomMeal from "../hook/useGetRandomMeal.js";
import { useState } from "react";

const RandomMealsPage = () => {
  const [reload, setReload] = useState(false);
  const { randomMeal } = useGetRandomMeal(reload);

  const handleChangeRandomMeal = () => {
    setReload(!reload);
  };
  
  return (
    <section>        
        <h2>Random cocktail</h2>
        <button className ="drink-button" onClick={handleChangeRandomMeal}>Change meal</button>
        {/* Display results if available */}
        {randomMeal ? (
            <article className="meal-card" key={randomMeal.strMeal}>
                <h2><em>{randomMeal.strMeal}</em></h2>
                <img className="meal-image" src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                <Link to={`/meals/${randomMeal.idMeal}`}><button className="meal-list-button">See more</button></Link>
            </article>
        ) : (
          <p>En cours de chargement...</p>
        )}
      </section>
    );
  };

export default RandomMealsPage;