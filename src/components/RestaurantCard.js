const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info || {};
    const IMG_CDN_URL =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
    return (
        <div className="m-4 p-4 w-[200px] h-[450px] order rounded-lg shadow-lg bg-orange-100">
            <img
                className="p-2 w-50 h-50 rounded-lg shadow-lg"
                alt="flex-image"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            <h3 className="font-bold">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

//inline css
// const styleCard = {
//     backgroundColor: "lightgray",
//     color: " red "
// }

export const withIsOpenLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute bg-green-500 text-white px-2 py-1 rounded z-10">
                    Open
                </label>

                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
