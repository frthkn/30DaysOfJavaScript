// Day 28

// 30 Days Of JavaScript Challenge Leaderboard

const firstName = document.querySelector('.firstName')
const lastName = document.querySelector('.lastName')
const country = document.querySelector('.country')
const score = document.querySelector('.score')
const button = document.querySelector('button')
const playerDiv = document.querySelector('.players')
const warmMessageToUser = document.querySelector('.handleP>p')

const d = new Date()
let options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }


const date1 = document.querySelector('#date1')
const date2 = document.querySelector('#date2')
const date3 = document.querySelector('#date3')
const date4 = document.querySelector('#date4')
date1.innerHTML = new Intl.DateTimeFormat('en-US', options).format(d)
date2.innerHTML = new Intl.DateTimeFormat('en-US', options).format(d)
date3.innerHTML = new Intl.DateTimeFormat('en-US', options).format(d)
date4.innerHTML = new Intl.DateTimeFormat('en-US', options).format(d)



button.addEventListener('click', e => {

    e.preventDefault()

    if (firstName.value === '' && lastName.value === '' && country.value === '' && score.value === '') {
        warmMessageToUser.innerHTML = 'All fields are required'


    } else {
        warmMessageToUser.innerHTML = ''

        //create elements

        const table = document.querySelector('table')
        const tr = document.createElement('tr')
        const thName = document.createElement('td')
        const date = document.createElement('span')
        const thCountry = document.createElement('td')
        const thScore = document.createElement('td')
        const thBtns = document.createElement('td')
        const trash = document.createElement('button')
        const plus = document.createElement('button')
        const minus = document.createElement('button')

        // set attribute

        thName.setAttribute('id', 'name')
        date.setAttribute('class', 'date')
        thCountry.setAttribute('id', 'country')
        thScore.setAttribute('id', 'score')
        thBtns.setAttribute('id', 'btns')
        trash.setAttribute('class', 'fa fa-trash')
        trash.setAttribute("onclick", "this.parentElement.parentElement.style.display = 'none';")
        plus.setAttribute('class', 'fa fa-plus')
        plus.setAttribute('onclick', 'const thisNum= this.parentElement.parentElement.children[2].innerHTML; let lastNum =Number(thisNum)+Number(5); this.parentElement.parentElement.children[2].innerHTML=lastNum ')
        minus.setAttribute('class', 'fa fa-minus')
        minus.setAttribute('onclick', 'const thisNum= this.parentElement.parentElement.children[2].innerHTML; let lastNum =Number(thisNum)-Number(5); this.parentElement.parentElement.children[2].innerHTML=lastNum ')

        // set content

        thName.innerHTML = firstName.value + ' ' + lastName.value + '<br>'
        date.textContent = new Intl.DateTimeFormat('en-US', options).format(d)
        thCountry.textContent = country.value
        thScore.textContent = score.value
        plus.textContent = '5'
        minus.textContent = '5'

        trash.style.margin = '0 3px 0 0'
        minus.style.margin = '0 0 0 3px'
        plus.style.margin = '0 3px 0 3px'


        // add elements

        thName.appendChild(date)
        thBtns.appendChild(trash)
        thBtns.appendChild(plus)
        thBtns.appendChild(minus)
        tr.appendChild(thName)
        tr.appendChild(thCountry)
        tr.appendChild(thScore)
        tr.appendChild(thBtns)
        table.appendChild(tr)

    }



    firstName.value = ''
    lastName.value = ''
    country.value = ''
    score.value = ''


})




function sortTable() {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.querySelector("table");
    switching = true;
    while (switching) {
    
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;

        x = rows[i].getElementsByTagName("TD")[2];
        y = rows[i + 1].getElementsByTagName("TD")[2];
        if (Number(y.innerHTML) > Number(x.innerHTML)) {

          shouldSwitch = true;
          break;
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
      }
    }
  }


  setInterval(sortTable,100)
