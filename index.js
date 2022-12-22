// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
    
}

function mondayWork(location = "go to the office") {
    return `This Monday, I will ${location}.`
}

function wrapAdjective(wrapper = "*"){
    return function(adjective = "special"){
        return `You are ${wrapper}${adjective}${wrapper}!`
    }
}
