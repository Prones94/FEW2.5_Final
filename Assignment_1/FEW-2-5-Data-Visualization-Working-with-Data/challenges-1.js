let data = require('./titanic-passengers.json');
console.log('DATA FROM TITANIC')
console.log('==============================================')
// ================================================================

// Titanic Dataset challenges!

// Your goal is to write some functions that will extract
// relevant data from the dataset.

// Write your code here in this file.

// *************************************
// Test your code by running: `npm test`
// *************************************

// Each of the functions below expects to receive the Titanic data
// as the parameter data. Your goal is to extract the relevant
// piece of information from the data and return it.

// =================================================================

// 1 ---------------------------------------------------------------
// Return the total number of passengers.
// Return a number.
function getTotalPassengers(data) {
	console.log('PASSENGER COUNT',data.length)
	return data.length
}
getTotalPassengers(data)
// 2 ---------------------------------------------------------------
// Return the number of surviving passengers. A passenger survived
// if their survived property is "Yes".
// Return a number.

function getSurvivorCount(data) {
	const survived = data.filter(passenger => passenger.fields.survived === 'Yes')
	console.log('PASSENGERS THAT SURVIVED', survived.length)
	return survived.length
}
getSurvivorCount(data)

// 3 ---------------------------------------------------------------
// Return the number of passengers who did not survive. A passenger
// Return a number.

function getCasualityCount(data) {
	const casualty = data.filter(passenger => passenger.fields.survived === 'No');
	console.log('DECEASED COUNT', casualty.length)
	return casualty.length
}
getCasualityCount(data)

// 4 ---------------------------------------------------------------
// Return the number of passengers in any class. This function
// takes the data and the passenger class a string. Fins all of the
// passengers whose pclass matches and return the count.
// Return a number

function countPassengersInClass(data, pclass) {
	const certainClass = data.filter(passenger => passenger.fields.pclass === pclass);
	console.log('PASSENGERS IN THIS CLASS', certainClass.length)
	return certainClass.length
}
countPassengersInClass(data, 1)

// 5 ---------------------------------------------------------------
// Return the number of survivors in a class. This function takes
// the data and passenger class. Return only passengers

function getSurvivorCountForClass(data, pclass) {
	const survived = data.filter(passenger => passenger.fields.pclass === pclass).filter(person => person.fields.survived === "Yes")
	console.log('SURVIOR COUNT IN THIS CLASS', survived.length)
	return survived.length
}
getSurvivorCountForClass(data, 3)

// 6 ---------------------------------------------------------------
// Return the number of passengers who did not survive in a class.
// This function takes the data and the passenger class and returns
// the number of passengers who did not survive for that class.

function getCasualityCountForClass(data, pclass) {
	const deceased = data.filter(passenger => passenger.fields.pclass === pclass).filter(person => person.fields.survived === "No")
	console.log('DECEASED COUNT IN THIS CLASS', deceased.length)
	return deceased.length
}
getCasualityCountForClass(data, 3)

// 7 ---------------------------------------------------------------
// Return the age of the youngest passenger. You'll need to filter
// passenger data where the age is missing.

function getMinAge(data) {
	const ages = data.filter(passenger => passenger.fields.age != null).map(passenger => passenger.fields.age)
	const minAge = Math.min(...ages)
	console.log('MINIMUM AGE:', minAge)
	return minAge
}
getMinAge(data)

// 8 ---------------------------------------------------------------
// Return the age of the oldest passenger.

function getMaxAge(data) {
	const ageList = data.filter(passenger => passenger.fields.age != null).map(passenger => passenger.fields.age)
	const maxAge = Math.max(...ageList)
	console.log('MAXIMUM AGE:', maxAge)
	return maxAge
}
getMaxAge(data)

// 9 ---------------------------------------------------------------
// Return the number of passengers that embarked at a given stop.
// Each passenger has a embarked property with a value of: S, C,
// or Q.

function getEmbarkedCount(data, embarked) {
	const passengerInClass = data.filter(passenger => passenger.fields.embarked === embarked)
	console.log(`PASSENGERS IN ${embarked} CLASS: ${passengerInClass.length}`)
	return passengerInClass.length;
}
getEmbarkedCount(data, "S")
getEmbarkedCount(data, "C")
getEmbarkedCount(data, "Q")

// 10 ---------------------------------------------------------------
// Return the lowest fair paid by any passenger. The fare is missing
// for some passengers you'll need to filter this out!

function getMinFare(data) {
	const fareList = data.filter(passenger => passenger.fields.fare != null).map(passenger => passenger.fields.fare)
	const minFare = Math.min(...fareList)
	console.log(`MINIMUM FARE: $${minFare}`)
	return minFare
}
getMinFare(data)

// 11 ---------------------------------------------------------------
// Return the highest fare paid by any passenger. Some of the
// passengers are missing data for fare.

function getMaxFare(data) {
	const fareList = data.filter(passenger => passenger.fields.fare != null).map(passenger => passenger.fields.fare)
	const maxFare = Math.max(...fareList)
	console.log(`MAXIMUM FARE: $${maxFare.toFixed(2)}`)
	return maxFare
}
getMaxFare(data)

// 12 ---------------------------------------------------------------
// Return the count of passengers by gender.

function getPassengersByGender(data, gender) {
	const sexOfPassengerCount = data.filter(passenger => passenger.fields.sex === gender)
	console.log(`${gender.toUpperCase()} COUNT: ${sexOfPassengerCount.length}`)
	return sexOfPassengerCount.length
}
getPassengersByGender(data, "male")
getPassengersByGender(data, "female")

// 13 ---------------------------------------------------------------
// Return the number of passengers who survived by gender.

