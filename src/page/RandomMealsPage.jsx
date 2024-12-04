import { useEffect, useState } from "react";


const RandomMealsPage = () => {
    const [randomMeal, setRandomMeal] = useState(null);

    // Fetch cocktail function
    const fetchCocktail = async () => {
      const randomMealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
      const randomMealData = await randomMealResponse.json();
      setRandomMeal(randomMealData.meals[0]);
    };
  
    // useEffect to fetch a random cocktail on component mount
    useEffect(() => {
      fetchCocktail();
    }, []); // Empty dependency array means it runs only once, when the component mounts
  
    const handleChangeRandomMeal = () => {
      fetchCocktail(); // Fetch a new random cocktail when the button is clicked
    };


  return (
    <section>        
        <h2>Random cocktail</h2>
        <button className ="drink-button" onClick={handleChangeRandomMeal}>Change meal</button>
        {/* Afficher les résultats si ils existent */}
        {randomMeal ? (
            <article className="meal-card" key={randomMeal.strMeal}>
                <h2><em>{randomMeal.strMeal}</em></h2>
                <img className="meal-image" src={randomMeal.strMealThumb} alt={randomMeal.strMeal} />
                <table className="meal-info">
                  <tbody>
                    <tr>
                      <td><strong>Instructions:</strong></td>
                      <td>{randomMeal.strInstructions}</td>
                    </tr>
                    <tr>
                      <td><strong>Ingrédients:</strong></td>
                      <td>{randomMeal.strIngredient1}</td>
                    </tr>
                    <tr>
                      <td><strong>Mesures:</strong></td>
                      <td>{randomMeal.strMeasure1}</td>
                    </tr>
                  </tbody>
                </table>
            </article>
        ) : (
          <p>En cours de chargement...</p>
        )}
      </section>
    );
  };

export default RandomMealsPage;