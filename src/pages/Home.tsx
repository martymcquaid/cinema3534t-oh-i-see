import { Link } from 'react-router-dom'
import { movies, cinemas, offers } from '../data'

export default function Home() {
  const nowShowing = movies.filter(movie => movie.nowShowing)
  const comingSoon = movies.filter(movie => movie.comingSoon)
  const featuredOffers = offers.slice(0, 2)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/90 to-cyan-900/90 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1489599809568-2ed9ba9e1ac1?w=1920&h=1080&fit=crop')` 
          }}
        ></div>
        
        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Welcome to Omniplex
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience movies like never before in our state-of-the-art cinemas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/movies"
              className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              Book Tickets Now
            </Link>
            <Link
              to="/locations"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Find Locations
            </Link>
          </div>
        </div>
      </section>

      {/* Now Showing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Now Showing</h2>
            <p className="text-xl text-gray-600">Catch the latest blockbusters</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {nowShowing.map((movie) => (
              <div key={movie.id} className="group cursor-pointer">
                <Link to={`/movies/${movie.id}`}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm font-medium mb-2">{movie.genre.join(' • ')}</p>
                        <p className="text-sm">{movie.duration} min • {movie.rating}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Now Showing
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{movie.title}</h3>
                    <p className="text-gray-600 text-sm">{movie.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/movies"
              className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300"
            >
              View All Movies
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Coming Soon</h2>
            <p className="text-xl text-gray-600">Get ready for upcoming releases</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoon.map((movie) => (
              <div key={movie.id} className="group cursor-pointer">
                <Link to={`/movies/${movie.id}`}>
                  <div className="relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:scale-105">
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <p className="text-sm font-medium mb-2">{movie.genre.join(' • ')}</p>
                        <p className="text-sm">Release: {new Date(movie.releaseDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{movie.title}</h3>
                    <p className="text-gray-600 text-sm">{movie.subtitle}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Special Offers</h2>
            <p className="text-xl text-gray-200">Great deals for your movie experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {featuredOffers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${offer.image}')` }}>
                  <div className="h-full bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      {offer.discountPercentage && (
                        <div className="text-4xl font-bold mb-2">{offer.discountPercentage}% OFF</div>
                      )}
                      <h3 className="text-2xl font-bold">{offer.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  <Link
                    to="/offers"
                    className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Locations</h2>
            <p className="text-xl text-gray-600">Find a cinema near you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cinemas.map((cinema) => (
              <div key={cinema.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{cinema.name}</h3>
                <p className="text-gray-600 mb-4">{cinema.address}, {cinema.city}, {cinema.state}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {cinema.amenities.slice(0, 3).map((amenity, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                      {amenity}
                    </span>
                  ))}
                  {cinema.amenities.length > 3 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      +{cinema.amenities.length - 3} more
                    </span>
                  )}
                </div>
                <Link
                  to="/locations"
                  className="text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
