
// Day 23

// Number Generator Exercise



const p = document.querySelector('p')
const input = document.querySelector('input')
const button = document.querySelector('#btn')
const div = document.querySelector('.wrapper')
const newDiv = document.createElement('div')

p.style.color = 'red'
p.style.fontSize='18px'


newDiv.style.display ='grid'
newDiv.style.gridTemplateColumns ='auto auto auto auto auto auto auto auto auto'
newDiv.style.gap ='10px'
newDiv.style.padding ='30px'
newDiv.style.margin = '30px'


const oldDiv = document.createElement('div')
oldDiv.style.display ='grid'
oldDiv.style.gridTemplateColumns ='auto auto auto auto auto auto auto auto auto'
oldDiv.style.gap ='10px'
oldDiv.style.padding ='30px'
oldDiv.style.margin = '30px'
div.appendChild(oldDiv)

for (let index = 0; index <= 50; index++) {
   let divOpt0 = document.createElement('div')
   divOpt0.style.textAlign ='center'
   divOpt0.style.lineHeight= '75px'
   divOpt0.style.fontSize= '30px'
   divOpt0.textContent =index 
   if(isPrime(index) !=true){
      if(index%2==0){
         divOpt0.style.backgroundColor ='green'
      }else if(index%2 !=0){
         divOpt0.style.backgroundColor ='yellow'
      }
   }else{
      divOpt0.style.backgroundColor ='red'
   }
   oldDiv.appendChild(divOpt0)
   
}

button.addEventListener('click', generateNumber)

function isPrime(n) {
   if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
   if (n % 2 == 0) return (n == 2);
   if (n % 3 == 0) return (n == 3);
   var m = Math.sqrt(n);
   for (var i = 5; i <= m; i += 6) {
       if (n % i == 0) return false;
       if (n % (i + 2) == 0) return false;
   }
   return true;
}


function generateNumber(){
   let value = input.value
   let divOpt

   if(!value){
      p.textContent ='Enter number value on the input field to generate numbers'
      input.value =''
   }else if(value.trim().match(/[A-z]/g)){
      p.textContent ='Input value must be number'
      input.value =''
   }else if(value.trim().match(/\d+/)){
      p.textContent =''
      newDiv.innerHTML =''
      input.value =''
      for (let index = 0; index <value; index++) {
         divOpt = document.createElement('div')
         divOpt.style.textAlign ='center'
         divOpt.style.lineHeight= '75px'
         divOpt.style.fontSize= '30px'
         divOpt.textContent =index 
         if(isPrime(index) !=true){
            if(index%2==0){
               divOpt.style.backgroundColor ='green'
            }else if(index%2 !=0){
               divOpt.style.backgroundColor ='yellow'
            }
         }else{
            divOpt.style.backgroundColor ='red'
         }
         newDiv.appendChild(divOpt)
         
      }
     
      div.replaceChild(newDiv, oldDiv)
   }

}
