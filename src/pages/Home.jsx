import Hero from '../components/Hero'
import FeaturedPosts from '../components/FeaturedPosts'
import Categories from '../components/Categories'
import LatestPosts from '../components/LatestPosts'
import Newsletter from '../components/Newsletter'

function Home() {
  return (
    <div>
      <Hero />
      <FeaturedPosts />
      <Categories />
      <LatestPosts />
      <Newsletter />
    </div>
  )
}

export default Home