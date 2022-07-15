// getting all forms
const ratings = document.querySelectorAll(".rating-form")

const addClickListeners = (form) => {
	// grabs form action
	const ratingURL = form.getAttribute("action")
	// get each star (input elements) from current form
	form.querySelectorAll("input").forEach((star) => {
		star.addEventListener("click", (event) => {
			// get the element that we clicked on and then finding the nearest ancestor (going upwards rather than downwards)
			const card = event.currentTarget.closest(".card")
			// accessing the value of star & sending the rating & getting back updated HTML
			fetch(ratingURL + "?rating=" + star.value)
				.then((response) => {
					return response.text()
				})
				.then((html) => {
					// taking refreshed HTML and replacing it on the page
					card.outerHTML = html
					addClickListeners(card.querySelector(".rating-form"))
				}) 
		})
	})
}

// iterating
ratings.forEach((form) => {
	addClickListeners(form)
})
