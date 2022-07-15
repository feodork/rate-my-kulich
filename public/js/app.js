// getting all forms
const ratings = document.querySelectorAll(".rating-form")

// iterating
ratings.forEach((form, i) => {
	const ratingURL = form.getAttribute("action")
	// get each star (input elements) from current form
	form.querySelectorAll("input").forEach((star) => {
		star.addEventListener("click", () => {
			// accessing the value of star
			const params = new URLSearchParams({ rating: star.value })
			fetch(ratingURL + "?" + params)
			.then((response) => {
				return response.text()
			})
			// have single kulich
			.then((html) => {
				const card = document.querySelectorAll(".card")[i]
				// the nearest ancestor (going upwards rather than downwards)
				card.outerHTML = "html"
			})
		})
	})
})







// if(ratings.length > 0) {
// 	for(let rating of ratings) {
// 		//listen for clicks on star. if clicked, send value. send request to input elements
// 		rating.addEventListener("submit", (event) => {
// 			event.preventDefault()
// 			const URL = rating.getAttribute("action")
			// const formdata = new FormData(rating)
			// const params = new URLSearchParams(formdata)
			// fetch(URL, { method: "put", body: formdata })
// 			console.log(params)
// 		})
// 	}
// }