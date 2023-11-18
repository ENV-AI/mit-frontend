import { useContext, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import GContext from "../Contexts/GContext";
const APIKEY = "e125d116dfcc4d74a1506c3e90c01191";

const Header = () => {
  const { setCountry, setLocation, setLongitude, setLatitude } =
    useContext(GContext);
  const [srcLoc, setSrcLoc] = useState("");
  const location = useLocation();
  const handleSubmit = (event) => {
    event.preventDefault();
    setLocation(srcLoc);

    const url = `https://api.opencagedata.com/geocode/v1/json?q=${srcLoc}&key=${APIKEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status.code === 200) {
          setLatitude(data.results[0].geometry.lat);
          setLongitude(data.results[0].geometry.lng);
          setCountry(data.results[0].components.country_code);
        } else {
          alert("Geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="container py-5 flex justify-between items-center">
      {/* Logo */}
      <div className="font-bold text-xl text-white hover-pointer">
        <Link to="/">Env AI</Link>
      </div>
      {/* Search */}
      <form className="h-[40px] w-[30%]" onSubmit={handleSubmit}>
        <div className="h-full w-full px-3 flex justify-start items-center bg-slate-800 border border-slate-400 rounded-full text-white text-sm">
          <BiSearch className="mr-2" />
          <input
            className="h-full w-full rounded-full outline-none bg-slate-800"
            type="text"
            id="searchCity"
            placeholder="Search City..."
            value={srcLoc}
            onChange={(e) => setSrcLoc(e.target.value)}
          />
        </div>
      </form>
      <div className="flex justify-end items-center gap-4">
        {location.pathname === "/prediction-details" ? null : (
          <Link
            className="flex justify-center items-center text-white rounded-full w-[150px] py-1 bg-slate-500 text-sm cursor-pointer"
            to="prediction-details"
          >
            Prediction Detail
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
