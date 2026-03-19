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

function displayPairSums(numbers) {
    let html = "<ul>";

    for (let i = 0; i < numbers.length - 1; i++) {
        html += "<li>" + numbers[i] + " + " + numbers[i + 1] + " = " + (numbers[i] + numbers[i + 1]) + "</li>";
    }

    html += "</ul>";
    document.body.innerHTML += html;
}

const text = "3\n7\n2\n9\n4";
const lines = splitLines(text);
const numbers = textToNumbers(lines);
displayPairSums(numbers);
