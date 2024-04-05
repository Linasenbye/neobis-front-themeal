import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    const src="https://www.themealdb.com/api/json/v1/1/random.php";

    const [meal,setMeal] = useState([]);

    useEffect(() => {
        axios
            .get(src)
            .then(data => {
            setMeal(data.data.meals)
        })
    }, []);


    return (
        <>
        {meal.map(item => {
      return (
        <div className="home" key={item.idMeal}>
        <section className="random-meal">
          <div className="meal-info">
          <Link to={`/meal/${item.idMeal}`} key={item.idMeal}>
            <h2 className="title">{item.strMeal}</h2>
          </Link>
            <p>{item.strCategory} | {item.strArea}</p>
          </div>
          <div className="meal-img">
            <img src={item.strMealThumb} alt={item.strMeal}/>
          </div>
        </section>
        <section className="search">
          <h2 className="search-title">Find your Meal</h2>
          <div className="seach-meal">
          <input type="text" placeholder="Find your meal"/>
          <button>Search</button>
          </div>
        </section>
        </div>
        );
    })} 
        
    
        
        </>
    )
};

export default Home;