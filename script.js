
// VELORA PRODUCT COLLECTION

const products = [
    {
        name: "Elegant Women's Dress",
        price: 1499,
        salePrice: 1199,
        category: "women",
        image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600"
    },
    {
        name: "Women's Fashion Top",
        price: 899,
        category: "women",
        image: "https://images.unsplash.com/photo-1551163943-3f6a855d1153?w=600"
    },
    {
        name: "Men's Casual Shirt",
        price: 1199,
        category: "men",
        image: "https://images.unsplash.com/photo-1603252110481-7ba873bf42ab?w=600"
    },
    {
        name: "Men's Fashion Jacket",
        price: 1999,
        category: "men",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600"
    },
    {
        name: "Elegant Jewellery Set",
        price: 1299,
        category: "jewellery",
        image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600"
    },
    {
        name: "Fashion Earrings",
        price: 599,
        category: "jewellery",
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"
    },
    {
        name: "Beauty Makeup Kit",
        price: 999,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600"
    },
    {
        name: "Skincare Collection",
        price: 799,
        category: "beauty",
        image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
    },
    {
        name: "Floral Summer Dress",
        price: 1599,
        category: "women",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600"
    },
    {
        name: "Classic Women's Jeans",
        price: 1299,
        category: "women",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=600"
    },
    {
        name: "White Men's T-Shirt",
        price: 799,
        category: "men",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600"
    },
    {
        name: "Women's Handbag",
        price: 1499,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600"
    },
    {
        name: "Fashion Sunglasses",
        price: 699,
        category: "accessories",
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=600"
    },
     
    
    
    
    {
       name: "Men's Casual Jeans",
       price: 1299,
       category: "men",
       image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600"
    },
    
    {
       name: "Men's Formal Shirt",
       price: 1199,
       category: "men",
       image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=600"
    },
    
    {
       name: "Traditional Silk Saree",
       price: 2499,
       category: "women",
       image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=600"
    },
    
    {
       name: "Beautiful Women's Kurti Set",
       price: 1599,
       category: "women",
       image: "https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?w=600"
    },
    
    {
       name: "Dot & Key Vitamin C Serum",
       price: 599,
       category: "beauty",
       image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
    },
    
    {
       name: "Dot & Key Watermelon Moisturizer",
       price: 499,
       category: "beauty",
       image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=600"
    },
    
    {
       name: "Dot & Key SPF 50 Sunscreen",
       price: 699,
       category: "beauty",
       image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=600"
    },
    
    {
       name: "Elegant Necklace Set",
       price: 1499,
       category: "jewellery",
       image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600"
    },
    {
       name: "Gold-Plated Bangles",
       price: 899,
       category: "jewellery",
       image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600"
    },
    {
       name: "Traditional Jhumka Earrings",
       price: 699,
       category: "jewellery",
       image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600"
    },
    
    {
       name: "Gentle Face Wash",
       price: 349,
       category: "beauty",
       image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=600"
    },
    {
       name: "Hydrating Lip Balm",
       price: 199,
       category: "beauty",
       image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600"
    },
    {
       name: "Nourishing Night Cream",
       price: 499,
       category: "beauty",
       image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600"
    }
];
 

    

// DISPLAY PRODUCTS

let wishlist = [];

function displayProducts() {
    const categories = ["women", "men", "jewellery", "beauty", "accessories"];

    categories.forEach(category => {
        const container = document.getElementById(category + "-products");

        if (!container) return;

        const categoryProducts = products.filter(
            product => product.category === category
        );

        container.innerHTML = categoryProducts.map(product => {
            const productIndex = products.indexOf(product);

            return `
                <div class="product-card">
                    <div class="product-image">
    <img src="${product.image}" alt="${product.name}">
    ${product.salePrice ? '<span class="sale-badge">SALE</span>' : ''}
</div>
                    <h3>${product.name}</h3>
                    <p>
    <del>₹${product.price}</del>
    <strong style="color: #b88b5a;">
        ₹${product.salePrice || product.price}
    </strong>
    ${product.salePrice ? '<span>20% OFF</span>' : ''}
</p>

                    <button onclick="addToCart(${productIndex})">
                        Add to Cart
                    </button>

                    <button onclick="addToWishlist(${productIndex})">
                        ❤️ Add to Wishlist
                    </button>
                    <button onclick="addReview(${productIndex})">
    ⭐ Write a Review
</button>

<button onclick="displayReviews('${product.name.replace(/'/g, "\\'")}')">
    View Reviews
</button>
<button onclick="viewProductDetails(${productIndex})">
    View Details
</button>

                </div>
            `;
        }).join("");
    });
}



