const input = document.getElementById("input");

function reverseString(str) {
    return str.split("").reverse().join(""); 
}

function check() {
    const value = input.value;
    const reverse = reverseString(value);

    if (value === reverse) {
        alert("It is a P A L A N D R O M E")
    }
    
    else {
        alert("Not a palandrome...")
    }
}

 