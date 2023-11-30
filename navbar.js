// Icon
let icon_li = document.createElement("li");
let icon_a = document.createElement("a");
let icon = document.createElement("img");
icon.src = "/icon.png";
icon_a.appendChild(icon);
icon_a.href = "/index.html"
icon_li.appendChild(icon_a);

document.getElementById("nav_bar").appendChild(icon_li);

// About button
let about_li = document.createElement("li");
let about_a = document.createElement("a");
let about_div = document.createElement("div");
about_div.innerHTML = "About<br>";
about_a.href = "/about.html";
about_a.classList.add("hidden_narrow");
about_a.appendChild(about_div);
about_li.appendChild(about_a);

document.getElementById("nav_bar").appendChild(about_li);

// Products button
let prod_li = document.createElement("li");
let prod_a = document.createElement("a");
let prod_div = document.createElement("div");
prod_div.innerHTML = "Products<br>";
prod_a.href = "/products/index.html";
prod_a.appendChild(prod_div);
prod_li.appendChild(prod_a);

document.getElementById("nav_bar").appendChild(prod_li);

// Cart button
let cart_li = document.createElement("li");
let cart_a = document.createElement("a");
let cart_div = document.createElement("div");
cart_div.innerHTML = "Cart<br>";
cart_a.href = "/cart.html";
cart_a.appendChild(cart_div);
cart_li.appendChild(cart_a);

document.getElementById("nav_bar").appendChild(cart_li);


