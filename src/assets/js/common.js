export default function setRem (argument) {
    var designWidth = 640, rem2px = 100;
    var innerWidth = window.innerWidth;
    if(innerWidth > 768){
        innerWidth = 768;
    }
    document.documentElement.style.fontSize = (innerWidth / designWidth) * rem2px+'px';
}