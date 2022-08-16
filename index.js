// Code your solution here
function findMatching(array, str){
    let list = array.filter(driver => driver.toLowerCase() == str.toLowerCase());
    return list;
}

function fuzzyMatch(array, str){
    let list = array.filter(driver => driver.substring(0,2) == str);
    return list;
}

function matchName(array, str){
    let list = array.filter(driver => driver.name == str );
    return list;
}