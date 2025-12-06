import { Link } from 'react-router-dom'
import { cinemas } from '../data'

export default function Locations() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Locations</h1>
          <p className="text-xl text-gray-200">Find a cinema near you</p>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cinemas.map((cinema) => (
              <div key={cinema.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-r from-indigo-600 to-cyan-500 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">{cinema.name}</h3>
                    <p className="text-lg">{cinema.screens} Screens</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">Address</p>
                        <p className="text-gray-600">{cinema.address}</p>
                        <p className="text-gray-600">{cinema.city}, {cinema.state} {cinema.zipCode}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">Phone</p>
                        <p className="text-gray-600">{cinema.phone}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gray-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="text-gray-900 font-medium">Email</p>
                        <p className="text-gray-600">{cinema.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-900 font-medium mb-3">Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {cinema.amenities.map((amenity, index) => (
                        <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm">
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-gray-900 font-medium mb-3">Transportation</h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-gray-700">Parking</p>
                        <p className="text-sm text-gray-600">{cinema.parking}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-700">Public Transport</p>
                        {cinema.publicTransport.map((transport, index) => (
                          <p key={index} className="text-sm text-gray-600">{transport}</p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to="/movies"
                      className="flex-1 bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300 text-center"
                    >
                      Book Tickets
                    </Link>
                    <button className="px-6 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                      Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}