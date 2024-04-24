import CommonAddress from "./CommonAddress";
import CommonBannar from "./CommonBannar";
import { Link, useLocation } from "react-router-dom";
import { Outlet, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../../assets/logo 1.png";
import Welcome from "../../components/Welcome/Welcome";



const RestaurantDetalis = () => {
  const { id } = useParams();
  const [restaurants, setRestaurants] = useState();
  const location = useLocation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_API}single-restaurant/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch restaurants");
        }
        return response.json();
      })
      .then((data) => {
        setRestaurants(data);
      })
      .catch((error) => {
        console.error("Error fetching restaurants:", error);
      });
  }, [id]);

  
  return (
    <div className="bgImg flex justify-center relative items-center">
      <Link to="/">
        <img
          src={logo}
          className="text-white w-24 md:w-40 hover:scale-90 duration-200 absolute top-4 left-4"
        />
      </Link>
      <div className="bg-[#F5F5F5] w-10/12 h-fit xl:h-fit 2xl:h-[82%] mt-32 xl:w-[65%] mx-auto rounded-lg py-10">
        <div>
          <CommonBannar restaurants={restaurants} />
          <div className="flex flex-col xl:flex-row justify-center mx-5 lg:mx-0 items-center gap-5">
            <CommonAddress restaurants={restaurants} />
            <div className="w-full lg:w-[55%] h-full relative">
              {location.pathname == `/Restaurant/${id}` ? (
                <Welcome restaurants={restaurants} />
              ) : (
                <Outlet></Outlet>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetalis;
