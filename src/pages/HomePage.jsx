import HeroSlider from '../components/home/HeroSlider.jsx'
import HighlightsSection from '../components/home/HighlightsSection.jsx'
import FacilitiesSection from '../components/home/FacilitiesSection.jsx'
import ExperiencesPreview from '../components/home/ExperiencesPreview.jsx'
import FoodShowcase from '../components/home/FoodShowcase.jsx'
import RoomShowcase from '../components/home/RoomShowcase.jsx'
import NearbyPreview from '../components/home/NearbyPreview.jsx'
import ReviewsPreview from '../components/home/ReviewsPreview.jsx'
import CTABand from '../components/layout/CTABand.jsx'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <HighlightsSection />
      <FacilitiesSection />
      <ExperiencesPreview />
      <FoodShowcase />
      <RoomShowcase />
      <NearbyPreview />
      <ReviewsPreview />
      <CTABand />
    </>
  )
}
