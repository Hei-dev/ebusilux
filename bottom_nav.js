// Icon
let b_icon_li = document.createElement("li");
let b_icon_a = document.createElement("a");
let b_icon = document.createElement("img");
b_icon.src = "/icon.png";
b_icon_a.appendChild(b_icon);
b_icon_a.href = "/index.html"
b_icon_li.appendChild(b_icon_a);

document.getElementById("bottom_nav").appendChild(b_icon_li);

// About description
let b_about_desc_li = document.createElement("li");
let b_about_desc_a = document.createElement("span");
let b_about_desc_div = document.createElement("div");
b_about_desc_div.innerHTML = "<br>Follow our social! <br>";
b_about_desc_a.href = "/index.html";
b_about_desc_li.classList.add("hidden_narrow");
b_about_desc_a.appendChild(b_about_desc_div);
b_about_desc_li.appendChild(b_about_desc_a);

document.getElementById("bottom_nav").appendChild(b_about_desc_li);

// FB button
let b_fb_li = document.createElement("li");
let b_fb_a = document.createElement("a");
let b_fb_div = document.createElement("div");
b_fb_div.innerHTML = "Facebook<br>";
b_fb_a.href = "https://www.facebook.com/profile.php?id=100093454123422";
b_fb_li.classList.add("hidden_narrow");
b_fb_a.appendChild(b_fb_div);
b_fb_li.appendChild(b_fb_a);

// IG button
let b_ig_li = document.createElement("li");
let b_ig_a = document.createElement("a");
let b_ig_div = document.createElement("div");
b_ig_div.innerHTML = "Instagram<br>";
b_ig_li.classList.add("hidden_narrow");
b_ig_a.href = "https://www.instagram.com/Luxboxstore";
b_ig_a.appendChild(b_ig_div);
b_ig_li.appendChild(b_ig_a);

// Carosell button
let b_caro_li = document.createElement("li");
let b_caro_a = document.createElement("a");
let b_caro_div = document.createElement("div");
b_caro_div.innerHTML = "Carosell<br>";
b_caro_a.href = "https://www.carousell.com.hk/u/luxboxstore";
b_caro_li.classList.add("hidden_narrow");
b_caro_a.appendChild(b_caro_div);
b_caro_li.appendChild(b_caro_a);

document.getElementById("bottom_nav").appendChild(b_fb_li);
document.getElementById("bottom_nav").appendChild(b_ig_li);
document.getElementById("bottom_nav").appendChild(b_caro_li);

// About button
let b_about_li = document.createElement("li");
let b_about_a = document.createElement("a");
let b_about_div = document.createElement("div");
b_about_div.innerHTML = "About us<br>";
b_about_a.href = "/about.html";
b_about_li.classList.add("show_narrow");
b_about_a.appendChild(b_about_div);
b_about_li.appendChild(b_about_a);

document.getElementById("bottom_nav").appendChild(b_about_li);

document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("br"));
document.getElementById("bottom_nav").appendChild(document.createElement("hr"));

let very_bottom = document.createElement("div");

// back to top button
let b_top_a = document.createElement("a");
let b_top_div = document.createElement("div");
b_top_div.innerHTML = "Back to top<br>";
b_top_a.href = "#";
b_top_a.appendChild(b_top_div);
b_top_a.style.color = "white";

b_top_a.style.display = "inline-block";

very_bottom.appendChild(b_top_a);

let b_lang_select = document.createElement("select");

let b_lang_opt_eng = document.createElement("option");
b_lang_opt_eng.text = "English";

let b_lang_opt_chi = document.createElement("option");
b_lang_opt_chi.text = "Chinese";

b_lang_select.appendChild(b_lang_opt_eng);
b_lang_select.appendChild(b_lang_opt_chi);

b_lang_select.style.display = "inline-block";

very_bottom.appendChild(b_lang_select);
document.getElementById("bottom_nav").appendChild(very_bottom);