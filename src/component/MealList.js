import React from 'react';
import Meal from './Meal'; // Make sure to import your Meal component

const MealList = ({ meals }) => {
  return (
    <div>
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} />
      ))}
    </div>
  );
};

export default MealList;
