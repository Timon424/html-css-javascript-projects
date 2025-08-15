let cards = document.querySelectorAll(".card")

cards.forEach(card => {
    card.addEventListener("click", clickedCard => {
        cards.forEach(card => {
            card.classList.remove(`active`)
        })
        card.classList.add(`active`)
    })
})

