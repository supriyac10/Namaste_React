import RestaurantCard, { withIsOpenLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardWithIsOpenLabel = withIsOpenLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9716&lng=77.5946"
        );
        const json = await data.json();

        const restaurants = json?.data?.cards?.find(
            (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        setListOfRestaurants(restaurants || []);
        setFilteredList(restaurants || []);
    };

    const isOnline = useOnlineStatus();
    if (!isOnline) return <h1>No Internet Connection</h1>;

    //Conditional rendering

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="m-4 p-4 border">
                    <input type="text" className="border-2 border-black p-2" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button
                        className="p-2 m-2 border-2 border-black bg-green-500 text-white rounded-md font-bold"
                        onClick={() => {
                            const filtered = listOfRestaurants.filter((res) =>
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredList(filtered);
                        }}
                    >
                        Search
                    </button>

                </div>
                <button
                    className="px-4 py-2 m-4 bg-blue-500 text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-200"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4.5
                        );
                        setFilteredList(filtered);
                    }}
                >
                    ⭐ Top Rated Restaurants
                </button>
                <button
                    className="px-4 py-2 bg-gray-300 rounded-lg font-semibold hover:bg-gray-400"
                    onClick={() => setFilteredList(listOfRestaurants)}
                >
                    Reset
                </button>
            </div>

            <div className="res-list">
                <div className="flex flex-wrap justify-center gap-6">
                    {filteredList.map((res) => (
                        <Link
                            to={"/restaurants/" + res.info.id}
                            key={res.info.id}
                            className="no-underline text-black"
                        >
                            {res.info.isOpen ? (
                                <RestaurantCardWithIsOpenLabel resData={res} />
                            ) : (
                                <RestaurantCard resData={res} />
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;