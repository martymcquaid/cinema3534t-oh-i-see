export interface Movie {
  id: string
  title: string
  subtitle?: string
  description: string
  genre: string[]
  duration: number // in minutes
  rating: string // G, PG, PG-13, R, etc.
  releaseDate: string
  poster: string
  backdrop: string
  trailer?: string
  cast: string[]
  director: string
  language: string
  subtitles: string[]
  nowShowing: boolean
  comingSoon: boolean
}

export interface Showtime {
  id: string
  movieId: string
  cinemaId: string
  screenNumber: number
  date: string
  time: string
  format: 'Standard' | '3D' | 'IMAX' | 'Dolby' | 'VIP'
  availableSeats: number
  totalSeats: number
  price: number
}

export interface Cinema {
  id: string
  name: string
  address: string
  city: string
  state: string
  zipCode: string
  phone: string
  email: string
  screens: number
  amenities: string[]
  directions?: string
  parking: string
  publicTransport: string[]
}

export interface Seat {
  id: string
  row: string
  number: number
  type: 'standard' | 'premium' | 'vip'
  price: number
  available: boolean
}

export interface Booking {
  id: string
  movieId: string
  showtimeId: string
  cinemaId: string
  seats: Seat[]
  totalAmount: number
  customerName: string
  customerEmail: string
  customerPhone: string
  bookingDate: string
  status: 'pending' | 'confirmed' | 'cancelled'
}

export interface FoodItem {
  id: string
  name: string
  description: string
  category: 'popcorn' | 'drinks' | 'candy' | 'hot-food' | 'combos'
  price: number
  image: string
  sizes?: { name: string; price: number }[]
}

export interface Offer {
  id: string
  title: string
  description: string
  type: 'discount' | 'combo' | 'loyalty'
  discountPercentage?: number
  validUntil: string
  terms: string
  image: string
}