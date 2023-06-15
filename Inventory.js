function appendInventory_airconditioner_key() {
    let data = [];
    data.push('airconditioner_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'airconditioner_inside.html';
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
}