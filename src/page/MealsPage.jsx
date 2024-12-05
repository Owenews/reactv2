import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import RandomMealsPage from "./RandomMealsPage";


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


  if (!meals) {
    return (
      <>
        <Header />
        <p>En cours de chargement !</p>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main>
        {meals.map((meal) => {
          return <MealCard key={meal.idMeal} meal={meal} />;
        })}
      </main>

      <RandomMealsPage />

      <Footer />
    </>
  );
};

export default MealsPage;