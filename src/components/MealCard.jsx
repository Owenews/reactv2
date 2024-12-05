import { Link } from 'react-router-dom';
/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const MealCard = ({ meal }) => {
    return (
      <article>
            <h2><em>{meal.strMeal}</em></h2>
            <img className="meal-image" src={meal.strMealThumb} alt={meal.strMeal} />
            <Link to={`/meals/${meal.idMeal}`}><button className="meal-list-button">Voir la recette</button></Link>
            </article>
    );
  };

  export default MealCard;