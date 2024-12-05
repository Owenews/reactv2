import { useEffect, useState } from "react";
const useGetMealById = (id) => {
    const [meal, setMeal] = useState(null);

    useEffect(() => {
      (async () => {
        const urlMealResponse = await fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id);
        const urlMealData = await urlMealResponse.json();
        
        setMeal(urlMealData.meals[0]);
      })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { meal };
  };
  
  export default useGetMealById;