const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;

const shadow = document.querySelector('.shadow');
const bigText = document.querySelector('.big-text');
const firstSection = document.querySelector('.first-section');

const titleWord = document.querySelector('.title-word');
let keywords = [ "Diviértete", "Juega", "Disfruta", "Transforma", "Rolea", "Camina", "Descubre", "Conecta", "Enlaza", "Convive"];

let firstSectionHeight = firstSection.offsetHeight;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen  = false;
  }
});

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  
  shadow.style.height = `${scroll * 0.5 + 100}px`;
  bigText.style.opacity = - scroll / (firstSectionHeight / 2) + 1;
})

let keyPosition = 0;
let deleting = str => {
  let arrFromStr = str.split('');
  
  let i = arrFromStr.length;
  let delStr = setInterval(() => {    
    titleWord.innerHTML = arrFromStr.join('');
    i--;
    arrFromStr.pop();
    
    if(i < 0) {
      clearInterval(delStr);
      
      if(keyPosition === keywords.length) {
        keyPosition = 0;
      }
      
      writing(keywords[keyPosition]);
    }
  }, 220);
}


let writing = str => {
  let arrFromStr = str.split('');
  
  let i = 0;
  let printStr = setInterval(() => {
    titleWord.innerHTML += arrFromStr[i];
    i++;
    
    if(i === arrFromStr.length) {
      clearInterval(printStr);
      keyPosition++;
  
      deleting(str);
    }
  }, 200);
};


writing(keywords[keyPosition]);


/* Carrusel function */

const FeaturesCards = document.querySelector('.Features-cards');

let count = -1;
let beginCarrusel = () => {
  setInterval(() => {
    FeaturesCards.style.left =  `${count}px`;
    count--;
    
    if(count < -2000) { count = -1 };
  }, 50);
};

beginCarrusel();

/* On hover Card function */

const cards = document.querySelector('.Features-cards');

let active;

cards.addEventListener('mouseover', (event) => {
  if(event.target.tagName === "IMG") {
    active = event.target.nextElementSibling;
    active.id = 1;
    
    active.classList.remove('Card-description-hidden');
  }
  
  if(event.target.tagName === "UL") {
    active.classList.add('Card-description-hidden');
  }
});

cards.addEventListener('mouseout', (event) => {
  if(event.target.tagName === "UL") {
    active.classList.add('Card-description.hidden');
  }
})


/* Feedback function */
const opinions = document.querySelectorAll('.Opinion');

const timer = 4000;

let i = 0;

const max = opinions.length;

let setActiveItem = (x, distance) => {
  opinions.item(x).style.opacity = 1;
  opinions.item(x).style.left = distance;
}

setActiveItem(i, 0);
setActiveItem(i+1, '25%');
setActiveItem(i+2, '50%');
setActiveItem(i+3, '75%');

setInterval(() => {
  opinions.forEach((opinion, index) => {
    opinions.item(index).style.opacity = 0;
  });
  
  opinions.item(i).style.transitionDelay = '0.25s';
  opinions.item(i+1).style.transitionDelay = '0.5s';
  opinions.item(i+2).style.transitionDelay = '0.75s';
  opinions.item(i+3).style.transitionDelay = '1s';
  
  if(i < max-4) {
    i += 4;
  } else {
    i = 0;
  }
  
  opinions.item(i).style.transitionDelay = '1.25s';
  opinions.item(i+1).style.transitionDelay = '1.5s';
  opinions.item(i+2).style.transitionDelay = '1.75s';
  opinions.item(i+3).style.transitionDelay = '2s';
  
  setActiveItem(i, 0);
  setActiveItem(i+1, '25%');
  setActiveItem(i+2, '50%');
  setActiveItem(i+3, '75%');
  
}, timer);