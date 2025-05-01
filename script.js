const menuData = [
    {
      "foodname": "Lumpiang Shanghai",
      "category": "Appetizers",
      "image_url": "https://www.maggi.ph/sites/default/files/srh_recipes/25cf95a942d7253ccb0e43f8b039143f.jpg",
      "price": "₱350",
      "description": "Crispy fried rolls with minced pork, shrimp, and vegetables, served with sweet and sour sauce."
    },
    {
      "foodname": "Ukoy",
      "category": "Appetizers",
      "image_url": "https://www.saveur.com/uploads/2022/12/12/00-LEAD-Dinner-At-Kat_s-With-Leah-Cohen-Saveur-Filipino-Ukoy.jpg?auto=webp",
      "price": "₱400",
      "description": "Deep-fried shrimp and vegetable fritters, served with a vinegar or sweet chili dip."
    },
    {
      "foodname": "Tokwa’t Baboy",
      "category": "Appetizers",
      "image_url": "https://yummykitchentv.com/wp-content/uploads/2023/02/tokwat-baboy-recipe-01.jpg",
      "price": "₱350",
      "description": "Crispy pork belly and fried tofu served with a vinegar-based dipping sauce."
    },
    {
      "foodname": "Kwek-Kwek",
      "category": "Appetizers",
      "image_url": "https://eatyourworld.com/wp-content/uploads/2023/07/kwek-kwek-high-res.jpg",
      "price": "₱250",
      "description": "Quail eggs coated in seasoned flour, deep-fried and served with sweet and spicy sauce."
    },
    {
      "foodname": "Adobong Mani",
      "category": "Appetizers",
      "image_url": "https://seasiderecipes.com/wp-content/uploads/adobong-mani.jpg",
      "price": "₱200",
      "description": "Roasted peanuts in a soy sauce, vinegar, and garlic marinade, perfect for munching."
    },
    {
      "foodname": "Puto",
      "category": "Appetizers",
      "image_url": "https://mikhaeats.com/wp-content/uploads/2021/10/puto-featured-image-2.jpg",
      "price": "₱150",
      "description": "Light, fluffy rice cakes served with cheese or salted egg toppings."
    },
    {
      "foodname": "Manggang hilaw",
      "category": "Appetizers",
      "image_url": "https://i.pinimg.com/736x/6c/15/9c/6c159c614eda140cc48d70e3db35ab98.jpg",
      "price": "₱200",
      "description": "Fresh green mangoes served with bagoong (fermented shrimp paste), a tangy and salty combo."
    },
    {
      "foodname": "Tuna Kilawin",
      "category": "Appetizers",
      "image_url": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHDFTmU_VPpV0G8YLFWL0L7S0OLMEsCd53yVhN24DB6M8aLemkTdBzYLUp-18oeTnH8aQQhWy81_qvmfZI2e_k4cTzbDK4tGjgNOXdMEyCGXPE2fDDcu-prDllplBPiCS4kLo6z1xD6A/w1200-h630-p-k-no-nu/Kilawin+Yellow+Fin.jpg",
      "price": "₱400",
      "description": "Fresh raw tuna marinated in vinegar, calamansi, and spices, served with onion and chili."
    },
    {
      "foodname": "Sinigang na Baboy",
      "category": "Soups and Stews",
      "image_url": "https://assets.unileversolutions.com/recipes-v2/214408.png",
      "price": "₱450",
      "description": "A tangy, savory soup with pork, tamarind, and assorted vegetables like kangkong and radish."
    },
    {
      "foodname": "Nilagang Baka",
      "category": "Soups and Stews",
      "image_url": "https://cdn.sanity.io/images/f3knbc2s/production/55df3a94cadaa4240d6ec147794d6142cb0d34a3-2500x1500.jpg",
      "price": "₱550",
      "description": "Beef shank and bone marrow simmered with corn, potatoes, and vegetables."
    },
    {
      "foodname": "La Paz Batchoy",
      "category": "Soups and Stews",
      "image_url": "https://gourmetcornerph.com/cdn/shop/products/45483b1c-4bcd-4e9d-8c35-5aa0342b1057.jpg?v=1610077197",
      "price": "₱400",
      "description": "Iloilo’s famous noodle soup made with pork, beef, and noodles, topped with crispy chicharrón and egg."
    },
    {
      "foodname": "Sinigang na Hipon",
      "category": "Soups and Stews",
      "image_url": "https://popmenucloud.com/cdn-cgi/image/width=1920,height=1920,format=auto,fit=scale-down/arufwdik/e3e92a10-3d3a-47bd-9025-e93721f4bd03.jpg",
      "price": "₱550",
      "description": "Shrimp in a tangy broth made with tamarind, tomatoes, and vegetables like eggplant and okra."
    },
    {
      "foodname": "Tinola",
      "category": "Soups and Stews",
      "image_url": "https://whatsbarbcooking.com/wp-content/uploads/2020/01/IMG_6656-1024x1024.jpg",
      "price": "₱450",
      "description": "Chicken cooked with ginger, green papaya, and chili leaves in a light, flavorful broth."
    },
    {
      "foodname": "Sopas",
      "category": "Soups and Stews",
      "image_url": "https://www.recipesbynora.com/wp-content/uploads/2023/12/Sopas-Recipe-in-a-bowl-featured-image-1.jpg",
      "price": "₱350",
      "description": "Filipino-style creamy chicken and macaroni soup with vegetables."
    },
    {
      "foodname": "Miswa Soup",
      "category": "Soups and Stews",
      "image_url": "https://yummykitchentv.com/wp-content/uploads/2023/01/Misua-with-Meatballs-4.jpg",
      "price": "₱300",
      "description": "Thin rice noodles in a light broth with vegetables and chicken or pork."
    },
    {
      "foodname": "Sinigang na Baboy sa Bayabas",
      "category": "Soups and Stews",
      "image_url": "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2019/05/Sinigang-sa-Bayabas-Wide.jpg?ssl=1",
      "price": "₱500",
      "description": "A variation of sinigang, made with guava for a sweet and tangy twist."
    },
    {
      "foodname": "Adobo",
      "category": "Main Dishes",
      "image_url": "https://salu-salo.com/wp-content/uploads/2015/04/Pork-Adobo-3.jpg",
      "price": "₱500",
      "description": "Chicken or pork cooked in soy sauce, vinegar, garlic, and bay leaves, with a rich, savory flavor."
    },
    {
      "foodname": "Lechon Kawali",
      "category": "Main Dishes",
      "image_url": "https://static01.nyt.com/images/2023/11/28/multimedia/ND-Lechon-Kawali-bflv/ND-Lechon-Kawali-bflv-mediumSquareAt3X.jpg",
      "price": "₱600",
      "description": "Deep-fried crispy pork belly, served with a soy-vinegar dipping sauce."
    },
    {
      "foodname": "Bistek Tagalog",
      "category": "Main Dishes",
      "image_url": "https://cdn.sanity.io/images/f3knbc2s/production/b5318405e36335e00e82b10ffcf7b439fff513af-2500x1600.jpg",
      "price": "₱600",
      "description": "Filipino-style beef steak marinated in soy sauce, calamansi, and garlic, cooked with onions."
    },
    {
      "foodname": "Pancit Canton",
      "category": "Main Dishes",
      "image_url": "https://www.maggi.ph/sites/default/files/styles/home_stage_944_531/public/srh_recipes/9ff184ff760d2a8ccf1f1b5690fb67aa.jpg?h=1cfd0f79&itok=zUWkjRMI",
      "price": "₱450",
      "description": "Stir-fried noodles with pork, shrimp, vegetables, and a savory soy-based sauce."
    },
    {
      "foodname": "Kaldereta",
      "category": "Main Dishes",
      "image_url": "https://www.seriouseats.com/thmb/GHxu-nUE4SEMlzvJNtcDFxolUsg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__20110114-goatstewcebu-primary_2-e88cf43a217b441581d6dfa2d345ca3f.jpg",
      "price": "₱600",
      "description": "Beef slow-cooked in tomato sauce with liver spread, potatoes, carrots, and bell peppers."
    },
    {
      "foodname": "Sisig",
      "category": "Main Dishes",
      "image_url": "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/sizzling-pork-sisig-manila/sizzling-pork-sisig-manila-main.jpg",
      "price": "₱350",
      "description": "A sizzling, savory dish made from finely chopped pork, seasoned with soy sauce, vinegar, calamansi."
    },
    {
      "foodname": "Pork Steak",
      "category": "Main Dishes",
      "image_url": "https://i.ytimg.com/vi/biW0zL5I7VE/sddefault.jpg",
      "price": "₱450",
      "description": "Tender pork cooked in a savory soy-calamansi marinade with onions and garlic."
    },
    {
      "foodname": "Sinigang na Baboy sa Miso",
      "category": "Main Dishes",
      "image_url": "https://images.yummy.ph/yummy/uploads/2019/03/sinigangbaboysamiso-recipe-1.jpg",
      "price": "₱500",
      "description": "Pork cooked in a sour and savory miso broth, served with vegetables like eggplant and sitaw."
    },
    {
      "foodname": "Bagoong Rice",
      "category": "Rice Dishes",
      "image_url": "https://www.maggi.ph/sites/default/files/styles/home_stage_944_531/public/srh_recipes/32b5546d7df977d763da3cd08b5f0374.jpg?h=1cfd0f79&itok=5ybP58Nr",
      "price": "₱300",
      "description": "Rice stir-fried with fermented shrimp paste, garlic, and onions, topped with crispy pork or shrimp."
    },
    {
      "foodname": "Garlic Rice (Sinangag)",
      "category": "Rice Dishes",
      "image_url": "https://maeservesyoufood.com/wp-content/uploads/2023/04/sinangag-recipe.jpeg",
      "price": "₱150",
      "description": "Fried rice with garlic, a common Filipino breakfast side dish."
    },
    {
      "foodname": "Sinigang Rice",
      "category": "Rice Dishes",
      "image_url": "https://cdn.sanity.io/images/f3knbc2s/production/97eb23801766239559828344f72b70f80e16b847-2560x1512.jpg",
      "price": "₱200",
      "description": "Rice flavored with the tangy taste of sinigang broth."
    },
    {
      "foodname": "Chicken Pandan Rice",
      "category": "Rice Dishes",
      "image_url": "https://umamidays.com/wp-content/uploads/2023/07/lemongrass-pandan-chicken-1.jpg",
      "price": "₱300",
      "description": "Rice cooked with pandan leaves and paired with a marinated chicken dish."
    },
    {
      "foodname": "Fried Rice (Sinangag)", 
      "category": "Rice Dishes",
      "image_url": "https://sweetsimplevegan.com/wp-content/uploads/2019/03/Vegan-Filipino-Garlic-Fried-Rice-Sinangag-3-Ingredients-Sweet-Simple-Vegan-Featured-Image.jpg",
      "price": "₱250",
      "description": "Filipino-style fried rice, often served with leftover meats, garlic, and soy sauce."
    },
    {
      "foodname": "Crispy Garlic Rice",
      "category": "Rice Dishes",
      "image_url": "https://iankewks.com/wp-content/uploads/2023/06/IMG_1611.jpg",
      "price": "₱250",
      "description": "Garlic rice with crispy fried garlic and pork or shrimp topping."
    },
    {
      "foodname": "Saffron Rice",
      "category": "Rice Dishes",
      "image_url": "https://delishar.com/wp-content/uploads/2017/01/Saffron-Rice-1.jpg",
      "price": "₱300",
      "description": "Rice cooked with saffron and spices for an aromatic, flavorful side dish."
    },
    {
      "foodname": "Pineapple Fried Rice",
      "category": "Rice Dishes",
      "image_url": "https://cookieandkate.com/images/2015/02/thai-pineapple-fried-rice-1.jpg",
      "price": "₱300",
      "description": "Fried rice with sweet pineapple chunks, vegetables, and shrimp or pork."
    },
    {
      "foodname": "Halo-Halo",
      "category": "Desserts",
      "image_url": "https://www.thespruceeats.com/thmb/bqq_P7YZtu4Br9kPHqVkjib1QhQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/halo-halo-5409582-step-08-18bca395e05542539cf4eb2e87fd6882.jpg",
      "price": "₱250",
      "description": "A mix of shaved ice, sweet beans, jellies, fruits, leche flan, and ice cream."
    },
    {
      "foodname": "Leche Flan",
      "category": "Desserts",
      "image_url": "https://bitesbybianca.com/wp-content/uploads/2024/12/filipino-leche-flan-cover-1.jpg",
      "price": "₱150",
      "description": "A smooth and creamy caramel custard dessert, topped with caramel syrup."
    },
    {
      "foodname": "Turon",
      "category": "Desserts",
      "image_url": "https://upload.wikimedia.org/wikipedia/commons/2/28/Turon_na_Saging.jpg",
      "price": "₱200",
      "description": "Sweet bananas and jackfruit wrapped in a spring roll wrapper, fried and coated in caramel."
    },
    {
      "foodname": "Bibingka",
      "category": "Desserts",
      "image_url": "https://static01.nyt.com/images/2016/11/11/dining/COOKING-BIBINGKA1/COOKING-FILIPINO1-superJumbo.jpg",
      "price": "₱150",
      "description": "A Filipino rice cake made from rice flour, coconut milk, and sugar, often topped with salted egg and cheese."
    },
    {
      "foodname": "Ube Halaya",
      "category": "Desserts",
      "image_url": "https://www.theflavorbender.com/wp-content/uploads/2020/05/Ube-jam-SM-4099-2.jpg",
      "price": "₱200",
      "description": "A rich and creamy dessert made from boiled ube (purple yam), sugar, and butter."
    },
    {
      "foodname": "Sapin-Sapin",
      "category": "Desserts",
      "image_url": "https://themayakitchen.com/wp-content/uploads/2018/10/SAPIN-SAPIN-500x500.jpg",
      "price": "₱200",
      "description": "Layered rice cakes with different flavors like ube, coconut, and mung beans."
    },
    {
      "foodname": "Buko Pandan",
      "category": "Desserts",
      "image_url": "https://www.recipesbynora.com/wp-content/uploads/2022/03/buko-pandan-featured-image.jpg",
      "price": "₱250",
      "description": "A sweet and creamy dessert made with young coconut, pandan-flavored jelly, and sweetened cream."
    },
    {
      "foodname": "Macapuno Ice Cream",
      "category": "Desserts",
      "image_url": "https://www.kawalingpinoy.com/wp-content/uploads/2017/07/homemade-ube-macapuno-ice-cream-4.jpg",
      "price": "₱150",
      "description": "Coconut ice cream made with sweetened macapuno (young coconut sport)."
    },
    {
      "foodname": "Buko Juice",
      "category": "Beverages",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZFxvhKsgefzB37ebzuueNypZyZHcUXWdlQ&s",
      "price": "₱150",
      "description": "Fresh coconut water served in a coconut shell."
    },
    {
      "foodname": "Sago’t Gulaman",
      "category": "Beverages",
      "image_url": "https://simplybakings.com/wp-content/uploads/2020/07/Sago.jpg",
      "price": "₱150",
      "description": "A sweet, refreshing drink made with tapioca pearls, agar jelly, and brown sugar syrup."
    },
    {
      "foodname": "Calamansi Juice",
      "category": "Beverages",
      "image_url": "https://www.kawalingpinoy.com/wp-content/uploads/2013/05/calamansi-juice.jpg",
      "price": "₱100",
      "description": "A tangy, citrusy drink made from Filipino calamansi lime."
    },
    {
      "foodname": "Tamarind Iced Tea",
      "category": "Beverages",
      "image_url": "https://thewoksoflife.com/wp-content/uploads/2020/07/tamarind-iced-tea-8.jpg",
      "price": "₱150",
      "description": "A sweet and tart iced drink made from tamarind extract and sugar."
    },
    {
      "foodname": "Mango Shake",
      "category": "Beverages",
      "image_url": "https://tastyoven.com/wp-content/uploads/2022/06/mango-shake-image.jpeg",
      "price": "₱200",
      "description": "A creamy and refreshing mango smoothie made with fresh mangoes and milk."
    },
    {
      "foodname": "Ginger Tea (Salabat)",
      "category": "Beverages",
      "image_url": "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/el-guapo/recipes/800x800/linden_flower_and_ginger_tea_800x800.jpg?rev=c935b6b497af43e8821dbd4c7a4d18fc&vd=20220203T165308Z&extension=webp&hash=DA70F6D3E21354B6073C384A3F93343D",
      "price": "₱150",
      "description": "A traditional Filipino drink made from fresh ginger root, often served hot and sweetened with honey."
    },
    {
      "foodname": "Pineapple Juice",
      "category": "Beverages",
      "image_url": "https://cookathomemom.com/wp-content/uploads/2022/12/Pineapple-Ginger-Juice.jpg",
      "price": "₱150",
      "description": "Freshly squeezed pineapple juice, naturally sweet and refreshing."
    },
    {
      "foodname": "Tropical Iced Tea",
      "category": "Beverages",
      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJXqcxvmOdDC2b-L0MUHrE18gO6i0MGSMDw&s",
      "price": "₱150",
      "description": "Iced tea infused with tropical fruits like mango, guava, or passionfruit."
    }
  ];

