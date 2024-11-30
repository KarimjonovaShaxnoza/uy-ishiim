
const __API = 'https://jsonplaceholder.typicode.com/users';
let row = document.querySelector(".row");

fetch(__API)
  .then((res) => res.json())
  .then((data) => {
    
const search = document.getElementById('search')

render(data)

search.addEventListener('input', e => {
  let inputValue = e.target.value.toLowerCase()

  const result = data.filter(item =>
    item.name.toLowerCase().includes(inputValue)
  )

  render(result)
})
  })
.catch(err => console.log(err))

function render(array) {
  row.innerHTML = "";

  array.map((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let Name = document.createElement("h1");
    Name.textContent = item.name;

    let Title = document.createElement("p");
    Title.textContent = `Username: ${item.username}`;

    let Email = document.createElement("p");
    Email.textContent = `Email: ${item.email}`;

    let Address = document.createElement("p");
    Address.textContent = `Address: ${item.address?.street || "N/A"}`;

    card.append(Name, Email, Title, Address);
    row.append(card);
  });
}


function darkMode() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";

  let one = document.querySelector(".one");
  one.style.background = "#C4B5A5";

  let two = document.querySelector(".two");
  two.style.background = "#FA9021";
}

function lightMode() {
  console.log("lightMode");
  let body = document.querySelector("body");
  body.style.background = "white";

  let one = document.querySelector(".one");
  one.style.background = "orange";

  let two = document.querySelector(".two");
  two.style.background = "black";
}

