function appendInventory_airconditioner_key() {
    let data = [];
    data.push('airconditioner_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'airconditioner_inside.html';
}

function appendInventory_screwdriver() {
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    let data = [];
    data.push('screwdriver');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'empty_box.html';
    console.log("screwdriver added to inventory");
}

function appendInventory_charger() {
    let data = [];
    data.push('charger');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'side4_nocharger.html';
}

function appendInventory_plant_key() {
    let data = [];
    data.push('plant_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'plant_from_top.html';
}

function appendInventory_charger_key() {
    let data = [];
    data.push('charger_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'pulleddowncharger_nokey.html';
    console.log("inside append inventory")
}

function appendInventory_thirddrawer_key() {
    let data = [];
    data.push('thirddrawer_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'small_cabinet.html';
    console.log("inside append inventory")
}

function hasitem_screwdriver(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    if(inventory.includes('screwdriver')){
        window.location="airconditioner_inside_withkey.html"
    }
}

function hasitem_charger(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    if(inventory.includes('charger')){
        window.location="charging_phone.html"
    }
}

function hasitem_airconditioner_key(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    if(inventory.includes('airconditioner_key')){
        window.location="small_cabinet_third_drawer.html"
    }
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
    if(inventory.includes('plant_key')){
        const img = new Image(55,90);
        img.src = "Images/3key.png";
        img.className = "plant_key_inventory";
        inventoryList.appendChild(img);
        console.log("BYE")
    }
    if(inventory.includes('charger_key')){
        const img = new Image(200,100);
        img.src = "Images/plant_justkey.png";
        img.className = "charger_key_inventory";
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
}

function checkside4(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));

    const inventoryList = document.getElementById('charger');
    if (inventory.includes('charger')==false) {
        window.location = "side4.html";
    }
    else if(inventory.includes('charger')) {
        window.location = "side4_nocharger.html";
    }  
    else {
        window.location = "side4.html";
    }
}

function checkside4_ver2(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));

    const inventoryList = document.getElementById('charger');
    console.log(inventory);
    if (inventory == null) {
        window.location = "side4.html";
        console.log("1");
    }
    if (inventory.includes('charger')==false) {
        window.location = "side4.html";
        console.log("2");
    }
    else if(inventory.includes('charger')) {
        window.location = "side4_nocharger.html";
        console.log("3");
    }  
    else {
        window.location = "side4.html";
        console.log("4");
    }
}

function sidetable(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));

    const inventoryList = document.getElementById('bhuiody');
    if (inventory == null) {
        window.location = "screwdriver_in_box.html";
    }
    else if(inventory.includes('screwdriver')) {
        window.location = "empty_box.html";
    }  
    else {
        window.location = "screwdriver_in_box.html";
    }
}