function getSurvivorsByGender(data, gender) {
	const passengerCount = data.filter(passenger => passenger.fields.survived === "Yes").filter(passenger => passenger.fields.sex === gender)
	console.log(`${gender.toUpperCase()} PASSENGERS THAT SURVIVED: ${passengerCount.length}`)
	return passengerCount.length
}
getSurvivorsByGender(data, "male")
getSurvivorsByGender(data, "female")


// 14 ---------------------------------------------------------------
// Return the number of passengers who did not survived by gender.

function getCasualitiesByGender(data, gender) {
	const passengerCount = data.filter(passenger => passenger.fields.survived === "No").filter(passenger => passenger.fields.sex === gender)
	console.log(`${gender.toUpperCase()} PASSENGERS THAT DIDN'T SURVIVE: ${passengerCount.length}`)
	return passengerCount.length
}
getCasualitiesByGender(data, "male")
getCasualitiesByGender(data, "female")
// ========================= SKIP ===================================
// // 15 ---------------------------------------------------------------
// // Return the number of passengers who survived by passenger class.

// function getSurvivorsByPClass(data, pclass) {
// 	return 0
// }

// // 16 ---------------------------------------------------------------
// // Return the number of passengers who survived by passenger class.

// function getCasualitiesByPClass(data, pclass) {
// 	return 0
// }

// // 17 ---------------------------------------------------------------
// // Write a function that returns an array of unique values for any
// // property in the data. For example If we needed to find number
// // of passenger classes from data this function should return:
// // [1,2,3]. If you wanted to find the number of embarkations the
// // function should return: ['S', 'C', 'Q']

// function getUniqueValues(data, property) {
// 	return 0
// }

// // 18 ---------------------------------------------------------------
// // Return all of the objects in the data where a given field is
// // not undefined. If a field is undefined it means that field is
// // missing from the data.

// function getAllOfField(data, field) {
// 	return 0
// }

// // 19 --------------------------------------------------------------
// Return the total of all fares paid.

// function getTotalFare(data) {
// 	const fields = data.map(passenger => passenger.fields)
// 	const totalFares = fields.reduce((acc, passenger) => acc + passenger.fare, 0)
// 	console.log(`TOTAL FARES: $${totalFares.toFixed(2)}`);
// 	return totalFares
// }
// getTotalFare(data)

// // 20 --------------------------------------------------------------
// Return the average fare paid.

// function getAverageFare(data) {
	// 	return 0
	// }

// 21 --------------------------------------------------------------
// Return the median fare. The median is the value equal distance
// from the minimum and maximum values.

// function getMedianFare(data) {
	// 	const fields = data.map(p => p.fields)
	// 	const allFares = fields.map(p => p.fare).sort((a,b) => a - b)
	// 	const medianFare = allFares[Math.ceil(allFares.length/2)]
	// 	console.log(`MEDIAN FARE: $${medianFare.toFixed(2)}`)
	// }
	// getMedianFare(data)
	// 22 --------------------------------------------------------------
	// Return the average age of all passengers.

	// ======================= SKIP END ================================

function getAverageAge(data) {
	const validAges = data.filter(p => p.fields.age !== undefined)
	const ageList = validAges.map(p => p.fields.age)
	const averageAge = (ageList.reduce((acc, p) => acc + p, 0))/ageList.length
	console.log(`AVERAGE AGE: ${Math.ceil(averageAge)}`)
	return averageAge
}
getAverageAge(data)

// 23 --------------------------------------------------------------
// Return the median age from passengers.

function getMedianAge(data) {
	const validAges = data.filter(p => p.fields.age !== undefined).map(p => p.fields.age).sort((a,b) => a - b)
	const medianAge = validAges[validAges.length /2]
	console.log(`MEDIAN AGE: ${medianAge}`)
	return medianAge
}
getMedianAge(data)

// 24 --------------------------------------------------------------
//

function getAverageAgeByGender(data, gender) {
	const validAgeAndGender = data.filter(p => p.fields.age !== undefined).filter(p => p.fields.sex == gender).map(p => p.fields.age)
	const totalAge = (validAgeAndGender.reduce((age, p) => age + p, 0))/validAgeAndGender.length
	console.log(`AVERAGE AGE FOR ${gender.toUpperCase()}: ${totalAge}`)
	return totalAge
}
getAverageAgeByGender(data, "male")
getAverageAgeByGender(data, "female")
// --------------------------------------------------------------
// --------------------------------------------------------------
module.exports.getTotalPassengers = getTotalPassengers
module.exports.getSurvivorCount = getSurvivorCount
module.exports.getCasualityCount = getCasualityCount
// module.exports.getUniqueValues = getUniqueValues
module.exports.countPassengersInClass = countPassengersInClass
module.exports.getSurvivorCountForClass = getSurvivorCountForClass
module.exports.getCasualityCountForClass = getCasualityCountForClass
module.exports.getMinAge = getMinAge
module.exports.getMaxAge = getMaxAge
module.exports.getEmbarkedCount = getEmbarkedCount
module.exports.getMaxFare = getMaxFare
module.exports.getMinFare = getMinFare
module.exports.getPassengersByGender = getPassengersByGender
module.exports.getSurvivorsByGender = getSurvivorsByGender
module.exports.getCasualitiesByGender = getCasualitiesByGender
// module.exports.getSurvivorsByPClass = getSurvivorsByPClass
// module.exports.getCasualitiesByPClass = getCasualitiesByPClass
// module.exports.getTotalFare = getTotalFare
// module.exports.getAverageFare = getAverageFare
// module.exports.getMedianFare = getMedianFare
module.exports.getAverageAge = getAverageAge
module.exports.getMedianAge = getMedianAge
module.exports.getAverageAgeByGender = getAverageAgeByGender