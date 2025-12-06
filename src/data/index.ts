import { Movie, Cinema, Showtime, FoodItem, Offer } from '../types'

export const movies: Movie[] = [
  {
    id: '1',
    title: 'Dune: Part Two',
    subtitle: 'The Epic Continues',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future.',
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    duration: 166,
    rating: 'PG-13',
    releaseDate: '2024-03-01',
    poster: 'https://images.unsplash.com/photo-1489599809568-2ed9ba9e1ac1?w=300&h=450&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1489599809568-2ed9ba9e1ac1?w=1920&h=1080&fit=crop',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Josh Brolin'],
    director: 'Denis Villeneuve',
    language: 'English',
    subtitles: ['English', 'Spanish'],
    nowShowing: true,
    comingSoon: false
  },
  {
    id: '2',
    title: 'Oppenheimer',
    subtitle: 'The Man Who Changed the World',
    description: 'The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb during World War II.',
    genre: ['Biography', 'Drama', 'History'],
    duration: 180,
    rating: 'R',
    releaseDate: '2023-07-21',
    poster: 'https://images.unsplash.com/photo-1578915629149-219a5a1b6c9a?w=300&h=450&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1578915629149-219a5a1b6c9a?w=1920&h=1080&fit=crop',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.'],
    director: 'Christopher Nolan',
    language: 'English',
    subtitles: ['English', 'French', 'German'],
    nowShowing: true,
    comingSoon: false
  },
  {
    id: '3',
    title: 'Barbie',
    subtitle: 'Life in Plastic is Fantastic',
    description: 'Barbie suffers a crisis that leads her to question her world and her existence. She travels to the real world to find true happiness.',
    genre: ['Comedy', 'Adventure', 'Fantasy'],
    duration: 114,
    rating: 'PG-13',
    releaseDate: '2023-07-21',
    poster: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=300&h=450&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&h=1080&fit=crop',
    cast: ['Margot Robbie', 'Ryan Gosling', 'America Ferrera', 'Kate McKinnon'],
    director: 'Greta Gerwig',
    language: 'English',
    subtitles: ['English', 'Spanish'],
    nowShowing: true,
    comingSoon: false
  },
  {
    id: '4',
    title: 'The Marvels',
    subtitle: 'Unite or Fall',
    description: 'Carol Danvers, aka Captain Marvel, has reclaimed her identity from the tyrannical Kree and taken revenge on the Supreme Intelligence. But unintended consequences see her shouldering the burden of a destabilized universe.',
    genre: ['Action', 'Adventure', 'Fantasy'],
    duration: 105,
    rating: 'PG-13',
    releaseDate: '2023-11-10',
    poster: 'https://images.unsplash.com/photo-1606041012202-37a06985258b?w=300&h=450&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1606041012202-37a06985258b?w=1920&h=1080&fit=crop',
    cast: ['Brie Larson', 'Teyonah Parris', 'Iman Vellani', 'Samuel L. Jackson'],
    director: 'Nia DaCosta',
    language: 'English',
    subtitles: ['English', 'Spanish', 'French'],
    nowShowing: true,
    comingSoon: false
  },
  {
    id: '5',
    title: 'Killers of the Flower Moon',
    subtitle: 'Money. Power. Murder.',
    description: 'When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one - until the FBI steps in to unravel the mystery.',
    genre: ['Crime', 'Drama', 'History'],
    duration: 206,
    rating: 'R',
    releaseDate: '2023-10-20',
    poster: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop',
    cast: ['Leonardo DiCaprio', 'Robert De Niro', 'Lily Gladstone', 'Jesse Plemons'],
    director: 'Martin Scorsese',
    language: 'English',
    subtitles: ['English', 'Spanish'],
    nowShowing: true,
    comingSoon: false
  },
  {
    id: '6',
    title: 'Wonka',
    subtitle: 'Every Flavor is Possible',
    description: 'The story will focus on a young Willy Wonka and how he met the Oompa-Loompas before opening his famous chocolate factory.',
    genre: ['Adventure', 'Comedy', 'Family'],
    duration: 116,
    rating: 'PG',
    releaseDate: '2023-12-15',
    poster: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=300&h=450&fit=crop',
    backdrop: 'https://images.unsplash.com/photo-1511381939415-e44015466834?w=1920&h=1080&fit=crop',
    cast: ['Timothée Chalamet', 'Olivia Colman', 'Hugh Grant', 'Rowan Atkinson'],
    director: 'Paul King',
    language: 'English',
    subtitles: ['English', 'Spanish'],
    nowShowing: false,
    comingSoon: true
  }
]

