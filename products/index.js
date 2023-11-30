var loadedItems = 0;
var searchedItems = 0;
var loadLimit = 40;

var itemPerRow = 2;

var filterText = [];

// Loads the csv file
var listProduct = [];
fetch("/products/product.json").then(a => a.json().then(csv => {
     for(const prod_str of csv){
        listProduct.push(prod_str)
     }

     // Load item row
     loadItems("");
}))

document.getElementById("filter_input").onkeyup = function(evt){
    if(evt.key=="Enter"){
        searchItems(document.getElementById('filter_input').value);
    }
}

function searchCheckbox(ele,str){
    console.log(filterText.join(","));
    document.getElementById('filter_input').value = document.getElementById('filter_input').value.replaceAll(filterText.join(","),"")
    if(ele.checked){
        filterText.push(str);
        const filteredText = filterText.join(",");
        document.getElementById('filter_input').value += filteredText;
    }
    else{
        filterText.splice(filterText.indexOf(str));
        const filteredText_After = filterText.join(",");
        document.getElementById('filter_input').value += filteredText_After;
    }
    console.log(filterText.join(","));
    searchItems(document.getElementById('filter_input').value);
}

document.getElementById("disney_cb" ).onchange = evt => searchCheckbox(evt.target,"Series: Disney" );
document.getElementById("crayon_cb" ).onchange = evt => searchCheckbox(evt.target,"Series: Crayon Shin-chan" );
document.getElementById("lulu_cb"   ).onchange = evt => searchCheckbox(evt.target,"Series: LULU the Pig"   );
document.getElementById("miniso_cb" ).onchange = evt => searchCheckbox(evt.target,"Brand: Miniso" );
document.getElementById("52toys_cb" ).onchange = evt => searchCheckbox(evt.target,"Brand: 52Toys" );
document.getElementById("popmark_cb").onchange = evt => searchCheckbox(evt.target,"Brand: Popmark");

function searchItems(searchTerm){
    loadedItems=0;
    searchedItems=0;
    document.getElementById('items_list').innerHTML = '';
    loadItems(searchTerm);
}

function loadItems(searchTerm){
    const searchTerms = searchTerm.toLowerCase().split(",");

    if(loadedItems>=listProduct.length){
        return;
    }
    let items_list = document.getElementById("items_list");
    let tRow = document.createElement("tr");

    console.log(window.innerWidth);

    if(window.innerWidth>1000){
        itemPerRow = 4;
    }

    while(loadedItems<listProduct.length && searchedItems<loadLimit){
        for(const term of searchTerms){
            if(searchTerm=="" || searchTerm==null || (listProduct[loadedItems][1].toLowerCase().includes(term) || listProduct[loadedItems][2].toLowerCase().includes(term))){
                let tEle = document.createElement("td");
                tEle.appendChild(createItemBox(listProduct[loadedItems], null, "item_info", loadedItems));
                tRow.appendChild(tEle);
                searchedItems++;
                if((searchedItems%itemPerRow)==0){
                    document.getElementById("items_list").appendChild(tRow);
                    tRow = document.createElement("tr");
                }
            }
        }
        
        loadedItems++;
    }

    document.getElementById("items_list").appendChild(tRow);
    /*
    for(loadedItems;loadedItems<listProduct.length && loadedItems<loadLimit;loadedItems+=4){
        let tRow = document.createElement("tr");
        for(var j=0;j<4 && (loadedItems+j)<listProduct.length;j++){
            let tEle = document.createElement("td");
            tEle.appendChild(createItemBox(listProduct[loadedItems+j], null, "item_info", loadedItems+j));
            tRow.appendChild(tEle);
        }
        document.getElementById("items_list").appendChild(tRow);
    }
    */
    loadLimit += 40;
}

function createItemBox(prod_info, appendDiv, className, prod_pos){
    let root_a = document.createElement("a");
    root_a.href = "/product_info.html?prod=" + prod_pos;
    root_a.classList.add(className);

    let root_div = document.createElement("div");
    
    // Image
    let prod_img = document.createElement("img");
    prod_img.src = prod_info[0];
    root_div.appendChild(prod_img);

    // Title
    let prod_name = document.createElement("span");
    prod_name.textContent = prod_info[1];
    //prod_name.style = prod_info[1];
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

    //root_div.appendChild(document.createElement("br"));

    root_a.appendChild(root_div);

    //appendDiv.appendChild(root_div);

    return root_a;
}