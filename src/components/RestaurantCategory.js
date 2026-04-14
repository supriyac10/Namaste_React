import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantCategory = ({ data, isOpen, onToggle }) => {
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        dispatch(addItem(item));
    };
    return (
        <div className="mb-4 border rounded-lg shadow-sm overflow-hidden">

            <div
                className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer hover:bg-gray-200"
                onClick={onToggle}
            >
                <span className="font-semibold text-lg">
                    {data?.title}
                </span>

                <span className="text-xl">
                    {isOpen ? "🔼" : "🔽"}
                </span>
            </div>

            {isOpen && (
                <div className="p-4 bg-white">
                    {data?.itemCards?.map((item) => {
                        const info = item?.card?.info;

                        return (
                            <div
                                key={info?.id}
                                className="flex justify-between items-center py-3 border-b last:border-none"
                            >
                                <div>
                                    <h4 className="font-medium">
                                        {info?.isVeg ? "🟢 " : ""}
                                        {info?.name}
                                    </h4>

                                    {info?.description && (
                                        <p className="text-sm text-gray-500">
                                            {info.description}
                                        </p>
                                    )}
                                </div>

                                <div className="text-right">
                                    {info?.price && (
                                        <p className="font-semibold text-green-600">
                                            ₹{info.price / 100}
                                        </p>
                                    )}

                                    {info?.ratings?.aggregatedRating?.rating && (
                                        <p className="text-xs text-gray-500">
                                            ⭐ {info.ratings.aggregatedRating.rating}
                                        </p>
                                    )}

                                    <button
                                        className="bg-black text-white px-3 py-1 rounded-lg"
                                        onClick={() => handleAddItem(info)}
                                    >
                                        Add +
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default RestaurantCategory;