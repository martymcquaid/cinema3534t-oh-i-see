import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { movies, showtimes, cinemas } from '../data'

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>()
  const [selectedDate, setSelectedDate] = useState<string>('')
  const [selectedCinema, setSelectedCinema] = useState<string>('')

  const movie = movies.find(m => m.id === id)
  
  if (!movie) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Movie Not Found</h1>
          <Link to="/movies" className="text-indigo-600 hover:text-indigo-700">
            ← Back to Movies
          </Link>
        </div>
      </div>
    )
  }

  const filteredShowtimes = showtimes.filter(showtime => {
    const matchesMovie = showtime.movieId === movie.id
    const matchesDate = !selectedDate || showtime.date === selectedDate
    const matchesCinema = !selectedCinema || showtime.cinemaId === selectedCinema
    return matchesMovie && matchesDate && matchesCinema
  })

  const today = new Date().toISOString().split('T')[0]
  const nextWeek = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10"></div>
        <img 
          src={movie.backdrop} 
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 to-transparent md:hidden"></div>
        
        <div className="relative z-20 h-full flex items-end">
          <div className="container mx-auto px-4 pb-8">
            <div className="flex flex-col md:flex-row gap-8 items-end">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-48 h-72 object-cover rounded-xl shadow-2xl hidden md:block"
              />
              <div className="text-white md:text-gray-900">
                <div className="flex items-center gap-3 mb-3">
                  {movie.nowShowing && (
                    <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Now Showing
                    </span>
                  )}
                  {movie.comingSoon && (
                    <span className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Coming Soon
                    </span>
                  )}
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {movie.rating}
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{movie.title}</h1>
                {movie.subtitle && (
                  <p className="text-xl md:text-2xl text-gray-300 md:text-gray-600 mb-4">{movie.subtitle}</p>
                )}
                <div className="flex flex-wrap gap-4 text-sm md:text-base">
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {movie.duration} min
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    {movie.genre.join(', ')}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                    {movie.language}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Synopsis */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Synopsis</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{movie.description}</p>
            </section>

            {/* Cast & Crew */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cast & Crew</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Director</h3>
                  <p className="text-gray-700">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Cast</h3>
                  <p className="text-gray-700">{movie.cast.join(', ')}</p>
                </div>
              </div>
            </section>

            {/* Showtimes */}
            {movie.nowShowing && (
              <section>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Showtimes</h2>
                
                {/* Filters */}
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                  <input
                    type="date"
                    min={today}
                    max={nextWeek}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <select
                    value={selectedCinema}
                    onChange={(e) => setSelectedCinema(e.target.value)}
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="">All Cinemas</option>
                    {cinemas.map(cinema => (
                      <option key={cinema.id} value={cinema.id}>{cinema.name}</option>
                    ))}
                  </select>
                </div>

                {/* Showtimes List */}
                {filteredShowtimes.length === 0 ? (
                  <div className="bg-white rounded-xl shadow-lg p-8 text-center">
                    <p className="text-gray-600">No showtimes available for the selected criteria.</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {cinemas.map(cinema => {
                      const cinemaShowtimes = filteredShowtimes.filter(st => st.cinemaId === cinema.id)
                      if (cinemaShowtimes.length === 0) return null
                      
                      return (
                        <div key={cinema.id} className="bg-white rounded-xl shadow-lg p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-4">{cinema.name}</h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {cinemaShowtimes.map(showtime => (
                              <Link
                                key={showtime.id}
                                to={`/booking/${showtime.id}`}
                                className="bg-gray-50 hover:bg-indigo-50 border border-gray-200 hover:border-indigo-300 rounded-lg p-3 text-center transition-all duration-200 group"
                              >
                                <div className="text-sm text-gray-600 mb-1">{showtime.time}</div>
                                <div className="text-xs text-gray-500 mb-2">{showtime.format}</div>
                                <div className="text-sm font-semibold text-indigo-600">${showtime.price}</div>
                                <div className="text-xs text-gray-500 mt-1">
                                  {showtime.availableSeats} seats left
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )}
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Movie Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <img 
                src={movie.poster} 
                alt={movie.title}
                className="w-full rounded-lg mb-6 md:hidden"
              />
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Release Date</h3>
                  <p className="text-gray-900">{new Date(movie.releaseDate).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Language</h3>
                  <p className="text-gray-900">{movie.language}</p>
                </div>
                
                {movie.subtitles.length > 0 && (
                  <div>
                    <h3 className="text-sm font-semibold text-gray-500 mb-1">Subtitles</h3>
                    <p className="text-gray-900">{movie.subtitles.join(', ')}</p>
                  </div>
                )}
                
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 mb-1">Rating</h3>
                  <p className="text-gray-900">{movie.rating}</p>
                </div>
              </div>

              {movie.nowShowing && (
                <Link
                  to="/movies"
                  className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300 text-center mt-6 block"
                >
                  View All Showtimes
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}