import { offers } from '../data'

export default function Offers() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h1>
          <p className="text-xl text-gray-200">Great deals for your movie experience</p>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current Offers</h2>
            <p className="text-xl text-gray-600">Save money on your next visit</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer) => (
              <div key={offer.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-cover bg-center relative" style={{ backgroundImage: `url('${offer.image}')` }}>
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      {offer.discountPercentage && (
                        <div className="text-4xl font-bold mb-2">{offer.discountPercentage}% OFF</div>
                      )}
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-sm font-medium uppercase tracking-wide">
                          {offer.type === 'discount' ? 'Special Discount' : 
                           offer.type === 'combo' ? 'Combo Deal' : 'Loyalty Reward'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{offer.title}</h3>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Valid until:</p>
                    <p className="text-sm font-semibold text-gray-900">
                      {new Date(offer.validUntil).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <details className="group">
                      <summary className="cursor-pointer text-sm font-medium text-indigo-600 hover:text-indigo-700">
                        Terms & Conditions
                      </summary>
                      <p className="mt-2 text-sm text-gray-600 pl-4 border-l-2 border-gray-200">
                        {offer.terms}
                      </p>
                    </details>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300">
                    Claim Offer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Omniplex Rewards</h2>
              <p className="text-xl text-gray-600">Join our loyalty program and earn points with every visit</p>
            </div>
            
            <div className="bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-2xl p-8 text-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold mb-2">100 Points</div>
                  <p className="text-gray-200">= $5 Reward</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">10 Points</div>
                  <p className="text-gray-200">Per Ticket</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">5 Points</div>
                  <p className="text-gray-200">Per $1 Food</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Join Rewards Program
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Bookings */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Group Bookings</h2>
              <p className="text-xl text-gray-600">Special rates for groups of 10 or more</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">School Groups</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    20% off for groups of 10-25
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    25% off for groups of 26+
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Free teacher tickets
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Get Quote
                </button>
              </div>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Events</h3>
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Private screening options
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Catering available
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom pricing
                  </li>
                </ul>
                <button className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                  Plan Event
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}