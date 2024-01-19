// I referenced code on w3schools.com to help display these properties
// Navigator properties
document.getElementById("appName").innerHTML = "navigator.appName is " + navigator.appName;
document.getElementById("product").innerHTML = "navigator.product is " + navigator.product;
document.getElementById("appVersion").innerHTML = "navigator.appVersion is " + navigator.appVersion;
document.getElementById("userAgent").innerHTML = "navigator.userAgent is " + navigator.userAgent;
document.getElementById("platform").innerHTML = "navigator.platform is " + navigator.platform;
document.getElementById("language").innerHTML = "navigator.language is " + navigator.language;

// Window properties
document.getElementById("innerHeight").innerHTML = "window.innerHeight is " + window.innerHeight;
document.getElementById("innerWidth").innerHTML = "window.innerWidth is " + window.innerWidth;

// Screen properties
document.getElementById("screenWidth").innerHTML = "screen.width is " + screen.width;
document.getElementById("screenHeight").innerHTML = "screen.height is " + screen.height;
document.getElementById("availWidth").innerHTML = "screen.availWidth is " + screen.availWidth;
document.getElementById("availHeight").innerHTML = "screen.availHeight is " + screen.availHeight;
document.getElementById("colorDepth").innerHTML = "screen.colorDepth is " + screen.colorDepth;
document.getElementById("pixelDepth").innerHTML = "screen.pixelDepth is " + screen.pixelDepth;

// Location properties
document.getElementById("locationHref").innerHTML = "window.location.href is " + window.location.href;
document.getElementById("locationHostname").innerHTML = "window.location.hostname is " + window.location.hostname;
document.getElementById("locationPathname").innerHTML = "window.location.pathname is " + window.location.pathname;
document.getElementById("locationProtocol").innerHTML = "window.location.protocol is " + window.location.protocol;

// Geolocation properties
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    document.getElementById("geolocationData").innerHTML =
    "Geolocation is not supported by this browser.";
}

function showPosition(position) {
    document.getElementById("latitude").innerHTML =
    "Latitude: " + position.coords.latitude;
    
    document.getElementById("longitude").innerHTML =
    "Longitude: " + position.coords.longitude;
}