export const cinemas: Cinema[] = [
  {
    id: '1',
    name: 'Omniplex Times Square',
    address: '123 Broadway',
    city: 'New York',
    state: 'NY',
    zipCode: '10036',
    phone: '(212) 555-0101',
    email: 'timessquare@omniplex.com',
    screens: 16,
    amenities: ['IMAX', 'Dolby Cinema', 'VIP Seating', 'Restaurant', 'Bar', 'Arcade'],
    directions: 'Located in the heart of Times Square, easily accessible by subway.',
    parking: 'Multiple parking garages within 2 blocks',
    publicTransport: ['Subway: N/Q/R/W/S/1/2/3/7', 'Bus: M7/M20/M104']
  },
  {
    id: '2',
    name: 'Omniplex Downtown',
    address: '456 Main Street',
    city: 'Los Angeles',
    state: 'CA',
    zipCode: '90012',
    phone: '(213) 555-0202',
    email: 'downtown@omniplex.com',
    screens: 12,
    amenities: ['3D', 'Dolby Atmos', 'Luxury Seating', 'Cafe', 'Party Room'],
    directions: 'Downtown LA location near Grand Park.',
    parking: 'On-site parking available',
    publicTransport: ['Metro: Civic Center/Grand Park Station', 'Bus: Multiple lines']
  },
  {
    id: '3',
    name: 'Omniplex Suburban Plaza',
    address: '789 Shopping Center Drive',
    city: 'Chicago',
    state: 'IL',
    zipCode: '60601',
    phone: '(312) 555-0303',
    email: 'suburban@omniplex.com',
    screens: 14,
    amenities: ['IMAX', '3D', 'VIP Seating', 'Restaurant', 'Kids Party Room'],
    directions: 'Located in Suburban Plaza Shopping Center.',
    parking: 'Free parking for 3 hours with validation',
    publicTransport: ['CTA: Blue Line', 'Bus: Routes 20, 56, 60']
  }
]

export const showtimes: Showtime[] = [
  {
    id: '1',
    movieId: '1',
    cinemaId: '1',
    screenNumber: 1,
    date: '2024-12-06',
    time: '10:30 AM',
    format: 'Standard',
    availableSeats: 150,
    totalSeats: 200,
    price: 15.99
  },
  {
    id: '2',
    movieId: '1',
    cinemaId: '1',
    screenNumber: 1,
    date: '2024-12-06',
    time: '1:45 PM',
    format: 'IMAX',
    availableSeats: 80,
    totalSeats: 100,
    price: 22.99
  },
  {
    id: '3',
    movieId: '1',
    cinemaId: '1',
    screenNumber: 1,
    date: '2024-12-06',
    time: '5:15 PM',
    format: 'Dolby',
    availableSeats: 120,
    totalSeats: 150,
    price: 19.99
  },
  {
    id: '4',
    movieId: '2',
    cinemaId: '1',
    screenNumber: 2,
    date: '2024-12-06',
    time: '11:00 AM',
    format: 'Standard',
    availableSeats: 140,
    totalSeats: 180,
    price: 15.99
  },
  {
    id: '5',
    movieId: '2',
    cinemaId: '1',
    screenNumber: 2,
    date: '2024-12-06',
    time: '3:30 PM',
    format: 'VIP',
    availableSeats: 30,
    totalSeats: 40,
    price: 28.99
  }
]

export const foodItems: FoodItem[] = [
  {
    id: '1',
    name: 'Classic Popcorn',
    description: 'Freshly popped buttery popcorn',
    category: 'popcorn',
    price: 6.99,
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=200&h=200&fit=crop',
    sizes: [
      { name: 'Small', price: 6.99 },
      { name: 'Medium', price: 8.49 },
      { name: 'Large', price: 9.99 }
    ]
  },
  {
    id: '2',
    name: 'Caramel Popcorn',
    description: 'Sweet caramel coated popcorn',
    category: 'popcorn',
    price: 8.49,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop',
    sizes: [
      { name: 'Small', price: 8.49 },
      { name: 'Medium', price: 9.99 },
      { name: 'Large', price: 11.49 }
    ]
  },
  {
    id: '3',
    name: 'Coca-Cola',
    description: 'Refreshing classic cola',
    category: 'drinks',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=200&fit=crop',
    sizes: [
      { name: 'Regular', price: 4.99 },
      { name: 'Large', price: 5.99 }
    ]
  },
  {
    id: '4',
    name: 'Nachos with Cheese',
    description: 'Crispy tortilla chips with warm cheese sauce',
    category: 'hot-food',
    price: 9.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop'
  },
  {
    id: '5',
    name: 'Hot Dog',
    description: 'All-beef hot dog with your choice of toppings',
    category: 'hot-food',
    price: 7.99,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=200&h=200&fit=crop'
  },
  {
    id: '6',
    name: 'M&M\'s',
    description: 'Colorful chocolate candies',
    category: 'candy',
    price: 3.99,
    image: 'https://images.unsplash.com/photo-1587049352846-2a36e69b8562?w=200&h=200&fit=crop'
  },
  {
    id: '7',
    name: 'Movie Combo',
    description: '1 Large Popcorn + 2 Large Drinks + 1 Candy',
    category: 'combos',
    price: 24.99,
    image: 'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=200&h=200&fit=crop'
  }
]

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Tuesday Discount',
    description: 'Get 30% off all tickets every Tuesday',
    type: 'discount',
    discountPercentage: 30,
    validUntil: '2024-12-31',
    terms: 'Valid for all showtimes on Tuesdays. Not valid with other offers.',
    image: 'https://images.unsplash.com/photo-1489599809568-2ed9ba9e1ac1?w=400&h=200&fit=crop'
  },
  {
    id: '2',
    title: 'Family Pack',
    description: '2 Adult + 2 Child tickets + 1 Large Popcorn + 2 Drinks',
    type: 'combo',
    validUntil: '2024-12-31',
    terms: 'Valid for family-friendly movies only. Children under 12.',
    image: 'https://images.unsplash.com/photo-1578915629149-219a5a1b6c9a?w=400&h=200&fit=crop'
  },
  {
    id: '3',
    title: 'Loyalty Rewards',
    description: 'Earn points with every ticket purchase',
    type: 'loyalty',
    validUntil: '2025-12-31',
    terms: '100 points = $5 off. Points expire after 12 months.',
    image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=400&h=200&fit=crop'
  }
]