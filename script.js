function getItems() {
  fetch("https://api.openbrewerydb.org/breweries", {
    method: "GET"
  })
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((users) => loadItems(users));
}
function loadItems(users) {
  const head = document.createElement("h2");
  head.innerText='BREWERIES LIST';
  head.className='head';
  const userItem = document.createElement("div");
  userItem.className = "user-item";
  users.forEach((user) => {
    const userContainer = document.createElement("div");
    userContainer.className = "user-container";

    userContainer.innerHTML = `
   
    <div>
      <p class="user-name"><b>Name:</b>${user.name}</p>
      <p class="id"><b>Id:</b>${user.id}</p>
      <p class="city"><b>City:</b>${user.city}</p>
      <p class="state"><b>State:</b>${user.state}</p>
      <p class="phone"><b>Phone:</b>${user.phone}</p>
      
      <p class="date" ><b>Date:</b>${new Date(user.created_at).toDateString()}</p>
      
    </div>
    `;

    userItem.append(userContainer);
  });

  document.body.append(head,userItem);
}


getItems();