$(document).ready(function() {

    const productGrid = $('#product-grid');
    const categoryTitle = $('#category-title');
    const searchInput = $('#search-input');
    const orderItemCount = $('#order-item-count');
    const orderTotalPrice = $('#order-total-price');
    const lastItemName = $('#last-item-name');
    const finalizeOrderBtn = $('#finalize-order-btn');
    const cancelOrderBtn = $('#cancel-order-btn');
    const viewOrderBtn = $('#view-order-btn');

    // Modal elements
    const orderModal = $('#order-modal');
    const modalOrderList = $('#modal-order-list');
    const modalTotalPrice = $('#modal-total-price');
    const closeModalBtn = $('#close-modal-btn');
    const modalFinalizeBtn = $('#modal-finalize-btn');

    // Receipt Modal elements
    const receiptModal = $('#receipt-modal');
    const receiptContent = $('#receipt-content');
    const closeReceiptBtn = $('#close-receipt-btn');
    const newOrderBtn = $('#new-order-btn');

    let currentCategory = 'Soups and Stews'; // Initial category
    let orderList = []; // Array to hold order items: { name: '', price: 0, quantity: 0 }

    // --- Utility Functions ---

    function formatPrice(price) {
        return `₱ ${price.toFixed(2)}`;
    }

    function parsePrice(priceString) {
        // Remove currency symbol and commas, then convert to float
        const cleanedString = priceString.replace(/[₱,]/g, '');
        const price = parseFloat(cleanedString);
        return isNaN(price) ? 0 : price; // Return 0 if parsing fails
    }

    // --- Product Display ---

    function displayProducts(category, searchTerm = '') {
        productGrid.empty(); // Clear existing products
        categoryTitle.text(category); // Update heading
        searchInput.val(''); // Clear search on category change

        const filteredData = menuData.filter(item => {
            const matchesCategory = item.category === category;
            const matchesSearch = searchTerm === '' || item.foodname.toLowerCase().includes(searchTerm.toLowerCase()) || item.description.toLowerCase().includes(searchTerm.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filteredData.length === 0) {
            productGrid.html('<p class="col-span-full text-center text-gray-500">No items found in this category' + (searchTerm ? ' matching your search.' : '.') + '</p>');
            return;
        }

        filteredData.forEach(item => {
            const priceValue = parsePrice(item.price);
            const card = `
                <article class="bg-white rounded-lg shadow overflow-hidden flex flex-col">
                    <img src="${item.image_url}" alt="${item.foodname}" class="w-full h-32 object-cover">
                    <div class="p-3 flex flex-col flex-grow">
                        <h3 class="font-semibold text-md mb-1">${item.foodname}</h3>
                        <p class="text-xs text-gray-600 mb-2 flex-grow">${item.description}</p>
                        <div class="flex justify-between items-center mt-auto">
                            <span class="font-bold text-yellow-600">${formatPrice(priceValue)}</span>
                            <button
                                class="add-to-cart-btn bg-orange-400 hover:bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded transition duration-150"
                                data-name="${item.foodname}"
                                data-price="${priceValue}"
                            >
                                Add +
                            </button>
                        </div>
                    </div>
                </article>
            `;
            productGrid.append(card);
        });
    }

    // --- Order Management ---

    function updateFooter() {
        let totalItems = 0;
        let totalPrice = 0;
        let lastAdded = 'None';

        orderList.forEach(item => {
            totalItems += item.quantity;
            totalPrice += item.price * item.quantity;
        });

        if (orderList.length > 0) {
            lastAdded = orderList[orderList.length - 1].name;
        }

        orderItemCount.text(`${totalItems} item${totalItems !== 1 ? 's' : ''}`);
        orderTotalPrice.text(formatPrice(totalPrice));
        lastItemName.text(lastAdded);

        // Enable/disable finalize button
        if (totalItems > 0) {
            finalizeOrderBtn.prop('disabled', false).removeClass('disabled:opacity-50 disabled:cursor-not-allowed');
            modalFinalizeBtn.prop('disabled', false).removeClass('disabled:opacity-50 disabled:cursor-not-allowed');
        } else {
            finalizeOrderBtn.prop('disabled', true).addClass('disabled:opacity-50 disabled:cursor-not-allowed');
             modalFinalizeBtn.prop('disabled', true).addClass('disabled:opacity-50 disabled:cursor-not-allowed');
        }
    }

    function addToCart(name, price) {
        const existingItem = orderList.find(item => item.name === name);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            orderList.push({ name: name, price: price, quantity: 1 });
        }
        updateFooter();
        // Optional: Show a brief confirmation message
        // console.log(`${name} added to order.`);
    }

    function updateQuantity(name, change) {
         const itemIndex = orderList.findIndex(item => item.name === name);
         if (itemIndex > -1) {
             orderList[itemIndex].quantity += change;
             if (orderList[itemIndex].quantity <= 0) {
                 // Remove item if quantity drops to 0 or less
                 orderList.splice(itemIndex, 1);
             }
         }
         renderOrderListModal(); // Re-render modal list
         updateFooter(); // Update main footer totals
    }


    function resetOrder() {
        orderList = [];
        updateFooter();
        // Optional: Close modals if open
        orderModal.hide();
        receiptModal.hide();
        // Reset to default category or stay on current one
        displayProducts(currentCategory);
         console.log("Order Cancelled");
    }

    // --- Modal Functions Start ---

    function renderOrderListModal() {
        modalOrderList.empty();
        let modalTotal = 0;

        if (orderList.length === 0) {
            modalOrderList.html('<p class="text-gray-500 text-center">Your order is empty.</p>');
            modalTotalPrice.text(formatPrice(0));
             modalFinalizeBtn.prop('disabled', true).addClass('disabled:opacity-50 disabled:cursor-not-allowed');
            return;
        }

        orderList.forEach(item => {
            const itemTotal = item.price * item.quantity;
            modalTotal += itemTotal;
            const listItem = `
                <div class="flex justify-between items-center border-b py-2 bg-gradient-to-br from-[#FF9D23] to-[#FFB84C] text-white">
                    <div>
                        <p class="font-medium">${item.name}</p>
                        <p class="text-sm">${formatPrice(item.price)} each</p>
                    </div>
                    <div class="flex items-center space-x-2">
                        <button class="quantity-change-btn bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold w-6 h-6 rounded text-center" data-name="${item.name}" data-change="-1">-</button>
                        <span class="font-semibold w-8 text-center">${item.quantity}</span>
                        <button class="quantity-change-btn bg-yellow-400 hover:bg-yellow-500 text-white font-bold w-6 h-6 rounded text-center" data-name="${item.name}" data-change="1">+</button>
                        <span class="font-bold w-20 text-right">${formatPrice(itemTotal)}</span>
                        <button class="remove-item-btn text-red-500 hover:text-red-700 ml-2" data-name="${item.name}">&times;</button>
                    </div>
                </div>
            `;
            modalOrderList.append(listItem);
        });
        

        modalTotalPrice.text(formatPrice(modalTotal));
        modalFinalizeBtn.prop('disabled', false).removeClass('disabled:opacity-50 disabled:cursor-not-allowed');
    }

    function showOrderModal() {
        renderOrderListModal();
        orderModal.show();
    }

    function hideOrderModal() {
        orderModal.hide();
    }

    // --- Receipt Functions ---
    function generateReceipt() {
        receiptContent.empty();
        let receiptTotal = 0;
        const now = new Date();
        const dateTimeString = now.toLocaleString('en-PH', { dateStyle: 'medium', timeStyle: 'short' });
    
        
        receiptContent.append(`<p class="text-center mb-2 text-white">Date: ${dateTimeString}</p>`);
        receiptContent.append('<hr class="border-dashed my-2 border-white">');
    
        orderList.forEach(item => {
            const itemTotal = item.price * item.quantity;
            receiptTotal += itemTotal;
            const receiptLine = `
                <div class="flex justify-between items-start mb-1 text-white">
                    <span class="w-3/5">${item.name} (x${item.quantity})</span>
                    <span class="w-2/5 text-right">${formatPrice(itemTotal)}</span>
                </div>
            `;
            receiptContent.append(receiptLine);
        });
    
        const taxRate = 0.12;
        const taxAmount = receiptTotal * taxRate;
        const finalTotal = receiptTotal + taxAmount;
    
        receiptContent.append('<hr class="border-dashed my-2 border-white">');
        receiptContent.append(`
            <div class="flex justify-between font-medium text-white">
                <span>Subtotal:</span>
                <span>${formatPrice(receiptTotal)}</span>
            </div>
        `);
        receiptContent.append(`
            <div class="flex justify-between font-medium text-white">
                <span>VAT (12%):</span>
                <span>${formatPrice(taxAmount)}</span>
            </div>
        `);
        receiptContent.append(`
            <div class="flex justify-between font-bold text-lg mt-1 text-white">
                <span>Total:</span>
                <span>${formatPrice(finalTotal)}</span>
            </div>
        `);
    }
    

    function showReceiptModal() {
        generateReceipt();
        orderModal.hide(); // Hide order modal if open
        receiptModal.show();
    }

     function hideReceiptModal() {
        receiptModal.hide();
    }

    // --- Modal Functions END ---

    // --- Event Handlers -JQUERY START ---

    // Category switching
    $('.category-btn').on('click', function() {
        $('.category-btn').removeClass('category-active'); // Remove active class from all
        $(this).addClass('category-active'); // Add active class to clicked one
        currentCategory = $(this).data('category');
        displayProducts(currentCategory); // Load products for this category
    });

    // Search within category
    searchInput.on('input', function() {
        const searchTerm = $(this).val();
        displayProducts(currentCategory, searchTerm);
    });

    // Add to Cart (Using event delegation for dynamically added buttons)
    productGrid.on('click', '.add-to-cart-btn', function() {
        const name = $(this).data('name');
        const price = parseFloat($(this).data('price'));
        if (!isNaN(price)) {
            addToCart(name, price);
        } else {
            console.error("Invalid price data for item:", name);
        }
    });

    // Cancel Order
    cancelOrderBtn.on('click', function() {
        if (confirm("Are you sure you want to cancel the current order?")) {
             resetOrder();
        }
    });

    // View Order Modal
    viewOrderBtn.on('click', showOrderModal);
    closeModalBtn.on('click', hideOrderModal);

    // Modal Quantity Change (Event Delegation)
     modalOrderList.on('click', '.quantity-change-btn', function() {
        const name = $(this).data('name');
        const change = parseInt($(this).data('change'));
        updateQuantity(name, change);
    });

    // Modal Remove Item (Event Delegation)
    modalOrderList.on('click', '.remove-item-btn', function() {
        const name = $(this).data('name');
        // Find the item and set its quantity to 0 to trigger removal logic in updateQuantity
         const itemIndex = orderList.findIndex(item => item.name === name);
         if (itemIndex > -1) {
             updateQuantity(name, -orderList[itemIndex].quantity); // Subtract current quantity
         }
    });


    // Finalize Order (From Footer and Modal)
     finalizeOrderBtn.on('click', function() {
         if (orderList.length > 0) {
            // Could add a confirmation step here if needed
             showReceiptModal();
         }
     });
     modalFinalizeBtn.on('click', function() {
         if (orderList.length > 0) {
             showReceiptModal();
         }
     });


    // Close Receipt Modal
     closeReceiptBtn.on('click', hideReceiptModal);

    // New Order (from Receipt)
     newOrderBtn.on('click', function() {
         hideReceiptModal();
         resetOrder();
     });


    // Close modal if clicking outside the content
    $(window).on('click', function(event) {
        if ($(event.target).is(orderModal)) {
            hideOrderModal();
        }
        if ($(event.target).is(receiptModal)) {
             hideReceiptModal();
        }
    });

    // --- Event Handlers -JQUERY START ---


    // --- Initial Load ---
    displayProducts(currentCategory); // Load initial category products
    updateFooter(); // Initialize footer state

    // Carousel Logic (from original code)
    let carouselIndex = 0;
    const carousel = $("#carousel");
    const totalSlides = carousel.children().length;

    if (totalSlides > 1) {
        setInterval(() => {
            carouselIndex = (carouselIndex + 1) % totalSlides;
            carousel.css('transform', `translateX(-${carouselIndex * 100}%)`);
        }, 3000); // Change slide every 3 seconds
    }

}); 

const toggleBtn = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const backdrop = document.getElementById('sidebar-backdrop');

    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('translate-x-full');
      backdrop.classList.toggle('hidden');
    });

    backdrop.addEventListener('click', () => {
      sidebar.classList.add('translate-x-full');
      backdrop.classList.add('hidden');
    });