function addToWishlist(index) {
    const product = products[index];

    if (wishlist.some(item => item.name === product.name)) {
        alert("This product is already in your Wishlist!");
        return;
    }

    wishlist.push(product);
    displayWishlist();

    alert(product.name + " added to your Wishlist ❤️");
}

function displayWishlist() {
    const container = document.getElementById("wishlist-products");

    if (!container) return;

    if (wishlist.length === 0) {
        container.innerHTML = "<p>Your Wishlist is empty.</p>";
        return;
    }

    container.innerHTML = wishlist.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
        </div>
    `).join("");
}


// SHOPPING CART

let cart = [];


function addToCart(index) {
    const savedCart = JSON.parse(localStorage.getItem("veloraCart")) || [];

    savedCart.push(products[index]);

    localStorage.setItem("veloraCart", JSON.stringify(savedCart));

    cart.length = 0;
    cart.push(...savedCart);

    document.getElementById("cart-count").textContent = savedCart.length;

    alert("Product added to your cart!");
}



function showCart() {
    if (cart.length === 0) {
        alert("Your shopping cart is empty.");
        return;
    }

    const total = cart.reduce(
        (sum, item) => sum + (item.salePrice || item.price),
        0
    );

    alert(
        "YOUR VELORA CART\n\n" +
        cart.map(item =>
            item.name + " - ₹" + (item.salePrice || item.price)
        ).join("\n") +
        "\n\nTotal: ₹" + total
    );
}


// SEARCH PRODUCTS
function searchProducts() {
    const search = prompt("Search for a product or category:");

    if (!search) return;

    const result = products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.category.toLowerCase().includes(search.toLowerCase())
    );

    const container = document.getElementById("search-results");

    if (!container) {
        alert("Search results section is missing. We will add it next.");
        return;
    }

    if (result.length === 0) {
        container.innerHTML = "<p>No matching products found.</p>";
        return;
    }

    container.innerHTML = result.map(product => {
        const index = products.indexOf(product);

        return `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
                <button onclick="viewProductDetails(${index})">View Details</button>
            </div>
        `;
    }).join("");
}

// LOGIN DEMO

function showLogin() {
    const name = prompt("Welcome to VELORA! Enter your name:");

    if (name) {
        alert("Welcome, " + name + "!");
    }
}

// CHATBOT

function toggleChat() {
    const chatBox = document.getElementById("chat-box");

    chatBox.style.display =
        chatBox.style.display === "block" ? "none" : "block";
}


function sendMessage() {
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    const message = input.value.trim();

    if (!message) return;

    messages.innerHTML +=
        `<p class="user-message">${escapeHTML(message)}</p>`;

    const lowerMessage = message.toLowerCase();
    let reply = "Welcome to VELORA! Please ask me about products, orders, coupons or shopping.";

    if (lowerMessage.includes("women")) {
        reply = "Explore our Women's Collection! We have dresses and fashion tops.";
    }
    else if (lowerMessage.includes("men")) {
        reply = "Check out our Men's Collection for casual shirts and jackets.";
    }
    else if (lowerMessage.includes("jewellery")) {
        reply = "Discover our beautiful jewellery sets and earrings!";
    }
    else if (lowerMessage.includes("beauty") || lowerMessage.includes("skincare")) {
        reply = "Explore our beauty makeup kits and skincare collection!";
    }
    else if (lowerMessage.includes("price")) {
        reply = "Our product prices start from ₹599. Visit our collections to explore prices.";
    }
    else if (lowerMessage.includes("coupon") || lowerMessage.includes("discount")) {
        reply = "Try VELORA10 for 10% off or WELCOME20 for 20% off at checkout!";
    }
    else if (lowerMessage.includes("track") || lowerMessage.includes("delivery")) {
        reply = "Visit our Track Order page and enter your order ID to see your demo order status.";
    }
    else if (lowerMessage.includes("order")) {
        reply = "You can view your previous orders on the My Orders page.";
    }
    else if (lowerMessage.includes("contact") || lowerMessage.includes("help")) {
        reply = "Visit our Contact Us page. We are happy to help!";
    }
    else if (lowerMessage.includes("cart")) {
        const savedCart = JSON.parse(localStorage.getItem("veloraCart")) || [];
        reply = "You currently have " + savedCart.length + " items in your cart.";
    }
    else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        reply = "Hello! Welcome to VELORA. What would you like to shop for today?";
    }

    messages.innerHTML +=
        `<p class="bot-message">${reply}</p>`;

    input.value = "";
    messages.scrollTop = messages.scrollHeight;
}

function escapeHTML(value) {
    return value.replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

// MICROPHONE VOICE INPUT

function startVoice() {
    const SpeechRecognition =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Voice input is not supported in this browser. Try Chrome.");
        return;
    }

    const recognition = new SpeechRecognition();

    recognition.lang = "en-IN";
    recognition.interimResults = false;

    recognition.onresult = function(event) {
        document.getElementById("chat-input").value =
            event.results[0][0].transcript;
    };

    recognition.onerror = function() {
        alert("Microphone input could not be completed. Please try again.");
    };

    recognition.start();
}

// START WEBSITE

displayProducts();

// NEW ARRIVALS
function displayNewArrivals() {
    const container = document.getElementById("new-arrivals-products");

    if (!container) return;

    const newProducts = products.slice(0, 6);

    container.innerHTML = newProducts.map(product => {
        const index = products.indexOf(product);

        return `
           <div class="product-card">
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>

    <button onclick="addToCart(${index})">
        Add to Cart
    </button>

    <button onclick="addToWishlist(${index})">
        ❤️ Add to Wishlist
    </button>

    <button onclick="addProductReview('${product.name.replace(/'/g, "\\'")}')">
        ⭐ Write a Review
    </button>
    <button onclick="viewProductReviews('${product.name.replace(/'/g, "\\'")}')">
    👀 View Reviews
