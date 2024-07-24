import React from 'react'
import aboutStyle from '../styles/view-styles/about.module.css'
import vans from '../assets/vans.png'
import Team from '../components/about-components/Team'

const About = () => {
  return (
    <main className={aboutStyle.about}>
      <div className={aboutStyle.aboutContainer}>
        <section className={aboutStyle.aboutUs}>
          <div className={aboutStyle.aboutUsContainer}>
            <div className={aboutStyle.content}>
              <h2>About Us</h2>
              <p>Welcome to New Leaders Hotel, where luxury meets unparalleled elegance. Our hotel is a sanctuary of sophistication and comfort, designed to provide an exceptional experience for discerning travelers. At New Leaders Hotel, we redefine luxury with meticulous attention to detail and a commitment to excellence.</p>
            </div>
            <div className={aboutStyle.video}>
            <iframe className={aboutStyle.videoIframe} src="https://player.vimeo.com/video/811970471?h=b0339dee01&autoplay=1&loop=1&autopause=0&muted=1&title=0&byline=0&portrait=0&controls=0"  
            allow="autoplay">
            </iframe>
            </div>
          </div>
        </section>
        <section className={aboutStyle.brand}>
          <div className={aboutStyle.brandContainer}>
            <div className={aboutStyle.first}>
              <h3>Our Story</h3>
              <p>Established in 2024, New Leaders Hotel was born from a vision to create an oasis of luxury in the heart of Amasaman. From the moment you step into our grand lobby, you are transported into a world of refined opulence. Our journey has been one of passion and dedication, continually evolving to set new standards in hospitality.</p>
            </div>
            <div className={aboutStyle.second}>
              <h3>Our Values</h3>
              <div className={aboutStyle.trait}>
                <div className={aboutStyle.property}>
                  <h4>Exelence</h4>
                  <p>We strive for perfection in every aspect of our service</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Elegance</h4>
                  <p>Our decor and ambiance reflect timeless elegance and sophistication</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Guest Satisfaction</h4>
                  <p>Your comfort and satisfaction are our top priorities</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Innovation</h4>
                  <p>We continually seek new ways to enhance your experience</p>
                </div>
              </div>
            </div>
            <div className={aboutStyle.third}>
              <h3>Why Choose Us?</h3>
              <div className={aboutStyle.trait}>
                <div className={aboutStyle.property}>
                  <h4>Prime Location</h4>
                  <p>Situated in the heart of Amasaman, our hotel offers easy access to the city’s premier attractions and shopping districts.</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Exquisite Design</h4>
                  <p>Our interiors are designed with the finest materials and a keen eye for detail, creating an ambiance of refined elegance</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Exceptional Service</h4>
                  <p>From personalized check-ins to 24/7 concierge service, we are dedicated to making your stay as comfortable and enjoyable as possible</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={aboutStyle.offer}>
          <section className={aboutStyle.offerContainer}>
          <div className={aboutStyle.first}>
              <h3>What we offer</h3>
              <div className={aboutStyle.trait}>
                <div className={aboutStyle.property}>
                  <h4>Luxurious Rooms & Suites</h4>
                  <p>Exquisitely designed with plush furnishings. Our rooms and suites offer the perfect blend of comfort and style</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Fine Dining</h4>
                  <p>Indulge in gourmet cuisines at our renowned restaurants, where culinary excellence meets impeccable service</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Spa & Wellness</h4>
                  <p>Rejuvenate your mind and body at our state-of-the-art spa, offering a range of treatments designed to relax and invigorate</p>
                </div>
                <div className={aboutStyle.property}>
                  <h4>Event Spaces</h4>
                  <p>Our elegant event spaces are perfect for weddings, corporate events, and special occasions, ensuring a memorable experience</p>
                </div>
              </div>
            </div>
            {/* <div className={aboutStyle.right}> */}
              <img src={vans} alt="2 new leader hotel vans" />
            {/* </div> */}
          </section>
        </section>
        <Team/>
      </div>
    </main>
  )
}

export default About
