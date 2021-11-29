document.body.innerHTML = `
<div class="heading">PUBLIC APIS</div>
<div class="container">
<button class="apione" onclick="apione()">1INCH</button>
<div class="apionecontainer"></div>
</div>
 `;
// <div class="heading">OPEN BREWERIES</div>
// <button onclick="addbrewery()">ADD BREWERY</button>
// <div class="addbrewery">
// <input class="add-brewery-name" placeholder ="enter brewery name"/>
// <input class="add-brewery-type" placeholder ="enter brewery type"/>
// <div/>
// <section class="brew-container"></section>

async function apione() {
    var oneinch = await fetch('https://api.1inch.exchange/v4.0/1/approve/spender');
    var data1 = await oneinch.json();
    console.log(data1.address);
    const apionecontainer = document.querySelector(".apionecontainer");
    apionecontainer.innerHTML = "";

    apionecontainer.innerHTML += `
    <div class="tokenname">Address of the 1inch router that must be trusted to spend funds for the exchange ${data1.address}</div>
    `;
    document.querySelector(".apionecontainer").style.display = "block";
    // const apionecontainer = document.querySelector(".apionecontainer");
    // // apionecontainer.innerHTML = "";

    // Array.prototype.forEach.call(data1, token => {
    //     apionecontainer.innerHTML += `
    //     <div class="tokenname">${token.address}</div>
    //     `;
    // });

}
//apione();
// async function getopenbrewery() {
//     const data = await fetch("https://api.openbrewerydb.org/breweries");
//     const brews = await data.json();
//     const brew_id = brews.forEach(v => {v.brewid = JSON.stringify(Math.floor(Math.random() * 100))});
//     const brewcontainer = document.querySelector(".brew-container");
//     brewcontainer.innerHTML = "";

//     Array.prototype.forEach.call(brews, brew => {
//         brewcontainer.innerHTML += `
//         <div class="brew">
//         <div class="brewname">${brew.name}</div>
//         <div class="show" id="show">
//         <div class="brewtype">Brewery type : ${brew.brewery_type}</div>
//         <div class="brewaddress"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
//         <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
//         <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
//       </svg> Address : ${brew.street} ,${brew.city} ,${brew.state} ,${brew.country} ,${brew.postal_code}</div>
//         <div class="brewurl"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe2" viewBox="0 0 16 16">
//         <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm7.5-6.923c-.67.204-1.335.82-1.887 1.855-.143.268-.276.56-.395.872.705.157 1.472.257 2.282.287V1.077zM4.249 3.539c.142-.384.304-.744.481-1.078a6.7 6.7 0 0 1 .597-.933A7.01 7.01 0 0 0 3.051 3.05c.362.184.763.349 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9.124 9.124 0 0 1-1.565-.667A6.964 6.964 0 0 0 1.018 7.5h2.49zm1.4-2.741a12.344 12.344 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332zM8.5 5.09V7.5h2.99a12.342 12.342 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.612 13.612 0 0 1 7.5 10.91V8.5H4.51zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741H8.5zm-3.282 3.696c.12.312.252.604.395.872.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a6.696 6.696 0 0 1-.598-.933 8.853 8.853 0 0 1-.481-1.079 8.38 8.38 0 0 0-1.198.49 7.01 7.01 0 0 0 2.276 1.522zm-1.383-2.964A13.36 13.36 0 0 1 3.508 8.5h-2.49a6.963 6.963 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667zm6.728 2.964a7.009 7.009 0 0 0 2.275-1.521 8.376 8.376 0 0 0-1.197-.49 8.853 8.853 0 0 1-.481 1.078 6.688 6.688 0 0 1-.597.933zM8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855.143-.268.276-.56.395-.872A12.63 12.63 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.963 6.963 0 0 0 14.982 8.5h-2.49a13.36 13.36 0 0 1-.437 3.008zM14.982 7.5a6.963 6.963 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008h2.49zM11.27 2.461c.177.334.339.694.482 1.078a8.368 8.368 0 0 0 1.196-.49 7.01 7.01 0 0 0-2.275-1.52c.218.283.418.597.597.932zm-.488 1.343a7.765 7.765 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z"/>
//       </svg> URL : ${brew.website_url}</div>
//         <div class="brewnumber"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
//         <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
//       </svg> Call_us :  ${brew.phone}</div>
//         <div class="brewid"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-badge" viewBox="0 0 16 16">
//         <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
//         <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z"/>
//       </svg> ID :  ${brew.brewid}</div>
//         <button onclick="deletebrew(${brew.brewid})">DELETE</button>
//         </div>
//         </div>
//         `;
//     });
//     console.log(brews);
// }
// getopenbrewery();


// function deletebrew(id) {
//   console.log("deleting",id);
//   alert(brews);
//   brews = brews.filter(function( obj ) {
//     return obj.id !== id;
//   });
//     getopenbrewery();
// }

// async function addbrewery() {
//     console.log("adding..");
//     const name = document.querySelector(".add-brewery-name").value;
//     const type = document.querySelector(".add-brewery-type").value;
//     console.log(name,type);
//     const data = await fetch("https://api.openbrewerydb.org/breweries",
//     {
//         method: "POST",
//         headers: { "Content-Type": "text/plain"},
//         body : JSON.stringify({name:name,brewery_type:type})}
//     );
//     getopenbrewery();
// }