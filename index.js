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
const successAlert = document.getElementById("alertWindow");

let today = new Date();

let formattedToday = today.toISOString().split("T")[0];

startDate.value = formattedToday;
startDate.min = formattedToday;
endDate.min = startDate.value;

const dealWitIt = async (event) => {
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
    startVisit: startVisit.value,
    endVisit: endVisit.value,
    isPuppy: puppy.checked,
    isAdult: adult.checked,
    isSenior: senior.checked,
    transport: transport.checked,
    food: food.checked,
  };

  await axios
    .post("http://localhost:3000/reservation", reservationInfo)
    .then(() => {
      successAlert.classList.remove("d-none");
      setTimeout(() => {
        successAlert.classList.add("alertFadeOut");
        event.target.reset();
      }, 1000);
      setTimeout(() => {
        successAlert.classList.add("d-none");
        successAlert.classList.remove("alertFadeOut");
      }, 2000);
      event.target.reset();
    })
    .catch((err) => console.log(err));
};

const submitForm = submit.addEventListener("submit", dealWitIt);

const currentStartDate = startDate.addEventListener("change", (e) => {
  return (endDate.min = e.target.value);
});
