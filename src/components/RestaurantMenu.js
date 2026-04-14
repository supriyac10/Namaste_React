import { useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const menu = useRestaurantMenu(resId);

    const [openIndex, setOpenIndex] = useState(null);

    if (!menu) return <h1 className="text-center mt-10">Not Found!</h1>;

    const cards = menu?.data?.cards;

    const restaurantInfo =
        cards?.find((c) => c?.card?.card?.info)?.card?.card?.info;

    const categories =
        cards?.filter((c) =>
            c?.card?.card?.["@type"]?.includes("ItemCategory")
        ) || [];

    return (
        <div className="max-w-3xl mx-auto p-6">

            <div className="mb-6 border-b pb-4">
                <h1 className="text-3xl font-bold">
                    {restaurantInfo?.name}
                </h1>

                <p className="text-gray-600 mt-1 italic">
                    {restaurantInfo?.cuisines?.join(", ")}
                </p>

                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                    {restaurantInfo?.avgRating && (
                        <span>⭐ {restaurantInfo.avgRating}</span>
                    )}

                    {restaurantInfo?.costForTwoMessage && (
                        <span>{restaurantInfo.costForTwoMessage}</span>
                    )}
                </div>
            </div>

            {categories.map((category, index) => (
                <RestaurantCategory
                    key={index}
                    data={category?.card?.card}
                    isOpen={index === openIndex}
                    onToggle={() =>
                        setOpenIndex(index === openIndex ? null : index)
                    }
                />
            ))}
        </div>
    );
};

export default RestaurantMenu;