const menuData = {
    categories: [
        {
            id: "tacos",
            name: "Tacos",
            items: [
                {
                    id: "taco-viande",
                    name: "Tacos Viande Hachée",
                    price: 35.00,
                    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Tacos garni de viande hachée, fromage, salade et sauce spéciale",
                    ingredients: ["Viande Hachée", "Fromage", "Salade", "Sauce Spéciale"]
                },
                {
                    id: "taco-poulet",
                    name: "Tacos Poulet",
                    price: 32.00,
                    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Tacos au poulet grillé, fromage, salade et sauce blanche",
                    ingredients: ["Poulet", "Fromage", "Salade", "Sauce Blanche"]
                },
                {
                    id: "taco-kefta",
                    name: "Tacos Kefta",
                    price: 33.00,
                    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Tacos à la kefta, fromage, salade et sauce tomate",
                    ingredients: ["Kefta", "Fromage", "Salade", "Sauce Tomate"]
                },
                {
                    id: "taco-mixte",
                    name: "Tacos Mixte",
                    price: 38.00,
                    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Tacos mixte (poulet et viande), fromage, salade et sauce spéciale",
                    ingredients: ["Poulet", "Viande Hachée", "Fromage", "Salade", "Sauce Spéciale"]
                },
                {
                    id: "taco-vegetarien",
                    name: "Tacos Végétarien",
                    price: 30.00,
                    image: "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Tacos aux légumes grillés, fromage et sauce spéciale",
                    ingredients: ["Légumes Grillés", "Fromage", "Sauce Spéciale"]
                }
            ]
        },
        {
            id: "pizzas",
            name: "Pizzas",
            items: [
                {
                    id: "pizza-margherita",
                    name: "Pizza Margherita",
                    price: 45.00,
                    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Pizza classique avec sauce tomate, mozzarella et basilic",
                    ingredients: ["Sauce Tomate", "Mozzarella", "Basilic"]
                },
                {
                    id: "pizza-kefta",
                    name: "Pizza Kefta",
                    price: 55.00,
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Pizza à la kefta, oignons, poivrons et fromage",
                    ingredients: ["Kefta", "Oignons", "Poivrons", "Fromage"]
                },
                {
                    id: "pizza-thon",
                    name: "Pizza Thon",
                    price: 50.00,
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Pizza au thon, oignons, olives et fromage",
                    ingredients: ["Thon", "Oignons", "Olives", "Fromage"]
                },
                {
                    id: "pizza-royale",
                    name: "Pizza Royale",
                    price: 65.00,
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Pizza garnie de jambon, champignons, poivrons et fromage",
                    ingredients: ["Jambon", "Champignons", "Poivrons", "Fromage"]
                },
                {
                    id: "pizza-4fromages",
                    name: "Pizza 4 Fromages",
                    price: 60.00,
                    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Pizza aux quatre fromages et sauce tomate",
                    ingredients: ["4 Fromages", "Sauce Tomate"]
                }
            ]
        },
        {
            id: "sandwiches",
            name: "Sandwiches",
            items: [
                {
                    id: "sandwich-escalope",
                    name: "Sandwich Escalope",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Sandwich à l'escalope de poulet panée, salade et sauce",
                    ingredients: ["Escalope de Poulet", "Salade", "Sauce"]
                },
                {
                    id: "sandwich-kefta",
                    name: "Sandwich Kefta",
                    price: 22.00,
                    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Sandwich à la kefta, oignons et sauce tomate",
                    ingredients: ["Kefta", "Oignons", "Sauce Tomate"]
                },
                {
                    id: "sandwich-thon",
                    name: "Sandwich Thon",
                    price: 20.00,
                    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Sandwich au thon, salade et mayonnaise",
                    ingredients: ["Thon", "Salade", "Mayonnaise"]
                },
                {
                    id: "sandwich-mixte",
                    name: "Sandwich Mixte",
                    price: 28.00,
                    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Sandwich jambon-fromage, salade et beurre",
                    ingredients: ["Jambon", "Fromage", "Salade", "Beurre"]
                },
                {
                    id: "sandwich-poulet",
                    name: "Sandwich Poulet",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Sandwich au poulet grillé, salade et sauce blanche",
                    ingredients: ["Poulet", "Salade", "Sauce Blanche"]
                }
            ]
        },
        {
            id: "pastichio",
            name: "Pastichio & Gratinée",
            items: [
                {
                    id: "pastichio-poulet",
                    name: "Pastichio Poulet",
                    price: 35.00,
                    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Macaroni au poulet, sauce béchamel et fromage gratiné",
                    ingredients: ["Macaroni", "Poulet", "Sauce Béchamel", "Fromage"]
                },
                {
                    id: "pastichio-viande",
                    name: "Pastichio Viande",
                    price: 38.00,
                    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Macaroni à la viande hachée, sauce béchamel et fromage gratiné",
                    ingredients: ["Macaroni", "Viande Hachée", "Sauce Béchamel", "Fromage"]
                },
                {
                    id: "gratinee-champignons",
                    name: "Gratinée Champignons",
                    price: 32.00,
                    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Gratin de champignons, sauce béchamel et fromage",
                    ingredients: ["Champignons", "Sauce Béchamel", "Fromage"]
                },
                {
                    id: "gratinee-thon",
                    name: "Gratinée Thon",
                    price: 30.00,
                    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Gratin de thon, sauce béchamel et fromage",
                    ingredients: ["Thon", "Sauce Béchamel", "Fromage"]
                },
                {
                    id: "pastichio-vegetarien",
                    name: "Pastichio Végétarien",
                    price: 33.00,
                    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Macaroni aux légumes, sauce béchamel et fromage gratiné",
                    ingredients: ["Macaroni", "Légumes", "Sauce Béchamel", "Fromage"]
                }
            ]
        },
        {
            id: "burgers",
            name: "Burgers",
            items: [
                {
                    id: "burger-classic",
                    name: "Burger Classic",
                    price: 45.00,
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Burger avec steak, salade, tomate, oignon et sauce spéciale",
                    ingredients: ["Steak", "Salade", "Tomate", "Oignon", "Sauce Spéciale"]
                },
                {
                    id: "burger-cheese",
                    name: "Burger Cheese",
                    price: 48.00,
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Burger avec steak, cheddar, salade, tomate et sauce spéciale",
                    ingredients: ["Steak", "Cheddar", "Salade", "Tomate", "Sauce Spéciale"]
                },
                {
                    id: "burger-poulet",
                    name: "Burger Poulet",
                    price: 42.00,
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Burger au poulet pané, salade, tomate et sauce blanche",
                    ingredients: ["Poulet Pané", "Salade", "Tomate", "Sauce Blanche"]
                },
                {
                    id: "burger-double",
                    name: "Burger Double",
                    price: 55.00,
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Double steak, double cheddar, salade, tomate et sauce spéciale",
                    ingredients: ["Double Steak", "Double Cheddar", "Salade", "Tomate", "Sauce Spéciale"]
                },
                {
                    id: "burger-mixte",
                    name: "Burger Mixte",
                    price: 50.00,
                    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Steak et poulet, salade, tomate et sauce spéciale",
                    ingredients: ["Steak", "Poulet", "Salade", "Tomate", "Sauce Spéciale"]
                }
            ]
        },
        {
            id: "salads",
            name: "Salades",
            items: [
                {
                    id: "salade-cesar",
                    name: "Salade César",
                    price: 35.00,
                    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Laitue, poulet grillé, parmesan, croûtons et sauce césar",
                    ingredients: ["Laitue", "Poulet", "Parmesan", "Croûtons", "Sauce César"]
                },
                {
                    id: "salade-nicoise",
                    name: "Salade Niçoise",
                    price: 38.00,
                    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Thon, œuf, tomates, olives, poivrons et vinaigrette",
                    ingredients: ["Thon", "Œuf", "Tomates", "Olives", "Poivrons", "Vinaigrette"]
                },
                {
                    id: "salade-grecque",
                    name: "Salade Grecque",
                    price: 32.00,
                    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Feta, tomates, concombre, olives et huile d'olive",
                    ingredients: ["Feta", "Tomates", "Concombre", "Olives", "Huile d'Olive"]
                },
                {
                    id: "salade-poulet",
                    name: "Salade Poulet",
                    price: 35.00,
                    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Poulet grillé, salade, tomates, maïs et vinaigrette",
                    ingredients: ["Poulet", "Salade", "Tomates", "Maïs", "Vinaigrette"]
                },
                {
                    id: "salade-thon",
                    name: "Salade Thon",
                    price: 33.00,
                    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Thon, salade, tomates, œuf et vinaigrette",
                    ingredients: ["Thon", "Salade", "Tomates", "Œuf", "Vinaigrette"]
                }
            ]
        },
        {
            id: "fries",
            name: "Frites & Accompagnements",
            items: [
                {
                    id: "frites",
                    name: "Frites",
                    price: 15.00,
                    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Frites maison croustillantes",
                    ingredients: ["Pommes de Terre", "Sel"]
                },
                {
                    id: "frites-fromage",
                    name: "Frites au Fromage",
                    price: 20.00,
                    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Frites nappées de fromage fondu",
                    ingredients: ["Frites", "Fromage Fondu"]
                },
                {
                    id: "nuggets",
                    name: "Nuggets de Poulet",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1562967915-92ae0c320a01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Nuggets de poulet croustillants",
                    ingredients: ["Poulet", "Chapelure"]
                },
                {
                    id: "onion-rings",
                    name: "Onion Rings",
                    price: 18.00,
                    image: "https://images.unsplash.com/photo-1562967915-92ae0c320a01?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Rings d'oignon croustillants",
                    ingredients: ["Oignons", "Chapelure"]
                },
                {
                    id: "potatoes",
                    name: "Potatoes",
                    price: 20.00,
                    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Potatoes épicées et croustillantes",
                    ingredients: ["Pommes de Terre", "Épices"]
                }
            ]
        },
        {
            id: "juices",
            name: "Jus & Boissons",
            items: [
                {
                    id: "jus-orange",
                    name: "Jus d'Orange",
                    price: 12.00,
                    image: "https://images.unsplash.com/photo-1613478223719605475b6d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Jus d'orange fraîchement pressé",
                    ingredients: ["Oranges"]
                },
                {
                    id: "jus-fraise",
                    name: "Jus de Fraise",
                    price: 15.00,
                    image: "https://images.unsplash.com/photo-1613478223719605475b6d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Jus de fraise frais",
                    ingredients: ["Fraises"]
                },
                {
                    id: "jus-mangue",
                    name: "Jus de Mangue",
                    price: 15.00,
                    image: "https://images.unsplash.com/photo-1613478223719605475b6d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Jus de mangue frais",
                    ingredients: ["Mangue"]
                },
                {
                    id: "jus-citron",
                    name: "Jus de Citron",
                    price: 10.00,
                    image: "https://images.unsplash.com/photo-1613478223719605475b6d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Jus de citron frais",
                    ingredients: ["Citron"]
                },
                {
                    id: "jus-mixte",
                    name: "Jus Mixte",
                    price: 18.00,
                    image: "https://images.unsplash.com/photo-1613478223719605475b6d91?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Mélange de fruits frais",
                    ingredients: ["Fruits Frais"]
                }
            ]
        },
        {
            id: "milkshakes",
            name: "Milkshakes",
            items: [
                {
                    id: "milkshake-chocolat",
                    name: "Milkshake Chocolat",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Milkshake au chocolat avec chantilly",
                    ingredients: ["Lait", "Chocolat", "Crème"]
                },
                {
                    id: "milkshake-fraise",
                    name: "Milkshake Fraise",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Milkshake à la fraise avec chantilly",
                    ingredients: ["Lait", "Fraises", "Crème"]
                },
                {
                    id: "milkshake-vanille",
                    name: "Milkshake Vanille",
                    price: 22.00,
                    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Milkshake à la vanille avec chantilly",
                    ingredients: ["Lait", "Vanille", "Crème"]
                },
                {
                    id: "milkshake-caramel",
                    name: "Milkshake Caramel",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Milkshake au caramel avec chantilly",
                    ingredients: ["Lait", "Caramel", "Crème"]
                },
                {
                    id: "milkshake-oreo",
                    name: "Milkshake Oreo",
                    price: 28.00,
                    image: "https://images.unsplash.com/photo-1577805947697-89e18249d767?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Milkshake aux Oreo avec chantilly",
                    ingredients: ["Lait", "Oreo", "Crème"]
                }
            ]
        },
        {
            id: "desserts",
            name: "Desserts",
            items: [
                {
                    id: "glace-chocolat",
                    name: "Glace au Chocolat",
                    price: 15.00,
                    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Glace au chocolat avec sauce chocolat",
                    ingredients: ["Glace Chocolat", "Sauce Chocolat"]
                },
                {
                    id: "glace-vanille",
                    name: "Glace à la Vanille",
                    price: 15.00,
                    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Glace à la vanille avec sauce caramel",
                    ingredients: ["Glace Vanille", "Sauce Caramel"]
                },
                {
                    id: "glace-fraise",
                    name: "Glace à la Fraise",
                    price: 15.00,
                    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Glace à la fraise avec sauce fraise",
                    ingredients: ["Glace Fraise", "Sauce Fraise"]
                },
                {
                    id: "glace-mixte",
                    name: "Glace Mixte",
                    price: 20.00,
                    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "3 boules de glace au choix",
                    ingredients: ["Glace au Choix"]
                },
                {
                    id: "glace-sundae",
                    name: "Sundae",
                    price: 25.00,
                    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
                    description: "Glace avec chantilly, sauce et noisettes",
                    ingredients: ["Glace", "Chantilly", "Sauce", "Noisettes"]
                }
            ]
        }
    ]
}; 