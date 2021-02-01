import data from './titanic-data.js'

const portColor  = {
    S: 'tomato',
    C : 'cornflowerblue',
    Q: 'green',
    undefined: 'purple',
    total: 'yellow'
  }

const titanicEmbarked = document.querySelector('#titanic-embarked')


// Style the titanicEmbarked div
titanicEmbarked.style.display = 'flex'
titanicEmbarked.style.alignItems = 'flex-end'
titanicEmbarked.style.border = '1px solid'
titanicEmbarked.style.width = '200px'
titanicEmbarked.style.height = '300px'


const embarkedCounts = data.reduce((acc, p) => {
  if(acc[p.fields.embarked] === undefined) {
    acc[p.fields.embarked] = 1
  } else {
    acc[p.fields.embarked] += 1
  }
  return acc
}, {})

// embarkedCounts for total passengers
embarkedCounts.total = data.length

// created keys from embarkedCounts variable
const embarkedKeys = Object.keys(embarkedCounts)


embarkedKeys.forEach(key => {
  const div = document.createElement('div')
  titanicEmbarked.appendChild(div)
  div.style.width = '30px'
  const count = embarkedCounts[key]
  const percent = count / data.length * 100
  div.style.height = `${percent}%`
  div.style.backgroundColor = portColor[key]
  div.style.margin = '1px'
})


