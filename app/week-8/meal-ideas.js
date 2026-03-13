'use client';
import { useState, useEffect } from "react";
// import FetchErrorMessage from "./FetchErrorMessage";

function fetchMealIdeas(ingredient) {
    return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
}
export default function MealListByIngredient({ingredient}) {
    const [mealList, setMealList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
        
    async function loadMealList(ingredient) {
        setLoading(true);
        setError(null);
        try{
            const response = await fetchMealIdeas(ingredient);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setMealList(data.meals || []);
        }catch(error){
            setError(error);
        }finally{
            setLoading(false);
        }
    }

    // Load meals when the component mounts
    useEffect(() => {
      loadMealList(ingredient);
    }, [ingredient]);
      
    // if the request is bad, return this
    if (loading) {
        return (
            <div className="flex items-center justify-center py-6">
                <p className="text-gray-400 animate-pulse">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center py-6">
                <p className="text-red-400">Error fetching meals</p>
            </div>
        );
    }

    if (!ingredient) {
        return (
            <div className="flex items-center justify-center py-6">
                <p className="text-gray-400 text-sm">Select an item</p>
            </div>
        );
    }

    return(
        <div className="space-y-3">
            {mealList.length > 0 ? (
                <ul className="space-y-2">
                    {mealList.map(meal => (
                        <li 
                            key={meal.idMeal}
                            className="p-3 rounded-lg bg-gray-800/50 border border-gray-700 text-white text-sm hover:bg-gray-800/80 hover:border-pink-600/50 transition-all cursor-pointer group">
                            <span className="text-pink-400 mr-2">•</span>
                            <span className="group-hover:text-pink-300 transition-colors">{meal.strMeal}</span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-400 text-sm py-4 text-center">No meals found</p>
            )}
        </div>
    )
}

