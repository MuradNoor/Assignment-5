// function for scroll into buy tickets section
function scrollToTickets(){
    document.getElementById('ticket-booking').scrollIntoView({
        behavior: "smooth"
    });
}

// function for go to next page
function nextPage(){
    hideElementById('banner');
    hideElementById('offers');
    hideElementById('ticket-booking')
    hideElementById('footer')
    showElementById('success');
}

// function for return to homepage
function returnHome(){
    showElementById('banner');
    showElementById('offers');
    showElementById('ticket-booking');
    showElementById('footer')
    hideElementById('success');
}


const buttons = document.getElementsByClassName("seat");
let selectedCount = 0; 


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        if (selectedCount <= 3) {
            
            if (!this.classList.contains("bg-green-500")) {
                this.classList.remove("bg-gray-200");
                this.classList.add("bg-green-500", "text-white");
                selectedCount++; 
            }
        }
    });
}

// get selected seats
let maxSelect = 4;
let availableSeats = 40;
let selectCount = 0;
let totalPrice = 550;

// update available seat
function updateAvailableSeat(){
    document.getElementById('seat-left').textContent = availableSeats;
    document.getElementById('selectCount').textContent = selectCount;
    document.getElementById('bdt').textContent = selectCount * totalPrice;
}

let seats = document.getElementsByClassName('seat');
for(let i = 0; i < seats.length; i++){
    seats[i].addEventListener('click', function(){
        if(this.className.indexOf('selected') !== -1){
            this.className = this.className.replace('selected', '').trim();
            selectCount--;
            availableSeats++;
            totalPrice;
        }
        else{
            if(selectCount < maxSelect){
                this.className += 'selected';
                selectCount++;
                availableSeats--;
            }else{
                alert('You can only select upto 4 seats')
            }
        }
        updateAvailableSeat();
    });
}
updateAvailableSeat();

// next function enable

const nextButton = document.getElementById('next');
document.getElementById('input-num').addEventListener('keyup', function(event){
    const inputText = event.target.value;
    const numericValue = Number(inputText);
    if (!isNaN(numericValue)){
        nextButton.removeAttribute('disabled');
    }else{
        nextButton.setAttribute('disabled');
    }
})



