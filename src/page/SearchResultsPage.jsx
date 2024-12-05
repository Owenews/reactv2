import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import { useSearchParams } from "react-router-dom";

const MealsPage = () => {
  const [searchMeal, setSearchMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const query = searchParams.get("query");

  useEffect(() => {
    (async () => {
      // Récupérer la recette recherchée
      const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + query); 
      // Récupérer les données au format JSON
      const mealsData = await mealsResponse.json();

      setSearchMeal(mealsData.meals);
      setIsLoading(false);
    })();
  }, [query]);

  if (isLoading) {
    return (
      <>
        <Header />
        <p>En cours de chargement !</p>
        <Footer />
      </>
    );
  }

  if (!isLoading && !searchMeal) {
    return (
      <>
        <Header />
        <p>Pas de recettes !</p>
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