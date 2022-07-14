const ratings = document.querySelectorAll(".rating-form")

if(ratings.length > 0) {
	for(let rating of ratings) {
		//listen for clicks on star. if clicked, send value. send request to input elements
		rating.addEventListener("submit", (event) => {
			event.preventDefault()
			const URL = rating.getAttribute("action")
			const formdata = new FormData(rating)
			const params = new URLSearchParams(formdata)
			fetch(URL, { method: "put", body: formdata })
			console.log(params)
		})
	}
}