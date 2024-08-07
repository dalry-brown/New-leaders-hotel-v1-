import roomStyle from "../styles/view-styles/rooms-and-suites.module.css";
import { KeyboardArrowDown, Add, Remove } from '@mui/icons-material';
import { usePageStore, useScreenSizeStore, useRoomStore, useDropdownStore, useRoomSettingsStore, useDateDropdownStore } from '../store/basicStore';
import { useEffect, useRef, useState } from 'react';
import { useLocation, Link } from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const MyDatePicker = ({ selectedDate, setSelectedDate, excludedDates }) => {
  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat='yyyy-MM-dd'
        inline
        minDate={(excludedDates.length !== 0) ? excludedDates[0] : new Date()}
        excludeDates={excludedDates}
      />
    </div>
  );
};

const DropDownMenu = ({ dropdownRef }) => {
  const { setVipRoom, setExecutiveRoom, setDoubleRoom, setSingleRoom, resetRooms } = useRoomStore();
  const { closeDropdown } = useDropdownStore();
  const { setVipRoomType } = useRoomSettingsStore();

  return (
    <ul className={roomStyle.updatedDropLink} ref={dropdownRef}>
      <Link className={roomStyle.dropLink} onClick={() => { setVipRoom(); closeDropdown(); setVipRoomType()}} to="#">
        <li>VIP Lounge</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { setExecutiveRoom(); closeDropdown(); }} to="#">
        <li>Executive Lounge</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { setDoubleRoom(); closeDropdown(); }} to="#">
        <li>Standard Double</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { setSingleRoom(); closeDropdown(); }} to="#">
        <li>Single Occupancy</li>
      </Link>
      <Link className={roomStyle.dropLink} onClick={() => { resetRooms(); closeDropdown(); }} to="#">
        <li>All Rooms</li>
      </Link>
    </ul>
  );
};

