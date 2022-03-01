import React from 'react';
import { Food } from '../../dummyData';
import Rating from '../rating/rating';
const Menu = (props: any) => {
  const food = props.food as Food;

  return (
    <div className="menu">
      <div className="img-box">
        <img src={'/' + food.image} alt={food.name} />
      </div>

      <h3>{food.name}</h3>
      <Rating rating={food.rate} />
      <p>
        {food.description.substring(0, 90) + '... '}
        <strong>See more</strong>
      </p>
      <div className="bottom">
        <h3>
          <span>Rs. </span>
          {food.price}
        </h3>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default Menu;
