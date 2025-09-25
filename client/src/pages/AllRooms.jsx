import React from "react";
import { Link } from "react-router-dom";
import { roomsDummyData, assets, facilityIcons } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";



const CheckBox = ({label, selected = false, onChange = () => {}}) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input 
        type="checkbox" 
        checked={selected} 
        onChange={(e) => onChange(e.target.checked, label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  )
}

const RadioButton = ({label, selected = false, onChange = () => {}}) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input 
        type="radio" 
        name="sortOptions"
        checked={selected} 
        onChange={() => onChange(label)}
      />
      <span className="font-light select-none">{label}</span>
    </label>
  )
}


export const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = React.useState(false);
  const [selectedSort, setSelectedSort] = React.useState("");

  const roomTypes = [
    "Single Bed",
    "Double Bed",
    "Luxury Bed",
    "Family Suite",
  ];
  const priceRanges = [
    "0-500",
    "500-1000",
    "1000-2000",
    "2000-3000",
  ];

  const sortOptions = [
    "Price: Low to High",
    "Price: High to Low",
    "Newest First",
  ];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair text-4xl md:text-[40px]">Hotel Rooms</h1>
          <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-174">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories
          </p>
        </div>
        {roomsDummyData.map((room) => (
          <div key={room._id} className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0">
            <img
              onClick={() => {navigate(`/rooms/${room._id}`); window.scrollTo(0, 0);}}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p onClick={() => {navigate(`/rooms/${room._id}`); window.scrollTo(0, 0);}} 
              className="text-gray-800 text-3xl font-playfair cursor-pointer">
                {room.hotel.name}
              </p>            
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'> 
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              {/*Room Amenties */}
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-4">
                {room.amenities.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-blue-50">
                    <img src={facilityIcons[item]} alt={item} className="w-5 h-5" />
                    <p className="text-xs">{item}</p>
                  </div>
                ))}
              </div>

              <p className="text-xl font-medium text-gray-700">${room.pricePerNight} / night</p>
            </div>
          </div>
        ))}
      </div>
      {/* Sidebar - Filters */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span onClick={() => setOpenFilter(!openFilter)} className="lg:hidden">
              {openFilter ? 'HIDE' : 'SHOW'}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>
        
        <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-300`}>
          
          {/* Popular Filters */}
          <div className="px-5 pt-5 pb-4">
            <p className="font-medium text-gray-800 pb-3">Popular Filters</p>
            {roomTypes.map((room, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input type="checkbox" id={`room-${index}`} className="w-4 h-4 accent-blue-600" />
                <label htmlFor={`room-${index}`} className="text-sm text-gray-600 cursor-pointer">
                  {room}
                </label>
              </div>
            ))}
          </div>
          
          {/* Price Range */}
          <div className="px-5 py-4 border-t border-gray-200">
            <p className="font-medium text-gray-800 pb-3">Price Range</p>
            {priceRanges.map((range, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input type="checkbox" id={`price-${index}`} className="w-4 h-4 accent-blue-600" />
                <label htmlFor={`price-${index}`} className="text-sm text-gray-600 cursor-pointer">
                  $ {range}
                </label>
              </div>
            ))}
          </div>
          
          {/* Sort By */}
          <div className="px-5 py-4 border-t border-gray-200">
            <p className="font-medium text-gray-800 pb-3">Sort By</p>
            {sortOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-2 mb-2">
                <input 
                  type="radio" 
                  id={`sort-${index}`} 
                  name="sort" 
                  value={option}
                  checked={selectedSort === option}
                  onChange={(e) => setSelectedSort(e.target.value)}
                  className="w-4 h-4 accent-blue-600" 
                />
                <label htmlFor={`sort-${index}`} className="text-sm text-gray-600 cursor-pointer">
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
