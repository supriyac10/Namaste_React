export const MENU_DATA = {
    "43836": {
        data: {
            cards: [
                // ✅ Restaurant Info
                {
                    card: {
                        card: {
                            info: {
                                id: "43836",
                                name: "McDonald's",
                                cuisines: ["Burgers", "Fast Food", "American"],
                                costForTwoMessage: "₹400 for two",
                                avgRating: 4.2,
                            },
                        },
                    },
                },

                // ✅ Recommended
                {
                    card: {
                        card: {
                            "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            title: "Recommended",
                            itemCards: [
                                {
                                    card: {
                                        info: {
                                            id: "1",
                                            name: "Chicken Bucket",
                                            price: 39900,
                                            isVeg: false,
                                            description: "Crispy fried chicken bucket",
                                            ratings: { aggregatedRating: { rating: "4.5" } },
                                        },
                                    },
                                },
                                {
                                    card: {
                                        info: {
                                            id: "2",
                                            name: "Zinger Burger",
                                            price: 19900,
                                            isVeg: false,
                                            ratings: { aggregatedRating: { rating: "4.3" } },
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },

                // ✅ Newly Added
                {
                    card: {
                        card: {
                            "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            title: "Newly Added",
                            itemCards: [
                                {
                                    card: {
                                        info: {
                                            id: "9",
                                            name: "Korean Chicken Wings",
                                            price: 29900,
                                            isVeg: false,
                                            description: "Spicy Korean style wings",
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },

                // ✅ Burgers
                {
                    card: {
                        card: {
                            "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            title: "Burgers",
                            itemCards: [
                                {
                                    card: {
                                        info: {
                                            id: "10",
                                            name: "Veg Zinger Burger",
                                            price: 17900,
                                            isVeg: true,
                                        },
                                    },
                                },
                                {
                                    card: {
                                        info: {
                                            id: "11",
                                            name: "Chicken Zinger Burger",
                                            price: 19900,
                                            isVeg: false,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },

                // ✅ Beverages
                {
                    card: {
                        card: {
                            "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            title: "Beverages",
                            itemCards: [
                                {
                                    card: {
                                        info: {
                                            id: "12",
                                            name: "Pepsi",
                                            price: 6000,
                                            isVeg: true,
                                        },
                                    },
                                },
                                {
                                    card: {
                                        info: {
                                            id: "13",
                                            name: "Cold Coffee",
                                            price: 12000,
                                            isVeg: true,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    },

    // 🔥 Keep your other restaurants SAME but add @type
    "20001": {
        data: {
            cards: [
                {
                    card: {
                        card: {
                            info: {
                                id: "20001",
                                name: "Dominos Pizza",
                                cuisines: ["Pizza", "Italian"],
                                costForTwoMessage: "₹600 for two",
                            },
                        },
                    },
                },
                {
                    card: {
                        card: {
                            "@type":
                                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                            title: "Pizzas",
                            itemCards: [
                                {
                                    card: {
                                        info: {
                                            id: "3",
                                            name: "Farmhouse Pizza",
                                            price: 29900,
                                            isVeg: true,
                                        },
                                    },
                                },
                                {
                                    card: {
                                        info: {
                                            id: "4",
                                            name: "Peppy Paneer",
                                            price: 26900,
                                            isVeg: true,
                                        },
                                    },
                                },
                            ],
                        },
                    },
                },
            ],
        },
    },
};