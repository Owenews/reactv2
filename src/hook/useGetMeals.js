import { useEffect, useState } from "react";
const useGetMeals = () => {
    const [meals, setMeals] = useState(null);

    useEffect(() => {
        (async () => {
          // Récupérer des recettes
          const mealsResponse = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s="); 
          // Récupérer les données au format JSON
          const mealsData = await mealsResponse.json();
    
          // Limiter le nombre de résultats à 5 recettes
          setMeals(mealsData.meals.slice(0, 5));
        })();
      }, []);

      return { meals };
    };
    
    export default useGetMeals;      