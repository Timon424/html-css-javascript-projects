let cards = document.querySelectorAll(".card")

cards.forEach(clickedCard => {
    clickedCard.addEventListener("click", () => {
        cards.forEach(card => {
            card.classList.remove(`active`)
        })
        clickedCard.classList.add(`active`)
    })
})

