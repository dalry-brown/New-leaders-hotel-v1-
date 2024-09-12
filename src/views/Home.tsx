import homeStyle from "../styles/view-styles/home.module.css"
import Call from "@mui/icons-material/Call"
import ceoAvatar from "../assets/home avatar.png"
import welcomeImg from '../assets/welcome picture.png'
import rooma from '../assets/rooma.png'
import roomb from '../assets/roomb.png'
import roomc from '../assets/roomc.png'
import roomd from '../assets/roomd.png'
import Carousel from '../components/home-components/Carousel'
import Amenity from '../components/home-components/Amenity'
import Testimonial from "../components/home-components/Testimonial"
import boardroom from "../assets/boardroom.png"
import pool from "../assets/pool.png"
import dinner from "../assets/dinner.png"
import { usePageStore } from "../store/basicStore"
import { useEffect } from "react"
import { Link } from "react-router-dom"



const Home = () => {
  const { selectHome } = usePageStore()
    
  useEffect(() => {
    selectHome()
  }, [])

  const images = [
    {
      img: roomc,
      path: "/rooms-and-suites#vip"
    },
    {
      img: rooma,
      path: "/rooms-and-suites#executive"
    },
    {
      img: roomd,
      path: "/rooms-and-suites#double"
    },
    {
      img: roomb,
      path: "/rooms-and-suites#single"
    }
  ]
  
  const amenities = [
    {
    id: 1,
    image: boardroom,
    title: "Executive Board Room",
    content: "The Executive Board Room at New Leaders Hotel combines sophistication and functionality with state-of-the-art audiovisual technology and high-speed internet. Elegantly designed with modern furnishings, it comfortably accommodates up to [number] attendees. Dedicated support staff ensure a seamless experience for all your high-level meetings.",
    imagePositionRight: false,
    },
    {
    id: 2,
    image: pool,
    title: "Swimming Pool",
    content: "The Swimming Pool at New Leaders Hotel is an oasis of tranquility and relaxation. Surrounded by elegant loungers and lush greenery, it provides a serene escape from the hustle and bustle. Dive into the crystal-clear waters or unwind by the poolside with attentive service from our dedicated staff. Perfect for a refreshing swim or a leisurely afternoon, our pool area enhances your luxurious stay.",
    imagePositionRight: true
    },
    {
    id: 3,
    image: dinner,
    title: "Restaurant",
    content: "The Restaurant at New Leaders Hotel offers gourmet cuisine in an elegant setting. Our expert chefs craft dishes from the finest ingredients, ensuring a memorable dining experience. Enjoy impeccable service and a diverse menu, whether it's breakfast, lunch, or a romantic dinner.",
    imagePositionRight: false
    }
  ]

  return (
    <main className={homeStyle.home}>
      <div className={homeStyle.homeContainer}>
        <section className={homeStyle.hero}>
          <section className={homeStyle.heroContainer}>
            <h1 className={homeStyle.heroTitle1}>Welcome to Your Luxurious Escape and Comfort</h1>
            <h2 className={homeStyle.heroTitle2}>Experience Unparalleled Luxury and Create Unforgettable Memories</h2>
            <div className={homeStyle.heroAbt}>
              <h3>Discover the pinnacle of luxury and comfort. Immerse yourself in a serene haven where elegance meets exceptional service. Your unforgettable stay begins here.</h3>
            </div>
            <div className={homeStyle.helplineContainer}>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to='/contact#contactUs'>
              <div className={homeStyle.helpline}>
                <div className={homeStyle.left}>
                  {/* <Call style={{ fontSize: 24, color: '#F3F5F6'}}/> */}
                  <Call/>
                </div>
                <div className={homeStyle.right}>
                  <p>Helpline:</p>
                  <p> +233   24   849   8755</p>
                </div>
                </div>
              </Link>
            </div>
          </section>
        </section>
        <section className={homeStyle.introduction}>
          <section className={homeStyle.introductionContainer}>
            <div className={homeStyle.text}>
              <div className={homeStyle.address}>
                <h5>Luxuriate! Relax! Unwind!</h5>
                <h4>Relax in our Luxurious 
                  comfort</h4>
                <p>Welcome to New Leaders Hotel, where luxury meets hospitality at its finest. At our hotel, we are committed to exceeding your expectations with impeccable service, exquisite accommodations, and a dedication to creating memorable experiences. Whether you're here for business or leisure, we invite you to indulge in our world of luxurious comfort and unparalleled elegance.</p>
              </div>
              {/* <div className={homeStyle.reference}>
                <div className={homeStyle.avatar}>
                  <img src={ceoAvatar} alt="CEO's avatar picture"/>
                </div>
                <div className={homeStyle.details}>
                  <p>Joseph Appiah</p>
                  <p>Director and Chief Operations Officer</p>
                </div>
              </div> */}
            </div>
            <div className={homeStyle.image}>
              <img src={welcomeImg} alt="Relaxation couches" />
            </div>
          </section>
        </section>
        <section className={homeStyle.rooms}>
          <section className={homeStyle.roomsContainer}>
            <section className={homeStyle.roomsTitle}>
              <h5>Luxury Experience</h5>
              <h2>Rooms & Suites</h2>
              <Carousel images={images} />
              <div className={homeStyle.viewAll}>
              <Link style={{textDecoration: 'none', color: 'inherit'}} to='/rooms-and-suites'><button>View all rooms</button></Link>
              </div>
            </section>
          </section>
        </section>
        <section className={homeStyle.amenities}>
          <section className={homeStyle.amenitiesContainer}>
            {
              amenities.map((amenity) => (<Amenity amenities={amenity}/>))
            }
          </section>
        </section>
        <Testimonial/>
      </div>
    </main>
  )
}

export default Home