</button>
</div>
        `;
    }).join("");
}

displayNewArrivals();
// FEATURED PRODUCTS
function displayFeaturedProducts() {
    const container = document.getElementById("featured-products");

    if (!container) return;

    const featuredProducts = products.slice(6, 10);

    container.innerHTML = featuredProducts.map(product => {
        const index = products.indexOf(product);

        return `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>₹${product.price}</p>
                <button onclick="addToCart(${index})">Add to Cart</button>
                <button onclick="addToWishlist(${index})">❤️ Add to Wishlist</button>
            </div>
        `;
    }).join("");
}

displayFeaturedProducts();

// PRODUCT CATEGORY AND PRICE FILTERS

// PRODUCT REVIEWS AND STAR RATINGS

function addReview(productIndex) {
    const product = products[productIndex];

    const rating = prompt(
        "Give " + product.name + " a rating from 1 to 5:"
    );

    if (rating === null) return;

    const stars = Number(rating);

    if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
        alert("Please enter a rating from 1 to 5.");
        return;
    }

    const reviewText = prompt("Write your product review:");

    if (!reviewText || !reviewText.trim()) {
        alert("Please write a review.");
        return;
    }

    const reviews = JSON.parse(
        localStorage.getItem("veloraReviews")
    ) || {};

    if (!reviews[product.name]) {
        reviews[product.name] = [];
    }

    reviews[product.name].push({
        rating: stars,
        comment: reviewText.trim(),
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem(
        "veloraReviews",
        JSON.stringify(reviews)
    );

    alert("Thank you! Your review has been saved ⭐");

    displayReviews(product.name);
}

function displayReviews(productName) {
    const reviews = JSON.parse(
        localStorage.getItem("veloraReviews")
    ) || {};

    const productReviews = reviews[productName] || [];

    if (productReviews.length === 0) {
        alert("No reviews yet for " + productName);
        return;
    }

    const reviewText = productReviews.map(review =>
        "⭐".repeat(review.rating) +
        "\n" + review.comment +
        "\nDate: " + review.date
    ).join("\n\n");

    alert("Reviews for " + productName + "\n\n" + reviewText);
}
function viewProductDetails(index) {
    localStorage.setItem(
        "veloraProducts",
        JSON.stringify(products)
    );

    window.location.href = "product-details.html?id=" + index;
}

let productReviews = JSON.parse(
    localStorage.getItem("veloraReviews")
) || [];

function addProductReview(productName) {
    const rating = prompt("Give a rating from 1 to 5 stars:");

    if (rating === null) return;

    const stars = Number(rating);

    if (!Number.isInteger(stars) || stars < 1 || stars > 5) {
        alert("Please enter a rating between 1 and 5.");
        return;
    }

    const review = prompt("Write your product review:");

    if (review === null || review.trim() === "") {
        alert("Please enter a review.");
        return;
    }

    productReviews.push({
        productName: productName,
        rating: stars,
        review: review.trim()
    });

    localStorage.setItem(
        "veloraReviews",
        JSON.stringify(productReviews)
    );

    alert("Thank you! Your review has been saved.");
}

function viewProductReviews(productName) {
    const reviews = productReviews.filter(
        item => item.productName === productName
    );

    if (reviews.length === 0) {
        alert("No reviews available yet!");
        return;
    }

    let message = "Reviews for " + productName + "\n\n";

    reviews.forEach(item => {
        message += "Rating: " + "⭐".repeat(item.rating) +
            "\nReview: " + item.review + "\n\n";
    });

    alert(message);
}


