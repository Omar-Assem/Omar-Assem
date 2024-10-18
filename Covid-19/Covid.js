// navbar animation
let covid = document.getElementById('Covid');
let word = [`Covid-19`, `Be Careful`,`Be Alert`,`Be Kind`];
let wordIndex = 0 ;
let charIndex = 0 ;
let isDeleting = false;
// functions
function typeEffect(){
    let currentWord = word[wordIndex];
    let currentChar = currentWord.substring(0,charIndex);
    covid.textContent = currentChar ;
    covid.classList.add("stop-blink");



if(!isDeleting && charIndex < currentWord.length){
    charIndex++;

    setTimeout(typeEffect,200);
}else if(isDeleting && charIndex > 0){
    charIndex--;
    setTimeout(typeEffect,200);
}
else{
    isDeleting = !isDeleting;
    covid.classList.remove("stop-blink");
    wordIndex = !isDeleting ? (wordIndex + 1) % word.length : wordIndex ; 
    setTimeout(typeEffect ,1200);
};
    

};
typeEffect();
// darkmode
let darkMode = localStorage.getItem('DarkMode')
let themSwitch = document.getElementById('theme-switch')
let enableDarkMode = () =>{
    document.body.classList.add('DarkMode')
    localStorage.setItem('DarkMode','active')
}
let disableDarkMode = () =>{
    document.body.classList.remove('DarkMode')
    
    
    localStorage.setItem('DarkMode',null)
}
if(darkMode === 'active'){
    enableDarkMode()
}
else{
    disableDarkMode()
  
}
themSwitch.addEventListener('click', () =>{
    darkMode = localStorage.getItem('DarkMode')
darkMode !== 'active' ? enableDarkMode() : disableDarkMode()
})
