// Gallery image data with categories
// Using placeholder gradient boxes — replace with real images later
export const galleryImages = [
  { id: 1, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room8.jpeg' },
  { id: 2, category: 'rooms', alt: 'Room interior with comfortable beds', image: '/images/room7.jpeg' },
  { id: 3, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room3.jpeg' },
  { id: 4, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room10.jpeg' },
  { id: 5, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room9.jpeg' },
  { id: 6, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room13.jpeg' },
  { id: 7, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room2.jpeg' },
  { id: 8, category: 'rooms', alt: 'Clean spacious room with garden view', image: '/images/room6.jpeg' },
  { id: 9, category: 'food', alt: 'Maharashtrian Veg Thali spread', image: '/images/food1.jpeg' },
  { id: 10, category: 'food', alt: 'Chicken Kolhapuri with rice', image: '/images/food2.jpeg' },
  { id: 11, category: 'food', alt: 'Outdoor dining table setup', image: '/images/food3.jpeg' },
  { id: 12, category: 'camping', alt: 'Bonfire under the stars', image: '/images/night2.jpeg' },
  { id: 13, category: 'camping', alt: 'Bonfire under the stars', image: '/images/night3.jpeg' },
  { id: 14, category: 'camping', alt: 'Tent camping setup at dusk', image: '/images/hero/tents.jpeg' },
  { id: 15, category: 'garden', alt: 'Lush green garden pathway', image: '/images/morning4.jpeg' },
  { id: 16, category: 'garden', alt: 'Flower garden with seating area', image: '/images/morning1.jpeg' },
  { id: 17, category: 'garden', alt: 'Morning view of the farm', image: '/images/scene1.jpeg' },
  { id: 18, category: 'garden', alt: 'Birthday celebration setup', image: '/images/scene2.jpeg' },
  { id: 19, category: 'events', alt: 'Family gathering outdoor dining', image: '/images/ChatGPT swim.png' },
]

// Color palettes for placeholder images (gradient backgrounds)
const palettes = {
  rooms: ['#DBEAFE', '#93C5FD'],
  food: ['#FEF3C7', '#FCD34D'], 
  camping: ['#D1FAE5', '#6EE7B7'],
  garden: ['#DCFCE7', '#86EFAC'],
  events: ['#FCE7F3', '#F9A8D4'],
}

export function getPlaceholderGradient(category) {
  const p = palettes[category] || ['#F3F4F6', '#D1D5DB']
  return `linear-gradient(135deg, ${p[0]}, ${p[1]})`
}

export const galleryCategories = ['all', 'rooms', 'food', 'camping', 'garden', 'events']
