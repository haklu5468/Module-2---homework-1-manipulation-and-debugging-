/*Task 1a*/

function splitLines(text){
    return text.split ("\n").filter(line => line!=="");
}

/*Task 1b*/
function textToNumbers(list) {
    let result = [];
    for (let i = 0; i < list.length; i++) {
        let number = Number(list[i]);
        result.push(number);
    }

    return result;
}


/*Task 1c*/

