import { useState } from 'react'
import { Link } from 'react-router-dom'
import { movies } from '../data'

export default function Movies() {
  const [filter, setFilter] = useState<'all' | 'now-showing' | 'coming-soon'>('all')
  const [selectedGenre, setSelectedGenre] = useState<string>('all')

  const allGenres = Array.from(new Set(movies.flatMap(movie => movie.genre)))

  const filteredMovies = movies.filter(movie => {
    const matchesFilter = 
      filter === 'all' || 
      (filter === 'now-showing' && movie.nowShowing) ||
      (filter === 'coming-soon' && movie.comingSoon)
    
    const matchesGenre = selectedGenre === 'all' || movie.genre.includes(selectedGenre)
    
    return matchesFilter && matchesGenre
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Movies</h1>
          <p className="text-xl text-gray-200">Discover the latest films and upcoming releases</p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Status Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Movies
              </button>
              <button
                onClick={() => setFilter('now-showing')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'now-showing'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Now Showing
              </button>
              <button
                onClick={() => setFilter('coming-soon')}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  filter === 'coming-soon'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Coming Soon
              </button>
            </div>

            {/* Genre Filter */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                <option value="all">All Genres</option>
                {allGenres.map(genre => (
                  <option key={genre} value={genre}>{genre}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Movies Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredMovies.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">No movies found</h3>
              <p className="text-gray-600">Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredMovies.map((movie) => (
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
                          <p className="text-sm mb-2">{movie.duration} min • {movie.rating}</p>
                          <p className="text-sm mb-2">Director: {movie.director}</p>
                          <p className="text-sm">Cast: {movie.cast.slice(0, 3).join(', ')}</p>
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        {movie.nowShowing && (
                          <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Now Showing
                          </div>
                        )}
                        {movie.comingSoon && (
                          <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="mt-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{movie.title}</h3>
                      <p className="text-gray-600 text-sm mb-2">{movie.subtitle}</p>
                      <p className="text-gray-500 text-sm line-clamp-2">{movie.description}</p>
                      <div className="flex items-center justify-between mt-3">
                        <span className="text-sm text-gray-500">
                          {movie.genre.slice(0, 2).join(' • ')}
                        </span>
                        {movie.nowShowing && (
                          <span className="text-indigo-600 font-semibold text-sm hover:text-indigo-700">
                            Book Now →
                          </span>
                        )}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}