import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import Locations from './pages/Locations'
import Food from './pages/Food'
import Offers from './pages/Offers'
import Booking from './pages/Booking'

// IMPORTANT: For navigation, always use <Link> from react-router-dom, not <a> tags
// This ensures client-side routing works correctly with the preview URL base path
// Example: <Link to="/about">About</Link> instead of <a href="/about">About</a>

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/food" element={<Food />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/booking/:showtimeId" element={<Booking />} />
      </Routes>
    </Layout>
  )
}

export default App
