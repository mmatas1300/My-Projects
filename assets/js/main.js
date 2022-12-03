//ScrollReveal
const sr = {
    distance: "50px",
    duration: 1000,
    delay: 10,
    reset: false,
    opacity: 0,
    scale: 0.8};

sr.origin = "left";
ScrollReveal().reveal('.r-reveal',sr);
sr.origin = "right";
ScrollReveal().reveal('.l-reveal',sr);
sr.origin = "top";
ScrollReveal().reveal('h1',sr);
delete sr.origin;
delete sr.distance;
ScrollReveal().reveal('.c-reveal',sr);
ScrollReveal().reveal('.text-box',sr);
sr.distance = "100px";
sr.origin = "left";
sr.origin.opacity = 1;
sr.scale= 1;
sr.duration = 700;
sr.delay = 0;
ScrollReveal().reveal('.lang-change',sr)


//Languages
const switchElement = document.getElementById('btn-switch');

const myLocation = document.querySelector("[data-section]");

const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async (language) => {
    if(myLocation.dataset.section!="index"){
        const requestJson = await fetch(`/My-Projects/assets/languages/${language}.json`);
        itTextChange(requestJson);
    }else{
        const requestJson = await fetch(`assets/languages/${language}.json`);
        itTextChange(requestJson);
    }
}

const itTextChange = async (requestJson)=>{
    const texts = await requestJson.json();
    for (const textToChange of textsToChange){
        const section =textToChange.dataset.section;
        const value = textToChange.dataset.value;
        textToChange.innerHTML=texts[section][value];
    }
}

switchElement.checked = JSON.parse(localStorage.getItem('btn-switch'));

if (switchElement.checked) {
    changeLanguage("es");
    localStorage.setItem('btn-switch', switchElement.checked);
}else{
    changeLanguage("en");
    localStorage.setItem('btn-switch', switchElement.checked);
}

switchElement.addEventListener("change", (e) => {
    if (e.target.checked) {
        changeLanguage("es");
        localStorage.setItem('btn-switch', switchElement.checked);
    }else{
        changeLanguage("en");
        localStorage.setItem('btn-switch', switchElement.checked);
    }
});