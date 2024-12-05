import Header from "../components/Header";
import Footer from "../components/Footer";
import MealCard from "../components/MealCard";
import RandomMealsPage from "./RandomMealsPage";
import useGetMeals from "../hook/useGetMeals.js";

const MealsPage = () => {

  const { meals } = useGetMeals();



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