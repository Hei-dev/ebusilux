// Set homepage image display
/*
var featured_image = 1;
setInterval(()=>{
    if(featured_image==1){
        setInterval(()=>{
            //document.getElementById("promo_a_1").style.left += 1
        },10)
    }
    
},10000)*/

// Loads the csv file
var listProduct = [];
fetch("./products/product.json").then(a => a.json().then(csv => {
     for(const prod_str of csv){
        listProduct.push(prod_str)
     }

     // Load latest item row
     // please enter 5 or more
     loadLatestItem([0,1,2,3,6]);

     // Load items on-sale
     // again please enter 5 or more
     loadSaleItem([1,2,3,4]);
}))

function loadLatestItem(itemsNos){
    for(const itemNo of itemsNos){
        document.getElementById("latest_items_div").appendChild(
            createItemBox(listProduct[itemNo], document.getElementById("latest_items_div"), "item_latest", itemNo)
        );

    }
}

function loadSaleItem(itemsNos){
    for(const itemNo of itemsNos){
        document.getElementById("sale_items_div").appendChild(
            createItemBox(listProduct[itemNo], document.getElementById("sale_items_div"), "item_latest", itemNo)
        );

    }
}

function createItemBox(prod_info, appendDiv, className, prod_pos){
    let root_a = document.createElement("a");
    root_a.href = "./product_info.html?prod=" + prod_pos;
    root_a.classList.add(className);

    let root_div = document.createElement("div");
    
    // Image
    let prod_img = document.createElement("img");
    prod_img.src = prod_info[0];
    root_div.appendChild(prod_img);
    root_div.appendChild(document.createElement("br"));

    // Title
    let prod_name = document.createElement("span");
    prod_name.textContent = prod_info[1];
    prod_name.fontWeight = "bold"
    root_div.appendChild(prod_name);
    root_div.appendChild(document.createElement("br"));

    // Marked Price
    let prod_price = document.createElement("span");
    prod_price.textContent = prod_info[3];
    

    // Selling Price (if any)
    let prod_sellprice;
    if(prod_info[4]!=prod_info[3]){
        prod_sellprice = document.createElement("span");
        prod_sellprice.textContent = prod_info[4];
        prod_sellprice.style.fontWeight = "bold";
        prod_price.style.textDecoration = "line-through";
    }

    root_div.appendChild(prod_price);
    if(prod_info[4]!=prod_info[3]){root_div.appendChild(prod_sellprice);}

    root_div.appendChild(document.createElement("br"));

    root_a.appendChild(root_div);

    //appendDiv.appendChild(root_div);

    return root_a;
}