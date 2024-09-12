import React from 'react';
import amenityStyle from '../../styles/component-styles/home-components/amenities.module.css';
import { useScreenSizeStore } from '../../store/basicStore';

interface AmenityProps {
  amenities: {
    id: number;
    image: string;
    imagePositionRight: boolean;
    title: string;
    content: string;
  };
}

const Amenity: React.FC<AmenityProps> = ({ amenities }) => {
  const { screenWidth } = useScreenSizeStore();

  const layoutStyle = {
    display: 'flex',
    flexDirection: screenWidth > 599
      ? amenities.imagePositionRight
        ? 'row'
        : 'row-reverse'
      : 'column',
  };

  return (
    <section
      style={layoutStyle}
      className={amenityStyle.amenity}
      key={amenities.id}
    >
      <div className={amenityStyle.amenityImage}>
        <img src={amenities.image} alt={amenities.title} />
      </div>
      <div className={amenityStyle.amenityInfo}>
        {/* <h5>Local Amenities</h5> */}
        <h3>{amenities.title}</h3>
        <p>{amenities.content}</p>
        {/* <div className={amenityStyle.learnMore}>
          <button>Learn more</button>
        </div> */}
      </div>
    </section>
  );
};

export default Amenity;