const RoomsAndSuites = () => {
  const location = useLocation();
  const { uniqueRooms, rooms } = useRoomStore();
  const { selectRooms } = usePageStore();
  const { screenWidth } = useScreenSizeStore();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isCheckInOpen, setIsCheckInOpen] = useState(false);
  const [isCheckOutOpen, setIsCheckOutOpen] = useState(false);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);
  const datePickerRef = useRef(null);
  const { roomType, increment, decrement, setNumberOfPeople, numberOfPeople } = useRoomSettingsStore();
  const [tempRoom, setTempRoom] = useState({});
  const [count, setCount] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0
  });
  const keys = Object.keys(count);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
      buttonRef.current && !buttonRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
    if (checkInRef.current && !checkInRef.current.contains(event.target) &&
      datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setIsCheckInOpen(false);
    }
    if (checkOutRef.current && !checkOutRef.current.contains(event.target) &&
      datePickerRef.current && !datePickerRef.current.contains(event.target)) {
      setIsCheckOutOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (roomType) {
      for (const room of rooms) {
        if (room.roomType.accType === roomType && room.checkIn === null) {
          setTempRoom(room);
          break;
        }
      }
    }
  }, [roomType, rooms, setTempRoom]);

  useEffect(() => {
    setTempRoom({
      ...tempRoom,
      checkIn: checkInDate,
      checkOut: checkOutDate
    });
  }, [checkInDate, checkOutDate]);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  useEffect(() => {
    selectRooms();
  }, [selectRooms]);

  const handleCountChange = (index, delta) => {
    const key = keys[index];
    setCount((prevCount) => ({
      ...prevCount,
      [key]: Math.max((prevCount[key] || 0) + delta, 0), // Ensure count does not go below 0
    }));
  };

  const handleBook = (type) => {
    let occupantsCount = 0;
    switch (type) {
      case "VIP Lounge":
        occupantsCount = count.count1;
        setNumberOfPeople(count.count1);
        break;
      case "Executive Lounge":
        occupantsCount = count.count2;
        setNumberOfPeople(count.count2);
        break;
      case "Single Occupancy":
        occupantsCount = count.count3;
        setNumberOfPeople(count.count3);
        break;
      case "Standard Double":
        occupantsCount = count.count4;
        setNumberOfPeople(count.count4);
        break;
    }
    const selectedRoom = rooms.find(room => room.roomType.accType === type && room.checkIn === null);
    if (selectedRoom) {
      setTempRoom({...selectedRoom, checkIn: checkInDate, checkOut: checkOutDate, number: occupantsCount});
      
    } else {
      console.log("No available room of type:", type);
    }
    occupantsCount = 0;
  };

  console.log(tempRoom);
  

  return (
    <main className={roomStyle.roomsAndSuites}>
      <div className={roomStyle.roomsAndSuitesContainer}>
        <header>
          <div className={roomStyle.accType}>
            <button
              style={{ position: 'relative' }}
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <label htmlFor="accommodationType">
                {screenWidth > 590 ? 'Accommodation type' : 'Room type'}
              </label>
              <KeyboardArrowDown id="accommodationType" />
              {isDropdownOpen && <DropDownMenu dropdownRef={dropdownRef} />}
            </button>
          </div>
          <div className={roomStyle.bookDate}>
            <button
              style={{ position: 'relative' }}
              ref={checkInRef}
              onClick={() => setIsCheckInOpen(!isCheckInOpen)}
            >
              <label htmlFor="checkIn">
                {checkInDate ? checkInDate.toLocaleDateString() : 'Check In'}
              </label>
              <KeyboardArrowDown id="checkIn" />
            </button>
            {isCheckInOpen && (
              <div className={roomStyle.picker} ref={datePickerRef}>
                <MyDatePicker
                  selectedDate={checkInDate}
                  setSelectedDate={setCheckInDate}
                  excludedDates={[]}
                />
              </div>
            )}
            <button
              style={{ position: 'relative' }}
              ref={checkOutRef}
              onClick={() => setIsCheckOutOpen(!isCheckOutOpen)}
            >
              <label htmlFor="checkOut">
                {checkOutDate ? checkOutDate.toLocaleDateString() : 'Check Out'}
              </label>
              <KeyboardArrowDown id="checkOut" />
            </button>
            {isCheckOutOpen && (
              <div className={roomStyle.picker} style={{ right: 0 }} ref={datePickerRef}>
                <MyDatePicker
                  selectedDate={checkOutDate}
                  setSelectedDate={setCheckOutDate}
                  excludedDates={checkInDate ? [checkInDate] : []}
                />
              </div>
            )}
          </div>
        </header>
        <div id="roomprices" className={roomStyle.roomsContainer}>
          {uniqueRooms.map((room, index) => {
            const key = keys[index];
            const currentCount = count[key] || 0;

            return (
              <div id={room.roomType.elementId} className={roomStyle.room} key={room.id}>
                <h2>{room.roomType.accType}</h2>
                <div className={roomStyle.roomInfo}>
                  <div className={roomStyle.roomImgContainer}>
                    <img src={room.roomType.img} alt={room.roomType.accType} />
                  </div>
                  <div className={roomStyle.roomDetails}>
                    <div className={roomStyle.section}>
                      <div className={roomStyle.section1}>
                        <div className={roomStyle.category}>
                          <h3>Features</h3>
                          {Object.entries(room.roomType.features).map(([feature, value]) => (
                            <div className={roomStyle.info} key={feature}>
                              <h4 className={roomStyle.key}>{feature}</h4>
                              <p>{value}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className={roomStyle.section2}>
                        <div className={roomStyle.category}>
                          <h3>Additional Services</h3>
                          {Object.entries(room.roomType.additionalServices).map(([service, description]) => (
                            <div className={roomStyle.info} key={service}>
                              <h4 className={roomStyle.key}>{service}</h4>
                              <p>{description}</p>
                            </div>
                          ))}
                        </div>
                        <div className={roomStyle.category}>
                          <h3>Pricing</h3>
                          <h4>{room.roomType.pricing}</h4>
                        </div>
                      </div>
                    </div>
                    <div className={roomStyle.btns}>
                      <div className={roomStyle.addRoom}>
                        <button onClick={() => handleCountChange(index, 1)}>
                          <Add style={{ backgroundColor: '#F3F5F6', color: '#3B0908' }} />
                        </button>
                        <button style={{ backgroundColor: '#F3F5F6', color: '#3B0908', outline: 'none' }}>
                          {currentCount}
                        </button>
                        <button
                          onClick={() => handleCountChange(index, -1)}
                          disabled={currentCount === 0}
                        >
                          <Remove style={{ backgroundColor: '#F3F5F6', color: '#3B0908' }} />
                        </button>
                      </div>
                      <button className={roomStyle.book} onClick={() => handleBook(room.roomType.accType)}>Book</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default RoomsAndSuites;
