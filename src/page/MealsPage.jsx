import { useEffect, useState } from "react";
import RandomMealsPage from "./RandomMealsPage";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MealsPage = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    (async () => {
      // Récupérer des recettes commençant par "a"
      const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"); 
      // Récupérer les données au format JSON
      const mealsData = await mealsResponse.json();

      // Limiter le nombre de résultats à 10 recettes
      setMeals(mealsData.meals.slice(0, 10));
    })();
  }, []);


  return (
    <>
    <Header />
    <main>
        <h1>Welcome to the Paradise Meals !</h1>
        <h2>The best meals in the world </h2>
        
    </main>

      <section>
        {/* Afficher les résultats si ils existent */}
        {meals ? (
          // <> sert à créer un élément de type enfant
          <>
            {/* Afficher les résultats dans un tableau */}
            {meals.map((meal) => {
              return (
                <article className="meal-card" key={meal.strMeal}>
                  <h2><em>{meal.strMeal}</em></h2>
                  <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
                  <table className="meal-info">
                    <tbody>
                      <tr>
                        <td><strong>Instructions:</strong></td>
                        <td>{meal.strInstructions}</td>
                      </tr>
                      <tr>
                        <td><strong>Ingrédients:</strong></td>
                        <td>{meal.strIngredient1}</td>
                      </tr>
                      <tr>
                        <td><strong>Mesures:</strong></td>
                        <td>{meal.strMeasure1}</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
              );
            })}
          </>
          ) : (
            // Afficher un message en cas d'absence de résultats ou de chargement en cours
            <p>Recettes en cours de récupération</p>
        )}
        <RandomMealsPage />
      </section>
      <Footer />
    </>
  );
};

export default MealsPage;