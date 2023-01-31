async function onBluetooth() {
    navigator.bluetooth.getAvailability().then((available) => {
        if (available) {
            console.log("This device supports Bluetooth!");
        } else {
            console.log("Doh! Bluetooth is not supported");
        }
    });
}

async function listBluetoothDevices() {
    //navigator.bluetooth.getDevices().then((devices) => {
    //    console.log("Num devises = " + devices.length);
    //})
    //.catch((error) => console.error(`Something went wrong. ${error}`));
    let options = {};
    options.acceptAllDevices = true;
    navigator.bluetooth.requestDevice(options).then((device) => {
        console.log(`Name: ${device.name}`);
        var e = document.getElementById("connected_device");
        if (e) {
            e.innerHTML = device.name;
            e.parentElement.className = "connection_header_connected";
        }
    })
    .catch((error) => console.error(`Something went wrong. ${error}`));
}