import { create } from 'zustand';
import viplounge from '../assets/viplounge.png';
import executiveLounge from '../assets/executiveLounge.png';
import standarddouble from '../assets/standarddouble.png';
import singleOccupancy from '../assets/singleoccupancy.png';

// Dropdown Store
interface DropdownState {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
  isOpen: false,
  toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDropdown: () => set({ isOpen: false }),
}));

export const useDateDropdownStore = create<DropdownState>((set) => ({
  isOpen: false,
  toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDropdown: () => set({ isOpen: false }),
}));

// Page Store
interface PageState {
  homeSelected: boolean;
  aboutSelected: boolean;
  roomsSelected: boolean;
  contactSelected: boolean;
  bookingSelected: boolean;
  selectHome: () => void;
  selectAbout: () => void;
  selectRooms: () => void;
  selectContact: () => void;
  selectBooking: () => void;
}

export const usePageStore = create<PageState>((set) => ({
  homeSelected: false,
  aboutSelected: false,
  roomsSelected: false,
  contactSelected: false,
  bookingSelected: false,
  selectHome: () => set({
    homeSelected: true,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: false,
  }),
  selectAbout: () => set({
    homeSelected: false,
    aboutSelected: true,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: false,
  }),
  selectRooms: () => set({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: true,
    contactSelected: false,
    bookingSelected: false,
  }),
  selectContact: () => set({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: true,
    bookingSelected: false,
  }),
  selectBooking: () => set({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: true,
  }),
}));

// Screen Size Store
interface ScreenSizeState {
  screenWidth: number;
  setScreenWidth: (width: number) => void;
}

export const useScreenSizeStore = create<ScreenSizeState>((set) => ({
  screenWidth: window.innerWidth,
  setScreenWidth: (width: number) => set({ screenWidth: width }),
}));

// Room Details
const vipLoungeRoom = {
  id: 1,
  img: viplounge,
  accType: 'VIP Lounge',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'Personalized concierge service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'vip',
};

const executiveLoungeRoom = {
  id: 2,
  img: executiveLounge,
  accType: 'Executive Lounge',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'Personalized concierge service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'executive',
};

const standardDoubleRoom = {
  id: 3,
  img: standarddouble,
  accType: 'Standard Double',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'cathering service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'double',
};

const singleOccupancyRoom = {
  id: 4,
  img: singleOccupancy,
  accType: 'Single Occupancy',
  features: {
    bed: 'King-size bed',
    size: '400 sq ft',
    occupancy: 2,
    bathroom: 'En-suite bathroom with rain shower and bathtub',
    amenities: 'High speed Wi-Fi, flat-screen TV, sitting room, work desk, air condition',
  },
  additionalServices: {
    room: '24/7 room service available',
    service: 'Personalized concierge service',
  },
  pricing: 'GHC 3000/Night',
  elementId: 'single',
};

// Room Store
interface RoomType {
  id: number;
  img: string;
  accType: string;
  features: {
    bed: string;
    size: string;
    occupancy: number;
    bathroom: string;
    amenities: string;
  };
  additionalServices: {
    room: string;
    service: string;
  };
  pricing: string;
  elementId: string;
}

interface Room {
  id: number;
  roomType: RoomType;
  checkIn: number|null;
  checkOut: number|null;
  number: number;
}

interface RoomState {
  rooms: Room[];
  uniqueRooms: Room[];
  setVipRoom: () => void;
  setExecutiveRoom: () => void;
  setSingleRoom: () => void;
  setDoubleRoom: () => void;
  resetRooms: () => void;
}

export const useRoomStore = create<RoomState>((set) => {
  const rooms: Room[] = [
    {
      id: 1,
      roomType: vipLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 2,
      roomType: executiveLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 3,
      roomType: vipLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 4,
      roomType: vipLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 5,
      roomType: executiveLoungeRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 6,
      roomType: singleOccupancyRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 7,
      roomType: singleOccupancyRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
    {
      id: 8,
      roomType: standardDoubleRoom,
      checkIn: null,
      checkOut: null,
      number: 1,
    },
  ];

  const initialUniqueRooms: Room[] = [];
  const requiredTypes:string[] = ['VIP Lounge', 'Executive Lounge', 'Standard Double', 'Single Occupancy']
  rooms.forEach((room) => {
    if (requiredTypes.includes(room.roomType.accType) && !initialUniqueRooms.some(initRoom => initRoom.roomType.accType === room.roomType.accType)) {
      initialUniqueRooms.push(room);
    }
  });

  const setFilteredRooms = (roomType: RoomType) => {
    const filteredRooms = rooms.filter((room) => room.roomType.accType === roomType.accType);
    set({
      uniqueRooms: filteredRooms.length > 0 ? [filteredRooms[0]] : [],
    });
  };

  return {
    rooms,
    uniqueRooms: initialUniqueRooms,
    setVipRoom: () => setFilteredRooms(vipLoungeRoom),
    setExecutiveRoom: () => setFilteredRooms(executiveLoungeRoom),
    setSingleRoom: () => setFilteredRooms(singleOccupancyRoom),
    setDoubleRoom: () => setFilteredRooms(standardDoubleRoom),
    resetRooms: () => set({ uniqueRooms: initialUniqueRooms }),
  };
});

export const useRoomSettingsStore = create((set) => ({
  roomType: '',
  setVipRoomType: () => set({roomType: 'VIP Lounge'}),
  setExecutiveRoomType: () => set({roomType: 'Executive Lounge'}),
  setDoubleRoomType: () => set({roomType: 'Standard Double'}),
  setSingleRoomType: () => set({ roomType: 'Single Occupancy' }),
  numberOfPeople: 0,
  setNumberOfPeople: (newNumber) => set({numberOfPeople: newNumber}),
  increment: () => set(state => ({ numberOfPeople: state.numberOfPeople + 1 })),
  decrement: () => set(state => ({ numberOfPeople: state.numberOfPeople - 1 }))
  // increment: () => set((state))
  // increment: () => set((state: { numberOfPeople: number; }) => ({numberOfPeople: state.numberOfPeople + 1})),
//   decrement: set((state: { numberOfPeople: number; }) => ({numberOfPeople: state.numberOfPeople - 1}))
  // 
}))