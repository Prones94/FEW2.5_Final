console.log(data)

// Challenge 1
const name = "Ian Rones"
document.getElementById("title").innerHTML = "World Happiness Study"
document.getElementById("subtitle").innerHTML = `FEW 2.5 ${name}`

// Challenge 2
document.getElementById("info-year").innerHTML = "2019"
document.getElementById("info-name").innerHTML = "World Happiness Report"
document.getElementById("info-count").innerHTML = `${data.length}`

// Challenge 3
document.getElementById("gdp").addEventListener("click", function () { sortData('gdp'); });
document.getElementById("support").addEventListener("click", function () { sortData('support');})
document.getElementById("health").addEventListener("click", function () { sortData('health'); });
document.getElementById("gen").addEventListener("click", function () { sortData('generosity'); })
function sortData(category){
  let newData = data.sort((a, b) => {
    return b[category] - a[category]
  })
  displayTable(newData, category)
  // displayGraph(category)
}
function displayTable(data, mcategory) {
  document.getElementById('bycategory').innerHTML = "";

  const bycategory = document.querySelector('#bycategory')

  data.slice(0, 10).map(country => {
      let main = document.createElement('div')
      main.setAttribute("id", "country-data")

      let name = document.createElement('div')
      name.setAttribute("id", "name")

      let result = document.createElement('div')
      result.setAttribute("id", "result")

      let category = document.createElement('div')
      category.setAttribute("id", "category")

      name.innerHTML = country.country
      result.innerHTML = country.result
      category.innerHTML = country[mcategory]

      main.appendChild(name)
      main.appendChild(category)
      bycategory.appendChild(main)
  })

  let element = document.getElementById("bycategory");
  let para = document.createElement('span')

  let main = document.createElement('div')
  main.setAttribute("id", "country-data")

  let name = document.createElement('div')
  name.setAttribute("id", "name")

  let result = document.createElement('div')``
  result.setAttribute("id", "result")

  let category = document.createElement('div')
  category.setAttribute("id", "category")

  name.innerHTML = "Name"
  category.innerHTML = `${mcategory}`.toUpperCase()

  main.appendChild(name)
  main.appendChild(category)

  element.insertBefore(main, element.firstChild);

}

