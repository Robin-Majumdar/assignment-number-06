// Function to load all pet cards
const loadAllCards = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then((res) => res.json())
        .then((data) => displayAllCards(data.pets))
        .catch((error) => console.log(error));
};

// Function to display all pet cards
const displayAllCards = (pets) => {
    const petsContainer = document.getElementById("all-cards");
    const imageClickDisplay = document.getElementById("image-click-display");

    pets.forEach((pet, index) => {
        const card = document.createElement("div");
        card.classList = "card card-compact border p-4 rounded-xl";
        card.innerHTML = `
            <figure>
                <img src="${pet.image}" class="w-[300px] h-[200px] object-cover" alt="${pet.category}" />
            </figure>

            <div class="px-0 py-3">
                <div class="space-y-2">
                    <h1 class="text-2xl font-bold mb-4 text-[#131313]">${pet.pet_name}</h1>
                    <p class="flex items-center gap-2 text-base font-normal" style="color: rgba(19, 19, 19, 0.7)">
                        <span class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path d="M2 3.5A1.5 1.5 0 0 1 3.5 2h2A1.5 1.5 0 0 1 7 3.5v2A1.5 1.5 0 0 1 5.5 7h-2A1.5 1.5 0 0 1 2 5.5v-2ZM2 10.5A1.5 1.5 0 0 1 3.5 9h2A1.5 1.5 0 0 1 7 10.5v2A1.5 1.5 0 0 1 5.5 14h-2A1.5 1.5 0 0 1 2 12.5v-2ZM10.5 2A1.5 1.5 0 0 0 9 3.5v2A1.5 1.5 0 0 0 10.5 7h2A1.5 1.5 0 0 0 14 5.5v-2A1.5 1.5 0 0 0 12.5 2h-2ZM11.5 9a.75.75 0 0 1 .75.75v1h1a.75.75 0 0 1 0 1.5h-1v1a.75.75 0 0 1-1.5 0v-1h-1a.75.75 0 0 1 0-1.5h1v-1A.75.75 0 0 1 11.5 9Z" />
                            </svg>
                        </span>
                        <strong>Breed:</strong> ${pet.breed}
                    </p>
                    <p class="flex items-center gap-2 text-base font-normal" style="color: rgba(19, 19, 19, 0.7)">
                        <span class="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-4">
                                <path fill-rule="evenodd" d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <strong>Birth:</strong> ${pet.date_of_birth}
                    </p>
                    <p class="flex items-center gap-2 text-base font-normal" style="color: rgba(19, 19, 19, 0.7)">
                        <span class="flex items-center">
                            <i class="fa-solid fa-mercury"></i>
                        </span>
                        <strong>Gender:</strong> ${pet.gender}
                    </p>
                    <p class="flex items-center gap-2 text-base font-normal" style="color: rgba(19, 19, 19, 0.7)">
                        <span class="flex items-center">
                            <i class="fa-solid fa-dollar-sign"></i>
                        </span>
                        <strong>Price:</strong> ${pet.price}
                    </p>
                </div>
                
                <hr class="mt-4">

                <div id="img-show-${index}" class="flex justify-between mt-4">
                    <button class="py-2 px-6 border rounded-lg my-button">

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                    </svg>

                    </button>
                    <button class="text-xl font-medium py-2 px-4 border rounded-lg text-[#0E7A81]">Adopt</button>
                    <button class="text-xl font-medium py-2 px-4 border rounded-lg text-[#0E7A81]">Details</button>
                </div>
            </div>
        `;
        petsContainer.append(card);

        const imgShowButton = document.getElementById(`img-show-${index}`);
        imgShowButton.addEventListener('click', () => {
            imageClickDisplay.insertAdjacentHTML('beforeend', `<img src="${pet.image}" class="w-[140px] h-[100px] object-cover m-2 rounded-md"/> `);
        });

    });
};

loadAllCards();