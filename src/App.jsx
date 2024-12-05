import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './page/HomePage'
import './App.css'
import ContactPage from './page/ContactPage'
import MealsPage from './page/MealsPage'
import RandomMealsPage from './page/RandomMealsPage'
import ShowMealPage from './page/ShowMealPage'
import SearchResultsPage from './page/SearchResultsPage'

function App() {

  return (
    <>      
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/meals" element={<MealsPage />} />
        <Route path="/random" element={<RandomMealsPage />} />
        <Route path="/meals/:id" element={<ShowMealPage />} />
        <Route path="/search-results" element={<SearchResultsPage />} />
      </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
