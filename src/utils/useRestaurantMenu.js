import { MENU_DATA } from "../utils/mockData";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {

    const [menu, setMenu] = useState(null);

    useEffect(() => {
        setMenu(MENU_DATA[resId]);
    }, [resId]);

    return menu;
}

export default useRestaurantMenu;