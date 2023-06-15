function appendInventory_airconditioner_key() {
    let data = [];
    data.push('airconditioner_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'airconditioner_inside.html';
}

function appendInventory_Charger() {
    let data = [];
    data.push('charger');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'side4_nocharger.html';
    console.log("inside append inventory")
}

function printImages(){
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
        const img = new Image(95,85);
        img.src = "Images/airconditioner_keyicon.png";
        img.className = "keyinventory";
        inventoryList.appendChild(img);
        console.log("BYE")
    }
    if(inventory.includes('charger')){
        const img = new Image(200,100);
        img.src = "Images/charger_icon.png";
        img.className = "chargerinventory";
        inventoryList.appendChild(img);
        console.log("BYE")
    }
}