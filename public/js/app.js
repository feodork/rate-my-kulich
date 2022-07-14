const ratings = document.querySelectorAll(".rating-form")

ratings.forEach((form) => {
	form.querySelectorAll("input").forEach((star) => {
		star.addEventListener("click", () => {
			const formdata = new FormData(star.value)
			const params = new URLSearchParams(formdata)
			fetch(, { method: "put", body: formdata })
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