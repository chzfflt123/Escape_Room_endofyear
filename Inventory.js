function appendInventory_airconditioner_key() {
    let data = [];
    data.push('airconditioner_key');
    localStorage.setItem('inairkey', JSON.stringify(data));
    window.location = 'airconditioner_inside.html';
}

function appendInventory_screwdriver() {
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    let data = [];
    data.push('screwdriver');
    localStorage.setItem('inscrew', JSON.stringify(data));
    window.location = 'empty_box.html';
    console.log("screwdriver added to inventory");
}

function appendInventory_charger() {
    let data = [];
    data.push('charger');
    localStorage.setItem('incharge', JSON.stringify(data));
    window.location = 'side4_nocharger.html';
}

function appendInventory_plant_key() {
    let data = [];
    data.push('plant_key');
    localStorage.setItem('inplakey', JSON.stringify(data));
    window.location = 'plant_from_top.html';
}

function appendInventory_charger_key() {
    let data = [];
    data.push('charger_key');
    localStorage.setItem('incharkey', JSON.stringify(data));
    window.location = 'pulleddowncharger_nokey.html';
    console.log("inside append inventory")
}

function appendInventory_thirddrawer_key() {
    let data = [];
    data.push('airconditioner_key');
    localStorage.setItem('inventory', JSON.stringify(data));
    window.location = 'small_cabinet_third_drawer.html';
    console.log("inside append inventory")
}

function hasitem_screwdriver(){
    const inventory = JSON.parse(localStorage.getItem('inscrew'));
    if(inventory.includes('screwdriver')){
        window.location="airconditioner_inside_withkey.html"
    }
}

function hasitem_charger(){
    const incharge = JSON.parse(localStorage.getItem('incharge'));
    if(inventory.includes('charger')){
        window.location="charging_phone.html"
    }
}

function hasitem_hammer(){
    const incharge = JSON.parse(localStorage.getItem('incharge'));
    if(inventory.includes('hammer')){
        window.location="crackedwhiteboard_withkey.html"
    }
}

function show_screw(){
    const inscrew = JSON.parse(localStorage.getItem('inscrew'));
    console.log(inscrew)

    const inventoryList = document.getElementById('screw');
    if(inscrew.includes('screwdriver')) {
        const img = new Image(90, 40); // width, height
        img.src = "Images/screwdriver.png";
        img.className = "screwinventory";
        inventoryList.appendChild(img);
        console.log("screw");
    }
}

function show_airkey(){
    const inairkey = JSON.parse(localStorage.getItem('inairkey'));
    console.log(inairkey)

    const inventoryList = document.getElementById('airkey');
    if(inairkey.includes('airconditioner_key')){
        const img = new Image(95,85);
        img.src = "Images/airconditioner_keyicon.png";
        img.className = "keyinventory";
        inventoryList.appendChild(img);
        console.log("akey")
    }
}

function show_charge(){
    const incharge = JSON.parse(localStorage.getItem('incharge'));
    console.log(incharge)

    const inventoryList = document.getElementById('charge');
    if(incharge.includes('charger')){
        const img = new Image(200,100);
        img.src = "Images/side4_charger.png";
        img.className = "chargerinventory";
        inventoryList.appendChild(img);
        console.log("BYE")
    }
}

function show_plakey(){
    const inplakey = JSON.parse(localStorage.getItem('inplakey'));
    console.log(inplakey)

    const inventoryList = document.getElementById('plakey');
    if(inplakey.includes('plant_key')){
        const img = new Image(200,100);
        img.src = "Images/3key.png";
        img.className = "plant_key";
        inventoryList.appendChild(img);
        console.log("BYE")
    }
}

function show_charkey(){
    const incharkey = JSON.parse(localStorage.getItem('incharkey'));
    console.log(inscrew)

    const inventoryList = document.getElementById('charkey');
    if(incharkey.includes('charger_key')){
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


function hasitem_airconditioner_key(){
    const inventory = JSON.parse(localStorage.getItem('inventory'));
    if(inventory.includes('thirddrawer_key')){
        window.location="small_cabinet_third_drawer.html"
    }
    else if (inventory.includes('airconditioner_key')){
        window.location="small_cabinet_third_drawer_withkey.html"
    }
}