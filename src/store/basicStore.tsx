// src/store/useDropdownStore.ts
import { create } from 'zustand';

interface DropdownState {
  isOpen: boolean;
  toggleDropdown: () => void;
  closeDropdown: () => void;
}

export const useDropdownStore = create<DropdownState>((set) => ({
  isOpen: false,
  toggleDropdown: () => set((state) => ({ isOpen: !state.isOpen })),
  closeDropdown: () => set({ isOpen: false })
}));

interface PageState {
    homeSelected: boolean,
    aboutSelected: boolean,
    roomsSelected: boolean,
    contactSelected: boolean,
    bookingSelected: boolean,
    selectHome: () => void,
    selectAbout: () => void,
    selectRooms: () => void,
    selectContact: () => void,
    selectBooking: () => void
}

export const usePageStore = create<PageState>((set) => ({
    homeSelected: false,
    aboutSelected: false,
    roomsSelected: false,
    contactSelected: false,
    bookingSelected: false,
    selectHome: () => 
        set(() => ({ 
            homeSelected: true,
            aboutSelected: false,
            roomsSelected: false,
            contactSelected: false,
            bookingSelected: false,
         })),
    selectAbout: () => 
        set(() => ({ 
            homeSelected: false,
            aboutSelected: true,
            roomsSelected: false,
            contactSelected: false,
            bookingSelected: false,
         })),
    selectRooms: () => 
        set(() => ({ 
            homeSelected: false,
            aboutSelected: false,
            roomsSelected: true,
            contactSelected: false,
            bookingSelected: false,
         })),
    selectContact: () => 
        set(() => ({ 
            homeSelected: false,
            aboutSelected: false,
            roomsSelected: false,
            contactSelected: true,
            bookingSelected: false,
         })),
    selectBooking: () => 
        set(() => ({ 
            homeSelected: false,
            aboutSelected: false,
            roomsSelected: false,
            contactSelected: false,
            bookingSelected: true,
         })),
}))

interface ScreenSizeState {
    screenWidth: number;
    setScreenWidth: (width: number) => void;
  }
  
  export const useScreenSizeStore = create<ScreenSizeState>((set) => ({
    screenWidth: window.innerWidth,
    setScreenWidth: (width: number) => set({ screenWidth: width }),
  }));