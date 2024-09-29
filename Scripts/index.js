
let Bagitems;

onLoad();


function onLoad(){
    let BagItemsStr = localStorage.getItem('Bagitems');
    Bagitems = BagItemsStr ? JSON.parse(BagItemsStr) : [];
    DisplayItemsOnHomePage();
    DisplayBagIcon();   
}

function DisplayBagIcon(){
    let bagItemcountElement = document.querySelector('.bag-item-count');
        if(Bagitems.length > 0){
            bagItemcountElement.innerText = Bagitems.length;
            bagItemcountElement.style.visibility ='visible';

        } 
        else{
            bagItemcountElement.style.visibility ='hidden';
        } 
};

function AddToBag(itemid){
    Bagitems.push(itemid);
    localStorage.setItem('Bagitems' , JSON.stringify(Bagitems));
    DisplayBagIcon();
}

function DisplayItemsOnHomePage(){
    
    let itemsContainerElement =document.querySelector('.items-container');

let innerHTML ='';

items.forEach(item =>{
    innerHTML += `<div class="item-container">
    <img class="item-img" src="${item.image}" alt="item-image">
    <div class="rating">${item.rating.stars}⭐ | ${item.rating.count}</div>
    <div class="compony-name">${item.company}</div>
    <div class="item-name">${item.item_name}</div>
    <div class="price">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="Discount">(${item.discount_percentage}%)</span>
    </div>
    <button class="btn-add-bag" onclick="AddToBag(${item.id})">Add to Bag</button>
    </div>`
});


itemsContainerElement.innerHTML =innerHTML;

}

