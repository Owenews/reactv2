import { useEffect, useState } from "react";
const useGetRandomMeal = (reload) => {
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
    }, [reload]); // Empty dependency array means it runs only once, when the component mounts

    return { randomMeal };
};

export default useGetRandomMeal;