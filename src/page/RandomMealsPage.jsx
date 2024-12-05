import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const RandomMealsPage = () => {
    const [randomMeal, setRandomMeal] = useState(null);

    // Fetch meal function
    const fetchCocktail = async () => {
      const randomMealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const randomMealData = await randomMealResponse.json();
      setRandomMeal(randomMealData.meals[0]);
    };
  
    // useEffect to fetch a random meal on component mount
    useEffect(() => {
      fetchCocktail();
    }, []); // Empty dependency array means it runs only once, when the component mounts
  
    const handleChangeRandomMeal = () => {
      fetchCocktail(); // Fetch a new random meal when the button is clicked
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