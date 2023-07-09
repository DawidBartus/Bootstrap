// Nav bar

const navBar = document.getElementById("navLinks");
const isActive = document.querySelectorAll(".isActive");

const changeActive = (e) => {
  isActive.forEach((item) => item.classList.remove("active"));

  e.target.classList.add("active");
};

navBar.addEventListener("click", changeActive);

// Reservation form

const startDate = document.getElementById("startVisit");
const endDate = document.getElementById("endVisit");
const submit = document.getElementById("reservationForm");

let today = new Date();

let formattedToday = today.toISOString().split("T")[0];

startDate.value = formattedToday;
startDate.min = formattedToday;
endDate.min = startDate.value;

const dealWitIt = (event) => {
  event.preventDefault();
  const {
    email,
    phone,
    name,
    breed,
    startVisit,
    endVisit,
    puppy,
    adult,
    senior,
    transport,
    food,
  } = event.target;

  const reservationInfo = {
    email: email.value,
    phone: phone.value,
    name: name.value,
    breed: breed.value,
    start: startVisit.value,
    end: endVisit.value,
    isPuppy: puppy.checked,
    isAdult: adult.checked,
    isSenior: senior.checked,
    transport: transport.checked,
    food: food.checked,
  };
  const jsonReservationInfo = JSON.stringify(reservationInfo);
  console.log(jsonReservationInfo);
};

const submitForm = submit.addEventListener("submit", dealWitIt);

const currentStartDate = startDate.addEventListener("change", (e) => {
  return (endDate.min = e.target.value);
});
