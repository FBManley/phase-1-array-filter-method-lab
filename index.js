function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
       return driver.toLowerCase() === name.toLowerCase()
   })
}

function fuzzyMatch(drivers, que) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, que.length) === que.toLowerCase() 
    }) 
}

function matchName(drivers, no){
    return drivers.filter(function (driver) {
        return driver.name === no
    })
}