import data from './titanic-data.js'

// Get a reference to the #titanic
const titanic = document.querySelector('#titanic')

// Set some styles on the titanic
// display flex, justifyContent center, alignItems flex-end
titanic.style.display = 'flex'
titanic.style.justifyContent = 'center'
titanic.style.alignItems = 'flex-end '
titanic.style.display = 'grid'
titanic.style.gridTemplateColumns = 'repeat(34, 15px)'
titanic.style.gridGap = '2px'

// Map over the data and make a new element for each passenger
const passengers = data.map(p => {
  return document.createElement('div')
})

// Sort the data
function sortEmbarked() {
  data.sort((a,b) => {
    if(a.fields.embarked < b.fields.embarked) {
      return -1
    } else if (a.fields.embarked > b.fields.embarked){
      return 1
    }
    return 0
  })
}

function sortAge(){
  data.sort((a, b) => {
    return a.fields.age - b.fields.age
  })
}

function sortGender() {
  data.sort((a) => {
    a.fields.sex === 'female' ? -1 : 1
  })
}

function sortSurvived() {
  data.sort((a,b) => {
    if (a.fields.survived === 'Yes') {
      return -1
    }
    return 1
  })

}

function sortFare(){
  data.sort((a,b) => {
    return a.fields.fare - b.fields.fare
  })
}

// Loop over each passenger and append them to the titanic
passengers.forEach(p => {
  titanic.appendChild(p)
})
function renderPassengers() {
  // Let's loop over each passenger and set some styles
  passengers.forEach((p, i) => {
    // Add class name of passenger
    p.classList.add('passenger')
    // add attribute to each passenger to access details <div class="passenger" data-id="0"></div>
    p.dataset.id = i
    // width
    p.style.width = '15px'
    p.style.height = '15px'
    // border-radius
    p.style.borderRadius = data[i].fields.sex === 'female' ? '50%' : ''
    p.style.opacity = data[i].fields.survived === 'Yes' ? '1' : '0.5'
    const portColor  = { S: 'tomato', C : 'cornflowerblue', Q: 'green', undefined: 'purple'}
    p.style.backgroundColor = portColor[data[i].fields.embarked]
  })
}
renderPassengers()

const passengerDetails = document.querySelector('#passenger-details')

// create the event listener when mouse hovers over passenger object
document.body.addEventListener('mouseover', (evt) => {
  if (evt.target.matches('.passenger')){
    const p_id = evt.target.dataset.id
    const {name, age, fare, pclass, survived} = data[p_id].fields
    passengerDetails.style.display = 'block'
    passengerDetails.style.position = 'absolute'
    passengerDetails.style.left = `${evt.pageX + 3}px`
    passengerDetails.style.top = `${evt.pageY + 3}px`
    passengerDetails.style.backgroundColor= '#fff'
    passengerDetails.style.border = '1px solid'
    passengerDetails.style.padding = '0.5em'
    passengerDetails.innerHTML = `
    <strong>${name}</strong>
    <ul>
      <li>Age: ${age}</li>
      <li>Class: ${pclass}</li>
      <li>Fare: $${fare}</li>
      <li>Survived: ${survived}</li>
    </ul>
    `
  }
})

document.body.addEventListener('mouseout', (evt) => {
  if (evt.target.matches('.passenger')) {
    passengerDetails.style.display = 'none'
  }
})

document.body.addEventListener('click', (e) => {
  if(e.target.matches('.age-sort')) {
    sortAge()
    renderPassengers()
  } else if (e.target.matches('.fare-sort')) {
    sortFare()
    renderPassengers()
  } else if (e.target.matches('.embarked-sort')) {
    sortEmbarked()
    renderPassengers()
  } else if (e.target.matches('.gender-sort')) {
    sortGender()
    renderPassengers()
  } else if (e.target.matches('survived-sort')) {
    sortSurvived()
    renderPassengers()
  }
  return 0
})