import SeedLandingCarousel from '../components/landing-carousel'
import SeedProjectCarousel from '../components/project-carousel'
import SeedLandingAboutUs from '../components/landing-about-us'

export default function Home() {
    return (
        <div>
            <SeedLandingCarousel />
			<SeedProjectCarousel />
            <SeedLandingAboutUs />
        </div>
    )
}