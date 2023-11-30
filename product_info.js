const prod_no = new URLSearchParams(window.location.search).get("prod");
var prod_info;

var listProduct = [];

fetch("/products/product.json").then(a => a.json().then(csv => {
    for(const prod_str of csv){
       listProduct.push(prod_str)
    }

    prod_info = listProduct[prod_no];

    if(prod_info===undefined){
        window.location.href = "/products/index.html";
    }
    else{
        // Load item row
        loadInfo();
    }
    

    document.getElementById("add_cart_a").onclick = () => {
        addToCart(document.getElementById("qty_num_input").value)
    }

    document.getElementById("add_cart_a_n").onclick = () => {
        addToCart(document.getElementById("qty_num_input_n").value);
    }
}))

function addToCart(qty){
    let cart_json = JSON.parse(window.sessionStorage.getItem("cart"));
    if(cart_json===null){cart_json = [];}
    if(qty==""){
        qty = "1";
    }
    prod_info.push(qty);
    cart_json.push(prod_info);
    window.sessionStorage.setItem("cart", JSON.stringify(cart_json));
    window.location.href = "/cart.html";
}

function loadInfo(){
    document.getElementById("prod_name_heading").innerHTML = prod_info[1];
    document.getElementById("item_img").src = prod_info[0];
    
    // Price tag
    let markedPrice = document.createElement("span");
    markedPrice.textContent = prod_info[3];
    if(prod_info[4]!=prod_info[3]){
        let sellingPrice = document.createElement("span");
        sellingPrice.textContent = prod_info[4];
        markedPrice.style.textDecoration = "line-through";
        markedPrice.style.fontSize = "0.75em";
        markedPrice.style.fontWeight = "normal";

        document.getElementById("price_head").appendChild(markedPrice);
        document.getElementById("price_head").appendChild(sellingPrice);
    }
    else{
        document.getElementById("price_head").appendChild(markedPrice);
    }
    document.getElementById("prod_desc_para").innerHTML = prod_info[2];
    
    if(prod_info[5]=="0"){
        document.getElementById("add_cart_a").style.display = "none";
        document.getElementById("add_cart_a_n").style.display = "none";

        document.getElementById("oos_div").style.display = "block";
        document.getElementById("oos_div_n").style.display = "block";

    }
    
}