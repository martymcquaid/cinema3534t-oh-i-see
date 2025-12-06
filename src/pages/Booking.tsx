import { useParams, Link } from 'react-router-dom'
import { useState } from 'react'
import { showtimes, movies, cinemas } from '../data'

export default function Booking() {
  const { showtimeId } = useParams<{ showtimeId: string }>()
  const [selectedSeats, setSelectedSeats] = useState<string[]>([])
  const [bookingStep, setBookingStep] = useState<'seats' | 'details' | 'confirmation'>('seats')

  const showtime = showtimes.find(st => st.id === showtimeId)
  const movie = showtime ? movies.find(m => m.id === showtime.movieId) : null
  const cinema = showtime ? cinemas.find(c => c.id === showtime.cinemaId) : null

  if (!showtime || !movie || !cinema) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Showtime Not Found</h1>
          <Link to="/movies" className="text-indigo-600 hover:text-indigo-700">
            ← Back to Movies
          </Link>
        </div>
      </div>
    )

  const generateSeats = () => {
    const seats = []
    const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    const seatsPerRow = 12
    
    rows.forEach(row => {
      for (let i = 1; i <= seatsPerRow; i++) {
        const isVIP = row >= 'F'
        seats.push({
          id: `${row}${i}`,
          row,
          number: i,
          type: isVIP ? 'vip' : 'standard',
          price: isVIP ? showtime.price + 5 : showtime.price,
          available: Math.random() > 0.3 // Simulate some seats being taken
        })
      }
    })
    return seats
  }

  const [seats] = useState(generateSeats())

  const toggleSeat = (seatId: string) => {
    setSelectedSeats(prev => 
      prev.includes(seatId) 
        ? prev.filter(id => id !== seatId)
        : [...prev, seatId]
    )
  }

  const selectedSeatsData = seats.filter(seat => selectedSeats.includes(seat.id))
  const totalPrice = selectedSeatsData.reduce((sum, seat) => sum + seat.price, 0)

  const renderSeatSelection = () => (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Select Your Seats</h2>
        
        {/* Screen */}
        <div className="mb-8">
          <div className="bg-gradient-to-t from-gray-300 to-gray-200 h-2 rounded-full mb-2"></div>
          <p className="text-center text-sm text-gray-600">SCREEN</p>
        </div>

        {/* Seats Grid */}
        <div className="mb-6 overflow-x-auto">
          <div className="min-w-max mx-auto" style={{ width: 'fit-content' }}>
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].map(row => (
              <div key={row} className="flex items-center mb-2">
                <span className="w-8 text-center font-semibold text-gray-600">{row}</span>
                <div className="flex gap-2">
                  {seats.filter(seat => seat.row === row).map(seat => (
                    <button
                      key={seat.id}
                      onClick={() => seat.available && toggleSeat(seat.id)}
                      disabled={!seat.available}
                      className={`w-8 h-8 rounded text-xs font-semibold transition-all duration-200 ${
                        !seat.available 
                          ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                          : selectedSeats.includes(seat.id)
                          ? seat.type === 'vip' 
                            ? 'bg-purple-600 text-white'
                            : 'bg-indigo-600 text-white'
                          : seat.type === 'vip'
                            ? 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                      title={`Seat ${seat.id} - $${seat.price}`}
                    >
                      {seat.number}
                    </button>
                  ))}
                </div>
                <span className="w-8 text-center font-semibold text-gray-600">{row}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 justify-center text-sm">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-100 border border-gray-300 rounded"></div>
            <span>Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-indigo-600 rounded"></div>
            <span>Selected Standard</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded"></div>
            <span>Selected VIP</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gray-300 rounded"></div>
            <span>Unavailable</span>
          </div>
        </div>
      </div>

      {/* Booking Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Summary</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span className="text-gray-600">Movie</span>
            <span className="font-semibold">{movie.title}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Cinema</span>
            <span className="font-semibold">{cinema.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date & Time</span>
            <span className="font-semibold">{showtime.date} at {showtime.time}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Screen</span>
            <span className="font-semibold">Screen {showtime.screenNumber} ({showtime.format})</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Seats</span>
            <span className="font-semibold">{selectedSeats.length > 0 ? selectedSeats.join(', ') : 'None selected'}</span>
          </div>
          <div className="border-t pt-3">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <button
          onClick={() => selectedSeats.length > 0 && setBookingStep('details')}
          disabled={selectedSeats.length === 0}
          className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
            selectedSeats.length > 0
              ? 'bg-gradient-to-r from-indigo-600 to-cyan-500 text-white hover:from-indigo-700 hover:to-cyan-600'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue to Details {selectedSeats.length > 0 && `(${selectedSeats.length} seats)`}
        </button>
      </div>
    </div>
  )

  const renderBookingDetails = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Details</h2>
        
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="John Doe"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="john@example.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="(555) 123-4567"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Booking Summary</h3>
            <div className="space-y-1 text-sm">
              <p><span className="text-gray-600">Movie:</span> {movie.title}</p>
              <p><span className="text-gray-600">Date:</span> {showtime.date} at {showtime.time}</p>
              <p><span className="text-gray-600">Cinema:</span> {cinema.name}</p>
              <p><span className="text-gray-600">Seats:</span> {selectedSeats.join(', ')}</p>
              <p className="font-semibold text-lg pt-2 border-t">
                Total: ${totalPrice.toFixed(2)}
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setBookingStep('seats')}
              className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              Back to Seats
            </button>
            <button
              type="button"
              onClick={() => setBookingStep('confirmation')}
              className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  )

  const renderConfirmation = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
        <p className="text-lg text-gray-600 mb-8">
          Your tickets have been booked successfully. A confirmation email has been sent to your registered email address.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left">
          <h3 className="font-semibold text-gray-900 mb-4">Booking Details</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Booking Reference:</span>
              <span className="font-mono font-semibold">OMX{Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Movie:</span>
              <span>{movie.title}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date & Time:</span>
              <span>{showtime.date} at {showtime.time}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Cinema:</span>
              <span>{cinema.name}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Seats:</span>
              <span>{selectedSeats.join(', ')}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg pt-2 border-t">
              <span>Total Paid:</span>
              <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link
            to="/movies"
            className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300"
          >
            Book More Tickets
          </Link>
          <Link
            to="/"
            className="flex-1 px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            <div className={`flex items-center ${bookingStep === 'seats' ? 'text-indigo-600' : 'text-green-600'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                bookingStep === 'seats' ? 'bg-indigo-600 text-white' : 'bg-green-600 text-white'
              }`}>
                {bookingStep === 'confirmation' ? '✓' : '1'}
              </div>
              <span className="ml-2 font-medium">Select Seats</span>
            </div>
            
            <div className={`flex-1 h-1 mx-4 ${
              bookingStep === 'seats' ? 'bg-gray-200' : 'bg-green-600'
            }`}></div>
            
            <div className={`flex items-center ${
              bookingStep === 'details' ? 'text-indigo-600' : 
              bookingStep === 'confirmation' ? 'text-green-600' : 'text-gray-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                bookingStep === 'details' ? 'bg-indigo-600 text-white' : 
                bookingStep === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {bookingStep === 'confirmation' ? '✓' : '2'}
              </div>
              <span className="ml-2 font-medium">Your Details</span>
            </div>
            
            <div className={`flex-1 h-1 mx-4 ${
              bookingStep === 'confirmation' ? 'bg-green-600' : 'bg-gray-200'
            }`}></div>
            
            <div className={`flex items-center ${
              bookingStep === 'confirmation' ? 'text-green-600' : 'text-gray-400'
            }`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                bookingStep === 'confirmation' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
              }`}>
                {bookingStep === 'confirmation' ? '✓' : '3'}
              </div>
              <span className="ml-2 font-medium">Confirmation</span>
            </div>
          </div>
        </div>

        {/* Step Content */}
        {bookingStep === 'seats' && renderSeatSelection()}
        {bookingStep === 'details' && renderBookingDetails()}
        {bookingStep === 'confirmation' && renderConfirmation()}
      </div>
    </div>
  )
}