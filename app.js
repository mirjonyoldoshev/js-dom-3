const result = document.querySelector("#result");
const head = document.querySelector("#head")


const arr = JSON.parse(localStorage.getItem("Users")) || [];

let users = [
{
      id: 1,
      name: "Leanne Graham",
      username: "maine",
      email: "Jasen@april.biz",
      address: {
         street: "islom karimov",
         suite: "dom[44]. 556",
         city: "Gwenborough",
         zipcode: "921212-7774",
         geo: {
            lat: "-37.77159",
            lng: "81.988996",
         },
      },
      phone: "1-7770-700-0001 x52323542",
      website: "hildegard.org",
      company: {
         name: "Romaguera-Crona",
         catchPhrase: "Multi-layered client-server neural-net",
         bs: "harness real-time e-markets",
      },
   },
   {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv",
      address: {
         street: "Victor Plains",
         suite: "Suite 879",
         city: "Wisokyburgh",
         zipcode: "90566-7771",
         geo: {
            lat: "-43.9509",
            lng: "-34.4618",
         },
      },
      phone: "010-692-6593 x09125",
      website: "anastasia.net",
      company: {
         name: "Deckow-Crist",
         catchPhrase: "Proactive didactic contingency",
         bs: "synergize scalable supply-chains",
      },
   },
   {
      id: 3,
      name: "Clementine Bauch",
      username: "Samantha",
      email: "Nathan@yesenia.net",
      address: {
         street: "Douglas Extension",
         suite: "Suite 847",
         city: "McKenziehaven",
         zipcode: "59590-4157",
         geo: {
            lat: "-68.6102",
            lng: "-47.0653",
         },
      },
      phone: "1-463-123-4447",
      website: "ramiro.info",
      company: {
         name: "Romaguera-Jacobson",
         catchPhrase: "Face to face bifurcated interface",
         bs: "e-enable strategic applications",
      },
   },
   {
      id: 4,
      name: "Patricia Lebsack",
      username: "Karianne",
      email: "Julianne.OConner@kory.org",
      address: {
         street: "Hoeger Mall",
         suite: "Apt. 692",
         city: "South Elvis",
         zipcode: "53919-4257",
         geo: {
            lat: "29.4572",
            lng: "-164.2990",
         },
      },
      phone: "493-170-9623 x156",
      website: "kale.biz",
      company: {
         name: "Robel-Corkery",
         catchPhrase: "Multi-tiered zero tolerance productivity",
         bs: "transition cutting-edge web services",
      },
   },
   {
      id: 5,
      name: "Chelsey Dietrich",
      username: "Kamren",
      email: "Lucio_Hettinger@annie.ca",
      address: {
         street: "Skiles Walks",
         suite: "Suite 351",
         city: "Roscoeview",
         zipcode: "33263",
         geo: {
            lat: "-31.8129",
            lng: "62.5342",
         },
      },
      phone: "(254)954-1289",
      website: "demarco.info",
      company: {
         name: "Keebler LLC",
         catchPhrase: "User-centric fault-tolerant solution",
         bs: "revolutionize end-to-end systems",
      },
   },
   
   
   
];

function generatorHead () {
     const th = document.createElement("tr")

     th.innerHTML = `
          <th>ID</th>
          <th>Name</th>
          <th>UserName</th>
          <th>Email</th>
          <th>Address Street</th>
          <th>Address Suite</th>
          <th>Address City</th>
          <th>Address ZipCode</th>
          <th>Address Geo Lat</th>
          <th>Address Geo Lng</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company Name</th>
          <th>Company CatchPhrase</th>
          <th>Company Bs</th>
          <th>Delete</th>
     `
     head.append(th)
}
generatorHead()
function generator() {
     while(result.firstChild) {
          result.removeChild(result.firstChild)
     }

   users.map(user => {

     const tr = document.createElement("tr");
      tr.innerHTML = `
          <td>${user.id}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.address.street}</td>
          <td>${user.address.suite}</td>
          <td>${user.address.city}</td>
          <td>${user.address.zipcode}</td>
          <td>${user.address.geo.lat}</td>
          <td>${user.address.geo.lng}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
          <td>${user.company.name}</td>
          <td>${user.company.catchPhrase}</td>
          <td>${user.company.bs}</td>
          `
          tr.innerHTML += `
          <td class="table-button">
              <button data-table-id="${user.id}" class="delete">Delete</button> 
          </td>
          `
          result.append(tr)

          localStorage.setItem("Users", JSON.stringify(users))
         }
);
}
result.addEventListener("click", (e) => {
     if(e.target.classList.contains("delete")) {
          let deleteId = e.target.dataset.tableId;
          
          let checkDelete = users.filter(item => item.id == deleteId)
          users.splice(checkDelete, 1)
          generator()
     }     
})
generator();