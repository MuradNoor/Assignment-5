// function for hide elements
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

// function for show the element
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

// set background color
function addBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]');
}

// decrease seat number
function decreaseSeat(elementId){
    const element = document.getElementById(elementId);
    const updateValue = element.innerText;
    const value = parseInt(updateValue);
    return value;
}

// set the seat number 
function setSeatValue(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}



