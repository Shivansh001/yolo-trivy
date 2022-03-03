import '../App'
import Cards from '../components/cards/Cards';
import Savings from '../components/cards/Savings';
import Testimony from '../components/cards/Testimony';
import Hero from '../components/hero/Hero';
import Carousel from '../components/cards/Carousel'
import Footer from '../components/cards/Footer';
function Home() {
    return(
        <>
            <Hero />
            <Cards />
            <h1>Savings and Access for Every Aspect of Your Life</h1>
            <Savings />
            <Testimony />
            <Savings />
            <Carousel />
            <Footer />
        </>)
}

export default Home;