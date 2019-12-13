function preloader(){
    document.querySelector(".preloader").classList.remove("hidden");
    document.querySelector(".content").classList.add("hidden");
    function delay(){
    document.querySelector(".preloader").classList.add("hidden");
    document.querySelector(".content").classList.remove("hidden");
    }
    setTimeout(delay, 800);
}