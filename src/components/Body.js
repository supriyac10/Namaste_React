import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

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
    //Conditional rendering

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" placeholder="Search" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button
                        className="search-btn"
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
                    className="filter-btn"
                    onClick={() => {
                        const filtered = listOfRestaurants.filter(
                            (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filtered);
                    }}
                >
                    Top Rated Restaurants
                </button>
            </div>

            <div className="res-list">
                <div className="res-container">
                    {filteredList.map((res) => (
                        <RestaurantCard key={res.info.id} resData={res} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;