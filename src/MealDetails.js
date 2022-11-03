import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function MealDetails() {
    const [meal, setMeal] = useState({})

    const {id} = useParams("id")

    async function getDetails(){
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const json = await response.json()
        setMeal({...json.meals[0]})
    }

    useEffect(() => {
        getDetails()
    }, [])

    return(
        <div>
            <h2>{meal.strMeal}</h2>
            <h5>{meal.strInstructions}</h5>
        </div>
    )
}