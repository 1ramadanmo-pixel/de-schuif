const menuData = [
    { id: 1, name: "Stoomtrein (Gr. Hamburger)", category: "warm", price: 7.00, desc: "Grote traditionele hamburger met verse groenten en speciale schuifsaus.", image: "https://plus.unsplash.com/premium_photo-1775690859754-adacbd69863c?q=80&w=1413&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Locomotief", category: "warm", price: 8.00, desc: "Hamburger met knapperig spek, extra smeltkaas en barbecuesaus.", image: "https://images.unsplash.com/photo-1726039536976-404844bb2de8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TG9jb21vdGllZiUyMEhhbWJ1cmdlciUyMG1ldCUyMGtuYXBwZXJpZyUyMHNwZWt8ZW58MHx8MHx8fDA%3D" },
    { id: 3, name: "Trammeke", category: "warm", price: 8.00, desc: "Exotische hamburger met sappige schijfjes ananas en dubbele smeltkaas.", image: "https://images.unsplash.com/photo-1708083414905-a8cd356032c7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VHJhbW1la2UlMjBFeG90aXNjaGUlMjBoYW1idXJnZXIlMjBtZXQlMjBzYXBwaWdlJTIwc2NoaWpmamVzJTIwYW5hbmFzJTIwZW4lMjBkdWJiZWxlJTIwc21lbHRrYWFzLnxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 4, name: "Boemeltje", category: "warm", price: 7.50, desc: "Klassieke cheeseburger met augurk, uien en milde mosterd-ketchupsaus.", image: "https://plus.unsplash.com/premium_photo-1675252371648-7a6481df8226?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8KEJvZW1lbHRqZSUyMC0lMjAlRDglQUElRDglQjQlRDklOEElRDglQjIlMjAlRDglQTglRDglQjElRDglQUMlRDglQjElMjAlRDklODMlRDklODQlRDglQTclRDglQjMlRDklOEElRDklODMlRDklOEElMjAlRDglQTglRDglQTclRDklODQlRDglQUUlRDglQjYlRDglQTclRDglQjF8ZW58MHx8MHx8fDA%3D" },
    { id: 5, name: "TGV Burger", category: "warm", price: 8.50, desc: "Scherpe hamburger met jalapeños, pittige samurai saus en jonge kaas.", image: "https://images.unsplash.com/photo-1582754544110-2e2edf5f32b6?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Schuif Special", category: "warm", price: 9.00, desc: "Dubbele burger met gebakken eitje, spek, kaas en unieke huisgemaakte saus.", image: "https://plus.unsplash.com/premium_photo-1675283476222-6a1a01d6a0ba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U2NodWlmJTIwU3BlY2lhbCUyMER1YmJlbGUlMjBidXJnZXIlMjBtZXQlMjBnZWJha2tlbiUyMGVpdGplJTJDJTIwc3BlayUyQyUyMGthYXMlMjBlbiUyMHVuaWVrZSUyMGh1aXNnZW1hYWt0ZSUyMHNhdXMufGVufDB8fDB8fHww" },
    { id: 7, name: "Carpaccio Speciale", category: "smoskes", price: 7.00, desc: "Met rucola, parmezaanse kaas, pijnboompitten en truffelmayo.", image: "https://images.unsplash.com/photo-1604909054103-f9ed51a70caf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhcnBhY2NpbyUyMFNwZWNpYWxlfGVufDB8fDB8fHww" },
    { id: 8, name: "Martino Speciaal", category: "smoskes", price: 7.00, desc: "Verse préparé, ui, augurk, mosterd, ketchup en ansjovis.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Martino_sandwich.jpg/500px-Martino_sandwich.jpg" },
    { id: 9, name: "Zalm Royal", category: "smoskes", price: 8.00, desc: "Premium gerookte zalm met frisse krabsla en romige cocktailsaus.", image: "https://img.taste.com.au/IRUcUKPu/w720-h480-cfill-q80/taste/2016/11/smoked-salmon-baguettes-with-mustard-dressing-22704-1.jpeg" },
    { id: 10, name: "Smos Kaas & Ham", category: "smoskes", price: 5.50, desc: "Klassiek belegd broodje met kaas, ham, sla, tomaat, komkommer en ei.", image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 11, name: "Brie-Jante", category: "smoskes", price: 6.80, desc: "Zachte brie met knapperige walnoten, honing en verse rucola.", image: "https://media.istockphoto.com/id/903370368/photo/traditional-french-brie-cheese-on-a-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=OgHaYW9n38aqxSdZarD2gUUR6aShyjAITpc-Lzx0mJY=" },
    { id: 12, name: "Gezondje", category: "smoskes", price: 5.00, desc: "Vol met knapperige seizoensgroenten en een lichte yoghurtdressing.", image: "https://images.unsplash.com/photo-1534352211968-8d25dbe0e951?q=80&w=729&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 14, name: "Koude Schotel Kip", category: "schotels", price: 9.50, desc: "Frisse schotel met malse gegrilde kipreepjes, ananas en cocktailsaus.", image: "https://www.slagerijvandecruys.be/uploads/84f4ac89-9712-431f-b8ab-449ec3abd54a.jpg?v=639041513319589246&width=2280&rmode=max&format=webp&quality=90" },
    { id: 15, name: "Koude Schotel Zalm", category: "schotels", price: 11.00, desc: "Luxueuze schotel met gerookte zalm, kappertjes, ui en dillesaus.", image: "https://images.unsplash.com/photo-1622119652484-dc8a0311ca90?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S291ZGUlMjBTY2hvdGVsJTIwWmFsbXxlbnwwfHwwfHx8MA%3D%3D" },
    { id: 17, name: "Latte Macchiato", category: "drinks", price: 3.50, desc: "Warme opgestoomde melk met een intense espressoshot.", image: "https://images.unsplash.com/photo-1550247611-e651810312fe?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8TGF0dGUlMjBNYWNjaGlhdG98ZW58MHx8MHx8fDA%3D" },
    { id: 18, name: "Cappuccino", category: "drinks", price: 3.00, desc: "Klassieke Italiaanse espresso met vol melkschuim en cacao.", image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhcHB1Y2Npbm98ZW58MHx8MHx8fDA%3D" },
    { id: 21, name: "Coca-Cola", category: "drinks", price: 2.50, desc: "Blikje originele koude Coca-Cola (33cl).", image: "https://images.unsplash.com/photo-1646009760728-9ff56d4910de?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8" },
    { id: 22, name: "Fanta Orange", category: "drinks", price: 2.50, desc: "Blikje verfrissende Fanta Orange (33cl).", image: "https://images.unsplash.com/photo-1527960471264-932f39eb5846?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RmFudGElMjBPcmFuZ2V8ZW58MHx8MHx8fDA%3D" }
];

let cart = [];
let audioCtx = null;

function playClickSound() {
    try {
        if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        let osc = audioCtx.createOscillator();
        let gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(580, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.06);
        gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.06);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + 0.06);
    } catch(e) { console.log("Audio contexts active."); }
}

function displayProducts(products) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";
    
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = "<div class='product-img-container'><img src='" + product.image + "' alt='" + product.name + "' class='product-img' loading='lazy'></div><h3>" + product.name + "</h3><p>" + product.desc + "</p><div class='product-footer'><span class='price'>" + product.price.toFixed(2) + " €</span><button class='add-btn' onclick='addToCart(" + product.id + ")'><i class='fas fa-plus'></i></button></div>";
        grid.appendChild(card);
    });

    gsap.fromTo(".product-card", 
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.06, ease: "power2.out" }
    );
}

