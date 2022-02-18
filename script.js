let video = document.querySelector("video");
window.onload=function(){
    video.load();
    initMap();
}
/*A la fin de la video : ajouter les 2 classes a la video et la div pour l'animation pour faire disparaitre la video*/
video.onended = function(){
    video.classList.add("endVideo");
    video.classList.add("hideVideo");
}
/*initialiser la map, API GOOGLE MAPS*/
function initMap() {
    const adr = { lat: 47.46724129392753, lng: -0.5196927153409836 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 13,
        center: adr,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
        position: adr,
        map: map,
    });
}