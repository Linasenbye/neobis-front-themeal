import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
    const src="https://www.themealdb.com/api/json/v1/1/random.php";

    const [meal,setMeal] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        axios
            .get(src)
            .then(data => {
            setMeal(data.data.meals)
        })
    }, []);

    const handleSearch = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`);
          if (response.data.meals) {
            setSearchResult(response.data.meals);
          } else {
            setSearchResult([]); 
          }
        } catch (error) {
          console.error('Error fetching meal:', error);
        }
      };

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
        <form className="search" onSubmit={handleSearch}>
          <h2 className="search-title">Find your Meal</h2>
          <div className="seach-meal">
            <input 
              type="text" 
              placeholder="Find your meal" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
        </div>
        );
    })} 
        
        {/* Display search results */}
        {searchResult.map(item => (
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
            </div>
        ))}
        </>
    )
};

export default Home;
