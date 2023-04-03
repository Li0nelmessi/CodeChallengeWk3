fetch('http://localhost:3000/films')
			.then(response => response.json())
			.then(data => {
				// Get the first 15 films
				const films = data.slice(0, 15);

				// Loop through each film and create a new div to display its details
				films.forEach(films => {
					const filmsDiv = document.createElement('div');
					filmsDiv.classList.add('films');

					// Add the movie poster
					const posterImg = document.createElement('img');
					posterImg.src = films.poster;
					posterImg.alt = films.title;
					filmsDiv.appendChild(posterImg);

					// Add the movie title
					const titleHeading = document.createElement('h2');
					titleHeading.textContent = films.title;
					filmsDiv.appendChild(titleHeading);

					// Add the movie runtime
					const runtimeParagraph = document.createElement('p');
					runtimeParagraph.textContent = `Runtime: ${films.runtime} minutes`;
					filmsDiv.appendChild(runtimeParagraph);

					// Add the movie showtime
					const showtimeParagraph = document.createElement('p');
					showtimeParagraph.textContent = `Showtime: ${films.showtime}`;
					filmsDiv.appendChild(showtimeParagraph);

					// Add the movie description
					const descriptionParagraph = document.createElement('p');
					descriptionParagraph.textContent = films.description;
					filmsDiv.appendChild(descriptionParagraph);

					// Add the movie capacity
					const capacityParagraph = document.createElement('p');
					capacityParagraph.textContent = `Capacity: ${films.capacity}`;
					filmsDiv.appendChild(capacityParagraph);

                    // Add the button to decrease tickets_sold
					const decreaseButton = document.createElement('button');
					decreaseButton.textContent = 'Buy Ticket';
					decreaseButton.addEventListener('click', () => {
						if (films.tickets_sold < films.capacity) {
							films.tickets_sold++;
							ticketsSoldParagraph.textContent = `Tickets sold: ${films.tickets_sold}`;
                            availableTicketsParagraph.textContent = `Available tickets: ${films.capacity - films.tickets_sold}`;
						}
					});
					filmsDiv.appendChild(decreaseButton);

					// Add the movie tickets sold
					const ticketsSoldParagraph = document.createElement('p');
					ticketsSoldParagraph.textContent = `Tickets sold: ${films.tickets_sold}`;
					filmsDiv.appendChild(ticketsSoldParagraph);

                    // Add the available tickets
					const availableTicketsParagraph = document.createElement('p');
					availableTicketsParagraph.textContent = `Available tickets: ${films.capacity - films.tickets_sold}`;
					filmsDiv.appendChild(availableTicketsParagraph);

					// Add the movie details to the movie list
					document.getElementById('description').appendChild(filmsDiv);
				});
			})
			.catch(error => console.error('Error fetching films:', error));