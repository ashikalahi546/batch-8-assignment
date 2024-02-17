let num = 1;
let totalPrice = 0;
const cards = document.querySelectorAll(".card");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];

  card.addEventListener("click", function () {
    const tittle = card.querySelector("h2").innerText;
    const price = parseFloat(card.querySelector("p").innerText.split(" ")[1]);
    const tittleContainer = document.getElementById("tittle-container");
    const p = document.createElement("p");
    p.innerText = num + "." + tittle;
    num++;
    tittleContainer.appendChild(p);

    totalPrice += price;
    document.getElementById("total-price").innerText = totalPrice.toFixed(2);
  });
}

const btn = document.getElementById("apply-btn")
  .addEventListener("click", function () {
    const inputField = document.getElementById("input-field").value;

    const inputs = inputField.split(" ").join("").toUpperCase();
    console.log(inputs);

    if (totalPrice >= 200) {
      if (inputs === "SELL200") {
        const discounts = document.getElementById("discountPrice");
        const discountAmount = totalPrice * 0.2;
        console.log(discountAmount)
        discounts.innerText = discountAmount.toFixed(2);
      } else {
        alert("Invalid");
      }
    } else {
      alert("please at least $200");
    }
  });
