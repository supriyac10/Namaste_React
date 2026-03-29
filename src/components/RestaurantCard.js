const RestaurantCard = (props) => {
    const { resData } = props;

    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info || {};
    const IMG_CDN_URL =
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";
    return (
        <div className="res-card" style={styleCard}>
            <img
                className="res-logo"
                alt="res-logo"
                src={IMG_CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};

//inline css
const styleCard = {
    backgroundColor: "lightblue",
    color: " red "
}

export default RestaurantCard;
