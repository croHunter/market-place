import React from 'react';
import { data, Food, FoodType } from '../../dummyData';
import Menu from './Menu';
import Panel from './Panel';
import Tabs from './Tabs';
import './ShortFeature.css';
const ShortFeature = () => {
  return (
    <section className="shortfeature-section">
      <div className="shortfeature-wrapper">
        <Tabs>
          {data.map((foodType: FoodType) => {
            return (
              <Panel title={foodType.foodType} key={foodType.id}>
                {foodType.foods.map((food: Food) => {
                  return <Menu key={food.f_id} food={food} />;
                })}
              </Panel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default ShortFeature;
