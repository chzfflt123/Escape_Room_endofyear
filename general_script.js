const inventory = JSON.parse(localStorage.getItem('inventory'));
console.log(inventory)

const inventoryList = document.getElementById('bhuiody');
if(inventory.includes('screwdriver')) {
    const img = new Image(90, 40); // width, height
    img.src = "Images/screwdriver.png";
    img.className = "screwinventory";
    inventoryList.appendChild(img);
    console.log("BYE");
}
if(inventory.includes('airconditioner_key')){
    const img = new Image(90,85);
    img.src = "Images/airconditioner_keyicon.png";
    img.className = "keyinventory";
    inventoryList.appendChild(img);
    console.log("BYE")
}
if(inventory.includes('charger')){
    const img = new Image(200,100);
    img.src = "Images/side4_charger.png";
    img.className = "chargerinventory";
    inventoryList.appendChild(img);
    console.log("BYE")
}