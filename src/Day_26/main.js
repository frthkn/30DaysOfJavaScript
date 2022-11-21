// Day 26

// World Countries Data Visualization 2 



const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea North',
    'Korea South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
]



//get elements

const totalNumOfCountries = document.querySelector('h3')
const decriptionOfResult = document.querySelector('h4')
const container= document.querySelector('.container')
const input = document.querySelector('input')
const starting = document.querySelector('.starting')
const keywords = document.querySelector('.keyword')
const sortCountries = document.querySelector('#sort')


// add eventlistener

starting.addEventListener('click', start,false)
keywords.addEventListener('click', keyword, false)
sortCountries.addEventListener('click', sorting, false)
input.addEventListener('input', searchCountries)

// total number

totalNumOfCountries.textContent = 'Total Number of Countries ' + countries.length

// get countries data

container.style.display ='flex'
container.style.flexDirection ='row'
container.style.width ='100%'
container.style.margin ='auto'
container.style.padding ='0'
container.style.flexWrap ='wrap'
container.style.justifyContent ='flex-start'
container.style.gap ='20px'

for (let index = 0; index < countries.length; index++) {
    let box = document.createElement('div')
    box.style.display ='flex'
    box.style.justifyContent ='center'
    box.style.alignItems ='center'
    box.style.margin ='0'
    box.style.padding ='0'
    box.style.width ='200px'
    box.style.height ='130px'
    box.style.backgroundImage ='url(/src/Day_26/img/map_image.jpg)'
    box.style.backgroundSize ='100%'
    box.style.backgroundRepeat ='no-repeat'
    box.style.backgroundBlendMode ='difference'
    box.style.backgroundColor= 'rgb(186, 134, 235)';
    box.style.backgroundPosition='relative'
    box.style.border='solid green'
    box.style.color='white'
    box.style.fontWeight='bolder'
    box.textContent = countries[index].toUpperCase()
    container.appendChild(box)
    
}

// create span for h4

const spanLetter = document.createElement('span')
const spanNum = document.createElement('span')
const spanAre = document.createElement('span')

spanAre.textContent =' are '

spanLetter.setAttribute('class', 'letter')
spanNum.setAttribute('class','num')

//create function


function keyword(){
   keywords.setAttribute('class', 'keyword focus')
   starting.setAttribute('class', 'starting')
    sortCountries.id ='sort'
    container.textContent=''
    decriptionOfResult.textContent=''
    let val = input.value.toUpperCase()
    if(input.value ===''){
        decriptionOfResult.textContent=''
    }else{
        const key = countries.filter((e => e.toUpperCase().includes(val) ==1))
        spanLetter.textContent = input.value
        spanNum.textContent =key.length
        decriptionOfResult.textContent ='Countries containing '
        decriptionOfResult.appendChild(spanLetter)
        decriptionOfResult.appendChild(spanAre)
        decriptionOfResult.appendChild(spanNum)
        for (let index = 0; index < key.length; index++) {
            let box = document.createElement('div')
            box.style.display ='flex'
            box.style.justifyContent ='center'
            box.style.alignItems ='center'
            box.style.margin ='0'
            box.style.padding ='0'
            box.style.width ='200px'
            box.style.height ='130px'
            box.style.backgroundImage ='url(/src/Day_26/img/map_image.jpg)'
            box.style.backgroundSize ='100%'
            box.style.backgroundRepeat ='no-repeat'
            box.style.backgroundBlendMode ='difference'
            box.style.backgroundColor= 'rgb(186, 134, 235)';
            box.style.backgroundPosition='relative'
            box.style.border='solid green'
            box.style.color='white'
            box.style.fontWeight='bolder'
            box.textContent = key[index].toUpperCase()
            container.appendChild(box)
            
        }

    }
      
}


function searchCountries(){
    container.textContent=''
    decriptionOfResult.textContent=''
    let val = input.value.toUpperCase()
    if(input.value ===''){
        container.textContent=''
    }else{
        const searchVal = countries.filter((e => e.toUpperCase().includes(val) ==1))
        for (let index = 0; index < searchVal.length; index++) {
            let box = document.createElement('div')
            box.style.display ='flex'
            box.style.justifyContent ='center'
            box.style.alignItems ='center'
            box.style.margin ='0'
            box.style.padding ='0'
            box.style.width ='200px'
            box.style.height ='130px'
            box.style.backgroundImage ='url(/src/Day_26/img/map_image.jpg)'
            box.style.backgroundSize ='100%'
            box.style.backgroundRepeat ='no-repeat'
            box.style.backgroundBlendMode ='difference'
            box.style.backgroundColor= 'rgb(186, 134, 235)';
            box.style.backgroundPosition='relative'
            box.style.border='solid green'
            box.style.color='white'
            box.style.fontWeight='bolder'
            box.textContent = searchVal[index].toUpperCase()
            container.appendChild(box)
    
        }

    }

}

