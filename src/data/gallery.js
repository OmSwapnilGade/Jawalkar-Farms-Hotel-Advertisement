// Gallery image data with categories
// Using placeholder gradient boxes — replace with real images later
export const galleryImages = [
  { id: 1, category: 'rooms', alt: 'Clean spacious room with garden view' },
  { id: 2, category: 'rooms', alt: 'Room interior with comfortable beds' },
  { id: 3, category: 'food', alt: 'Maharashtrian Veg Thali spread' },
  { id: 4, category: 'food', alt: 'Chicken Kolhapuri with rice' },
  { id: 5, category: 'food', alt: 'Outdoor dining table setup' },
  { id: 6, category: 'camping', alt: 'Tent camping setup at dusk' },
  { id: 7, category: 'camping', alt: 'Bonfire under the stars' },
  { id: 8, category: 'garden', alt: 'Lush green garden pathway' },
  { id: 9, category: 'garden', alt: 'Flower garden with seating area' },
  { id: 10, category: 'garden', alt: 'Morning view of the farm' },
  { id: 11, category: 'events', alt: 'Birthday celebration setup' },
  { id: 12, category: 'events', alt: 'Family gathering outdoor dining' },
  { id: 13, category: 'rooms', alt: 'Bathroom with hot water facility' },
  { id: 14, category: 'food', alt: 'Fresh farm salad and solkadhi' },
  { id: 15, category: 'camping', alt: 'Morning nature walk trail' },
  { id: 16, category: 'garden', alt: 'Children playing in the garden' },
  { id: 17, category: 'events', alt: 'Group outing team activity' },
  { id: 18, category: 'food', alt: 'Special Non-Veg Thali platter' },
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