function scrollToMenu() {
    document.getElementById("menu-section").scrollIntoView({ behavior: "smooth" });
}

function filterMenu(category, event) {
    document.querySelectorAll(".cat-btn").forEach(btn => btn.classList.remove("active"));
    if (event) event.target.classList.add("active");

    if(category === "all") {
        displayProducts(menuData);
    } else {
        const filtered = menuData.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

function addToCart(id) {
    playClickSound();
    const product = menuData.find(p => p.id === id);
    const existing = cart.find(item => item.id === id);

    if(existing) {
        existing.qty++;
    } else {
        cart.push({...product, qty: 1});
    }
    updateCartUI();
    gsap.to(".cart-icon-btn", { scale: 1.25, duration: 0.1, yoyo: true, repeat: 1 });
}

function changeQuantity(id, delta) {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(id);
    } else {
        updateCartUI();
    }
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    
    let totalItems = 0;
    let totalPrice = 0;
    cartItems.innerHTML = "";

    if (cart.length === 0) {
        cartItems.innerHTML = "<div class='empty-cart-message'>Je winkelwagen is leeg 🛒</div>";
    } else {
        cart.forEach(item => {
            totalItems += item.qty;
            totalPrice += (item.price * item.qty);

            const itemEl = document.createElement("div");
            itemEl.className = "cart-item";
            itemEl.innerHTML = "<div style='flex:1;'><h4>" + item.name + "</h4><small>" + item.price.toFixed(2) + " €</small></div><div class='cart-item-controls'><button class='qty-btn' onclick='changeQuantity(" + item.id + ", -1)'>-</button><span class='qty-num'>" + item.qty + "</span><button class='qty-btn' onclick='changeQuantity(" + item.id + ", 1)'>+</button><button class='delete-item-btn' onclick='removeFromCart(" + item.id + ")'><i class='fas fa-trash-alt'></i></button></div><strong style='color:var(--accent-color); margin-left:15px; min-width:60px; text-align:right;'>" + (item.price * item.qty).toFixed(2) + " €</strong>";
            cartItems.appendChild(itemEl);
        });
    }

    cartCount.innerText = totalItems;
    cartTotal.innerText = totalPrice.toFixed(2) + " €";
}

function toggleCart() {
    const sidebar = document.getElementById("cart-sidebar");
    sidebar.classList.toggle("open");
}

function sendToWhatsApp() {
    if(cart.length === 0) {
        alert("Je winkelwagen is leeg!");
        return;
    }
    const orderType = document.querySelector('input[name="order-type"]:checked').value;
    let phone = "+32470685016"; 
    let text = "Beste De Schuif, ik wil graag een nieuwe bestelling plaatsen via de website:\n";
    text += "⚙️ **Methode**: " + orderType + "\n\n";
    text += "🛒 **Producten**:\n";
    cart.forEach(item => {
        text += "- " + item.name + " (Aantal: " + item.qty + ") -> " + (item.price * item.qty).toFixed(2) + " €\n";
    });
    text += "\n💵 **Totaalbedrag**: " + document.getElementById("cart-total").innerText;
    text += "\n\nAlvast bedankt! ✨";
    window.open("https://wa.me/32470685016?text=" + encodeURIComponent(text), "_blank");
}

window.onload = () => {
    displayProducts(menuData);
    updateCartUI();
    gsap.from(".hero-content > *", { opacity: 0, y: 40, duration: 0.8, stagger: 0.12, ease: "power3.out" });
};