function start(){
    keywords.setAttribute('class', 'keyword')
    starting.setAttribute('class', 'starting focus')
    sortCountries.id ='sort'
    container.textContent=''
    decriptionOfResult.textContent=''
    let val = input.value.toUpperCase()
    if(input.value ===''){
        decriptionOfResult.textContent=''
    }else{
        const starts = countries.filter((e => e.toUpperCase().startsWith(val)==1))
        spanLetter.textContent = input.value
        spanNum.textContent =starts.length
        decriptionOfResult.textContent ='Countries start with '
        decriptionOfResult.appendChild(spanLetter)
        decriptionOfResult.appendChild(spanAre)
        decriptionOfResult.appendChild(spanNum)
        for (let index = 0; index < starts.length; index++) {
            let box = document.createElement('div')
            box.style.display ='flex'
            box.style.justifyContent ='center'
            box.style.alignItems ='center'
            box.style.margin ='0'
            box.style.padding ='0'
            box.style.width ='200px'
            box.style.height ='130px'
            box.style.backgroundImage ='url(/src/Day_26/img/map_image.jpg)'
            box.style.backgroundSize ='100%'
            box.style.backgroundRepeat ='no-repeat'
            box.style.backgroundBlendMode ='difference'
            box.style.backgroundColor= 'rgb(186, 134, 235)';
            box.style.backgroundPosition='relative'
            box.style.border='solid green'
            box.style.color='white'
            box.style.fontWeight='bolder'
            box.textContent = starts[index].toUpperCase()
            container.appendChild(box)
    
        }

    }


}


function sorting(){
    keywords.setAttribute('class', 'keyword')
    starting.setAttribute('class', 'starting')
    sortCountries.setAttribute("id","focus")
    container.textContent=''
   if(sortCountries.className =='fa fa-sort-alpha-asc'){
    sortCountries.className ='fa fa-sort-alpha-desc'
    const sortCountry = countries.sort((a,b)=> b.localeCompare(a))
    for (let index = 0; index < sortCountry.length; index++) {
        let box = document.createElement('div')
        box.style.display ='flex'
        box.style.justifyContent ='center'
        box.style.alignItems ='center'
        box.style.margin ='0'
        box.style.padding ='0'
        box.style.width ='200px'
        box.style.height ='130px'
        box.style.backgroundImage ='url(/src/Day_26/img/map_image.jpg)'
        box.style.backgroundSize ='100%'
        box.style.backgroundRepeat ='no-repeat'
        box.style.backgroundBlendMode ='difference'
        box.style.backgroundColor= 'rgb(186, 134, 235)';
        box.style.backgroundPosition='relative'
        box.style.border='solid green'
        box.style.color='white'
        box.style.fontWeight='bolder'
        box.textContent = sortCountry[index].toUpperCase()
        container.appendChild(box)

    }   
    
   }else if(sortCountries.className =='fa fa-sort-alpha-desc'){
    sortCountries.className ='fa fa-sort-alpha-asc'
    const sortCountry = countries.sort((a,b)=> a.localeCompare(b))
    for (let index = 0; index < sortCountry.length; index++) {
        let box = document.createElement('div')
        box.style.display ='flex'
        box.style.justifyContent ='center'
        box.style.alignItems ='center'
        box.style.margin ='0'
        box.style.padding ='0'
        box.style.width ='200px'
        box.style.height ='130px'
        box.style.backgroundImage ='url(/src/Day_26/img/map_image.jpg)'
        box.style.backgroundSize ='100%'
        box.style.backgroundRepeat ='no-repeat'
        box.style.backgroundBlendMode ='difference'
        box.style.backgroundColor= 'rgb(186, 134, 235)';
        box.style.backgroundPosition='relative'
        box.style.border='solid green'
        box.style.color='white'
        box.style.fontWeight='bolder'
        box.textContent = sortCountry[index].toUpperCase()
        container.appendChild(box)

    }  

   }
   

}


