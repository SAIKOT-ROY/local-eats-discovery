import { IoStar } from "react-icons/io5";


export const Pagination = ({ restaurant }) => {
  return (
    <nav className="bg-white w-10/12 mx-auto left-32 duration-700 h-[70%] rounded-lg absolute top-20">
      <div className="bg-white flex flex-col md:flex-row border-b-2 hover:bg-slate-100 hover:scale-105 duration-300 border-black w-[70%] h-full lg:w-[50%] xl:w-[40%] 2xl:w-[32%] md:h-36 justify-center p-4 md:gap-40 rounded-lg">
        <div className="flex mb-4 md:mb-0 flex-col gap-2 justify-center">
          <h1 className="font-bold">{restaurant?.restaurant_name}</h1>
          <div className="flex gap-2">
            <h1 className="font-semibold">({restaurant?.ratings})</h1>
            <p className="text-yellow-300 flex gap-2 items-center">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </p>
            <h1 className="font-semibold">(50)</h1>
          </div>
          <p className="text-sm font-semibold">{restaurant?.place_name}</p>
          <p className="text-sm">{restaurant?.opening_time}</p>
        </div>
        <img
          className="md:w-40 border rounded-md"
          width={1080}
          height={720}
          src={restaurant?.image}
          alt=""
        />
      </div>
    </nav>
  );
};
