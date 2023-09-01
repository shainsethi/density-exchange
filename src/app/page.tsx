import Beats from "./components/Beats/Beats";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/Header";
import Improvement from "./components/Improvement/Improvement";
import Intro from "./components/Introduction/intro";
import Navbar from "./components/Navbar/Navbar";
import Privacy from "./components/Privacy/Privacy";
import Testimonials from "./components/Testimonials/Testimonials";
import Vacancies from "./components/Vacancies/Vacancies";
import Work from "./components/Work/Work";
import Carousel from "./components/carousel/carousel";
import VerticalScrollBar from "./components/progress-bar/progress";



export default function Home() {
  return (
    <main className="wrapper  ">
      <VerticalScrollBar />
      <Navbar />
      <Header />
      <Beats />
      <Carousel />
      <Intro />
      <Improvement />
      <Beats />
      <Testimonials />
      <Privacy />
      <Work />
      <Vacancies /> 
      <Footer />
    </main>
  )
}
