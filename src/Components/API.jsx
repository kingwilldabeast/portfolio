import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams, Link, useNavigate } from 'react-router-dom'
import {Route, Routes} from 'react-router-dom'


export default function App() {
  // const [input, setInput] = useState("")
  const [recipeArray, setRecipeArray] = useState([])

  const getData = async (searchTerm) => {
    const response = await axios.get(`https://ciphersprint.pulley.com/task_21865dc8f16676c3131a58bd228ac4f`)
    console.log(`result is ${response.data}`)
    
    //assign API results to array
    // setRecipeArray(response.data.meals)

  }



  return (
    <div className=''>


    </div>
  )
}

