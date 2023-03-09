import React from 'react'
import Categories from './Categories'
import "./Categories.css"
import { Link } from 'react-router-dom'
const CategoriesSection = () => {
  return (
    <div className="xl:flex items-center xl:max-w-[60%] shrink max-w-[40%] hidden  overflow-x-scrol space-x-14 scrollbar-hide md:pl-0 pl-5 md:pr-5">
    <Link to="/"><Categories title="All" id='' handleClick="" /></Link>
    <Categories title="Tendências" id="Trending" handleClick="" />
    <Categories title="Musicas" id="music"  handleClick="" />
    <Categories title="Notícias" id="news" handleClick="" />
     <Categories title="Games" id="gaming" handleClick="" />
    <Categories title="Esportes" id="sports" handleClick="" />
    <Categories title="Filmes" id="movies" handleClick="" />
    <Categories title="Estilo" id="26" handleClick="" />
    <Categories title="Comedia" id="23" handleClick="" />
    <Categories title="DOTA" id="20" handleClick="" /> 
  </div>
  )
}

export default CategoriesSection
