import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ShowMealPage = () => {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);

  useEffect(() => {
    (async () => {
      const urlMealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
      const urlMealData = await urlMealResponse.json();
      
      setMeal(urlMealData.meals[0]);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <article className="meal-card">
      {meal ? (
                <article className="meal-card">
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
        ) : (
          <p>Meal en cours de chargement<br/>Veillez Patientez</p>
        )}
      </article>
      <Footer />
    </>
  );
};

export default ShowMealPage;

