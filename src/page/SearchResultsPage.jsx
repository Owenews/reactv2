import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import { useSearchParams } from "react-router-dom";

const MealsPage = () => {
  const [searchMeal, setSearchMeal] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    (async () => {
      // Récupérer des recettes commençant par "a"
      const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a"); 
      // Récupérer les données au format JSON
      const mealsData = await mealsResponse.json();

      // Limiter le nombre de résultats à 10 recettes
      setSearchMeal(mealsData.meals);
    })();
  }, [query]);


  if (!searchMeal) {
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
        {searchMeal.map((meal) => {
          return <MealCard key={meal.idMeal} meal={meal} />;
        })}
      </main>

      <Footer />
    </>
  );
};

export default MealsPage;