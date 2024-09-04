const textarea= document.getElementById('textarea');
const totalCounterElement=document.getElementById('total-counter');
const remainingCounterElement=document.getElementById('remaining-counter');



textarea.addEventListener('keyup',()=>{
    updateCounter();
});

updateCounter()

function updateCounter(){
    totalCounterElement.innerText=textarea.value.length;
    remainingCounterElement.innerText=textarea.getAttribute('maxLength')-textarea.value.length;
}
