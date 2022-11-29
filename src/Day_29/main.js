function createSpan() {
   
    const text1 = '30 DAYS OF JAVASCRIPT CHANLLENGE 2022'
    const text2 ='HAKAN FIRAT'
    
    const p1 = document.querySelector('.p1')
    for (const key in text1) {
        let spanOne = document.createElement('span')
        spanOne.innerHTML = text1[key]
        spanOne.setAttribute('class','spanOne'+key)
        p1.appendChild(spanOne)
    }
    const p2 = document.querySelector('.p2')
    for (const p in text2) {
        let spanTwo = document.createElement('span')
        spanTwo.innerHTML = text2[p]
        spanTwo.setAttribute('class','spanTwo'+p)
        p2.appendChild(spanTwo)
    }

    
}
createSpan()

function colors(){
   
    const spanOne0 = document.querySelector('.spanOne0')
    const spanOne1 = document.querySelector('.spanOne1')
    const spanOne3 = document.querySelector('.spanOne3')
    const spanOne4 = document.querySelector('.spanOne4')
    const spanOne5 = document.querySelector('.spanOne5')
    const spanOne6 = document.querySelector('.spanOne6')
    const spanOne8 = document.querySelector('.spanOne8')
    const spanOne9 = document.querySelector('.spanOne9')
    const spanOne11 = document.querySelector('.spanOne11')
    const spanOne12 = document.querySelector('.spanOne12')
    const spanOne13 = document.querySelector('.spanOne13')
    const spanOne14 = document.querySelector('.spanOne14')
    const spanOne15 = document.querySelector('.spanOne15')
    const spanOne16 = document.querySelector('.spanOne16')
    const spanOne17 = document.querySelector('.spanOne17')
    const spanOne18 = document.querySelector('.spanOne18')
    const spanOne19 = document.querySelector('.spanOne19')
    const spanOne20 = document.querySelector('.spanOne20')
    const spanOne22 = document.querySelector('.spanOne22')
    const spanOne23 = document.querySelector('.spanOne23')
    const spanOne24 = document.querySelector('.spanOne24')
    const spanOne25 = document.querySelector('.spanOne25')
    const spanOne26 = document.querySelector('.spanOne26')
    const spanOne27 = document.querySelector('.spanOne27')
    const spanOne28 = document.querySelector('.spanOne28')
    const spanOne29 = document.querySelector('.spanOne29')
    const spanOne30 = document.querySelector('.spanOne30')
    const spanOne31 = document.querySelector('.spanOne31')
    const spanOne32 = document.querySelector('.spanOne32')
    const spanOne33 = document.querySelector('.spanOne33')
    const spanOne34 = document.querySelector('.spanOne34')
    const spanOne35 = document.querySelector('.spanOne35')
    const spanOne36 = document.querySelector('.spanOne36')
    
    const spanTwo0 = document.querySelector('.spanTwo0')
    const spanTwo1 = document.querySelector('.spanTwo1')
    const spanTwo2 = document.querySelector('.spanTwo2')
    const spanTwo3 = document.querySelector('.spanTwo3')
    const spanTwo4 = document.querySelector('.spanTwo4')
    const spanTwo5 = document.querySelector('.spanTwo5')
    const spanTwo6 = document.querySelector('.spanTwo6')
    const spanTwo7 = document.querySelector('.spanTwo7')
    const spanTwo8 = document.querySelector('.spanTwo8')
    const spanTwo9 = document.querySelector('.spanTwo9')
    const spanTwo10 = document.querySelector('.spanTwo10')
    
   
    spanOne0.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne1.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne3.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne4.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne5.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne6.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne8.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne9.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne11.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne12.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne13.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne14.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne15.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne16.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne17.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne18.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne19.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne20.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne22.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne23.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne24.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne25.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne26.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne27.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne28.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne29.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne30.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne31.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne32.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne33.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne34.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne35.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanOne36.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    
    
    spanTwo0.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo1.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo2.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo3.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo4.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo5.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo6.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo7.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo8.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo9.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    spanTwo10.style.color = '#'+(Math.random()*11).toString(16).slice(2,8)
    const div = document.querySelector('.wrapper').style.backgroundColor = '#'+(Math.random()*11).toString(16).slice(2,8)
    

}
colors()

setInterval(colors, 1000)
