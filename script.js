//Dice roller
function rolldice() {
    const diceImg = document.getElementById("dice");
    const randomNumber = Math.floor(Math.random() * (7 - 1)) + 1;
    if (randomNumber == 1) {
        diceImg.src = "./images/1.png";
    }
    else if (randomNumber == 2) {
        diceImg.src = "./images/2.png";
    }
    else if (randomNumber == 3) {
        diceImg.src = "./images/3.png";
    }
    else if (randomNumber == 4) {
        diceImg.src = "./images/4.png";
    }
    else if (randomNumber == 5) {
        diceImg.src = "./images/5.png";
    }
    else {
        diceImg.src = "./images/6.png";
    }

}
//Product quantity counter
function quantitychange(action) {
    const quantityElement = document.getElementById("quantity");
    let quantity = parseInt(quantityElement.innerText);

    if (action == 'inc' && quantity < 5) {
        quantity++;
    } else if (action == 'dec' && quantity > 1) {
        quantity--;
    } else {
        if (action == 'inc') {
            alert('Quantity can not be more than five');
        } else {
            alert('Quantity can not be less than one');
        }
        return;
    }

    quantityElement.innerText = quantity;
}