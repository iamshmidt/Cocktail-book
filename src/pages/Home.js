import React from 'react'
import CocktailList from '../components/CocktailList'
import Navbar from '../components/Navbar';
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <main>
        <Navbar></Navbar>
        <SearchForm></SearchForm>
        <CocktailList></CocktailList>
    </main>
  )
}

export default Home