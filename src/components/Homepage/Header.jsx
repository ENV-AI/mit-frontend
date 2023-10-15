import { BiSearch, BiCurrentLocation } from "react-icons/bi";

const Header = () => {
  return (
    <div className="h-16 flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-xl text-white hover-pointer">Env AI</div>
      {/* Search */}
      <div className="h-[40px] w-[30%] px-3 flex justify-start items-center bg-slate-800 border border-slate-400 rounded-full text-white text-sm">
        <BiSearch className="mr-2" />
        <input
          className="h-full w-full rounded-full outline-none bg-slate-800"
          type="text"
          id="searchCity"
          placeholder="Search City..."
        />
      </div>
      {/* Location Button */}
      <div className="flex justify-center items-center text-white rounded-full w-[150px] py-1 bg-slate-500 text-sm cursor-pointer">
        <BiCurrentLocation className="mr-2" />
        Current Location
      </div>
    </div>
  );
};

export default Header;