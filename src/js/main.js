

let headerBtn = $(".header__button");
let overlay = $(".overlay");
let popupClose = $(".popup__close");
let popupFormBtn = $(".popup__form-btn")

headerBtn.on ("click", function () {
overlay.fadeIn("slow")
});

popupClose.on("click", function () {
    overlay.fadeOut("slow")

});

popupFormBtn.on("click", function (e) {
    e.preventDefault();
    overlay.fadeOut("slow")

});

overlay.on ("click", function (e) {
    if(e.target.className ==="overlay"){
        overlay.fadeOut("slow")
    }
});


let swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,

    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
});

let map;




DG.then(function () {
    map = DG.map('map', {
        center: [42.848698, 74.631846],
        zoom: 18

    });
    let myIcon = DG.icon({
        iconUrl: 'https://avatars.mds.yandex.net/get-altay/2816622/2a000001753187b24ef61c494d24670ba21c/XXL',
        iconSize: [40, 25],

    });
    DG.marker([42.848698, 74.631846],{icon: myIcon}).addTo(map).bindPopup('Вы кликнули по мне!').bindLabel('million_melochi_bishkek', { static: false });

});