import { useState } from 'react'
import { foodItems } from '../data'

export default function Food() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const categories = ['all', ...Array.from(new Set(foodItems.map(item => item.category)))]
  
  const filteredItems = selectedCategory === 'all' 
    ? foodItems 
    : foodItems.filter(item => item.category === selectedCategory)

  const getCategoryTitle = (category: string) => {
    switch(category) {
      case 'popcorn': return 'Popcorn'
      case 'drinks': return 'Drinks'
      case 'candy': return 'Candy'
      case 'hot-food': return 'Hot Food'
      case 'combos': return 'Combos'
      default: return 'All Items'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Food & Drinks</h1>
          <p className="text-xl text-gray-200">Delicious treats for your movie experience</p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-white shadow-sm sticky top-16 z-40">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {getCategoryTitle(category)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url('${item.image}')` }}>
                  <div className="h-full bg-black/20 flex items-end">
                    <div className="p-4">
                      <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                        {getCategoryTitle(item.category)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  
                  {item.sizes ? (
                    <div className="space-y-2 mb-4">
                      {item.sizes.map((size, index) => (
                        <div key={index} className="flex justify-between items-center">
                          <span className="text-gray-700">{size.name}</span>
                          <span className="font-semibold text-indigo-600">${size.price}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="mb-4">
                      <span className="text-2xl font-bold text-indigo-600">${item.price}</span>
                    </div>
                  )}
                  
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300">
                    Add to Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-cyan-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Combo Deals</h2>
            <p className="text-xl text-gray-200">Save big with our special combinations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {foodItems.filter(item => item.category === 'combos').map((combo) => (
              <div key={combo.id} className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="h-32 bg-cover bg-center" style={{ backgroundImage: `url('${combo.image}')` }}>
                  <div className="h-full bg-black/40 flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-3xl font-bold mb-2">BEST VALUE</div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{combo.name}</h3>
                  <p className="text-gray-600 mb-4">{combo.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-indigo-600">${combo.price}</span>
                    <span className="text-gray-500 line-through">Save $8+</span>
                  </div>
                  <button className="w-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-white px-4 py-3 rounded-lg font-semibold hover:from-indigo-700 hover:to-cyan-600 transition-all duration-300">
                    Order Combo
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}