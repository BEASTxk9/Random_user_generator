// async function getData() {
//     let collections = await fetch('https://randomuser.me/api?results=3');
//     let data = collections.json();
//     return data;
// }
// // Display
// async function displayData() {
//     let data = await getData();
//     data.results.forEach((user, index) => {
//         document.querySelector('.container').innerHTML +=`

//         <div class="container">
//         <div class="row d-flex">
//         <div class="col-4">

//             <div class="card text-center" id="${index}">
//                 <div class="card-header">
//                   <img src="${user['picture'].large}">
//                 </div>

                

//                 <div class="card-body">
//                   <p class="card-title text-muted" id="text">Hi, my name is</p>
//                   <h4 class="card-text" id="content">${user['name'].first} ${user['name'].last}</h4>
//                 </div>
//                 <div class="card-footer">
//                     <i class="bi bi-person" id="name" onmouseenter="mouseover('Hi, my name is','${user['name'].first} ${user['name'].last} ')"></i>
//                     <i class="bi bi-envelope" id="email" onmouseenter="mouseover('My email address is','${user['email']}')"></i>
//                     <i class="bi bi-calendar4-week" id="birth" onmouseenter="mouseover('My birthday is on','${user['dob'].date}')"></i>
//                     <i class="bi bi-map" id="address" onmouseenter="mouseover('My home address is','${user['location'].street.number} ${user['location'].street.name}')"></i>
//                     <i class="bi bi-telephone" id="contact" onmouseenter="mouseover('My phone number is','${user['phone']}')"></i>
//                     <i class="bi bi-lock" id="password" onmouseenter="mouseover('My password is','${user['login'].password}')"></i>
//                 </div>
//             </div>
//             </div>

//             <div class="col-4">

//             <div class="card text-center" id="${index}">
//                 <div class="card-header">
//                   <img src="${user['picture'].large}">
//                 </div>

                

//                 <div class="card-body">
//                   <p class="card-title text-muted" id="text">Hi, my name is</p>
//                   <h4 class="card-text" id="content">${user['name'].first} ${user['name'].last}</h4>
//                 </div>
//                 <div class="card-footer">
//                     <i class="bi bi-person" id="name" onmouseenter="mouseover('Hi, my name is','${user['name'].first} ${user['name'].last} ')"></i>
//                     <i class="bi bi-envelope" id="email" onmouseenter="mouseover('My email address is','${user['email']}')"></i>
//                     <i class="bi bi-calendar4-week" id="birth" onmouseenter="mouseover('My birthday is on','${user['dob'].date}')"></i>
//                     <i class="bi bi-map" id="address" onmouseenter="mouseover('My home address is','${user['location'].street.number} ${user['location'].street.name}')"></i>
//                     <i class="bi bi-telephone" id="contact" onmouseenter="mouseover('My phone number is','${user['phone']}')"></i>
//                     <i class="bi bi-lock" id="password" onmouseenter="mouseover('My password is','${user['login'].password}')"></i>
//                 </div>
//             </div>
//             </div>
//             <div class="col-4">

//             <div class="card text-center" id="${index}">
//                 <div class="card-header">
//                   <img src="${user['picture'].large}">
//                 </div>

                

//                 <div class="card-body">
//                   <p class="card-title text-muted" id="text">Hi, my name is</p>
//                   <h4 class="card-text" id="content">${user['name'].first} ${user['name'].last}</h4>
//                 </div>
//                 <div class="card-footer">
//                     <i class="bi bi-person" id="name" onmouseenter="mouseover('Hi, my name is','${user['name'].first} ${user['name'].last} ')"></i>
//                     <i class="bi bi-envelope" id="email" onmouseenter="mouseover('My email address is','${user['email']}')"></i>
//                     <i class="bi bi-calendar4-week" id="birth" onmouseenter="mouseover('My birthday is on','${user['dob'].date}')"></i>
//                     <i class="bi bi-map" id="address" onmouseenter="mouseover('My home address is','${user['location'].street.number} ${user['location'].street.name}')"></i>
//                     <i class="bi bi-telephone" id="contact" onmouseenter="mouseover('My phone number is','${user['phone']}')"></i>
//                     <i class="bi bi-lock" id="password" onmouseenter="mouseover('My password is','${user['login'].password}')"></i>
//                 </div>
//             </div>
//             </div>

//             </div>
//             </div>
//             `
//             });
// }
// function mouseover(text,content){
//     document.querySelector('#text').innerHTML = text;
//     document.querySelector('#content').innerHTML = content;
// }
// displayData();



async function getData() {
    let collections =
    await fetch('https://randomuser.me/api?results=3');
    let data = collections.json();
    return data;
}
// Display
async function displayData() {
    let data = await getData();
    data.results.forEach(item => {
        document.getElementById('name').innerHTML = (item);
        document.getElementById('email').innerHTML = (item);
        document.getElementById('bday').innerHTML = (item);
        document.getElementById('adress').innerHTML = (item);
        document.getElementById('phone_no').innerHTML = (item);
     
        document.getElementById('name').innerHTML =
            [`${item['name'].title} - ${item['name'].first} ${item['name'].last}`];

            document.getElementById('email').innerHTML =
            [`${item.email}`];

            document.getElementById('bday').innerHTML =
            [`${item['dob'].date}`];

            document.getElementById('adress').innerHTML =
            [`${item.location.street.name} number ${item.location.street.number}`];

            document.getElementById('phone_no').innerHTML =
            [`${item.phone}`];

            document.querySelector("#image").src = `${item["picture"].large}`;

    });

    
}

displayData();

async function displayData1() {
    let data = await getData();

    data.results.forEach(item => {
        document.getElementById('name1').innerHTML = (item);
        document.getElementById('email1').innerHTML = (item);
        document.getElementById('bday1').innerHTML = (item);
        document.getElementById('adress1').innerHTML = (item);
        document.getElementById('phone_no1').innerHTML = (item);

        document.getElementById('name1').innerHTML =
            [`${item['name'].title} - ${item['name'].first} ${item['name'].last}`];

            document.getElementById('email1').innerHTML =
            [`${item.email}`];

            document.getElementById('bday1').innerHTML =
            [`${item['dob'].date}`];

            document.getElementById('adress1').innerHTML =
            [`${item.location.street.name} number ${item.location.street.number}`];

            document.getElementById('phone_no1').innerHTML =
            [`${item.phone}`];

            document.querySelector("#image1").src = `${item["picture"].large}`;
            
    });
}



displayData1();


async function displayData2() {
    let data = await getData();
    data.results.forEach(item => {
        document.getElementById('name2').innerHTML = (item);
        document.getElementById('email2').innerHTML = (item);
        document.getElementById('bday2').innerHTML = (item);
        document.getElementById('adress2').innerHTML = (item);
        document.getElementById('phone_no2').innerHTML = (item);
     
        document.getElementById('name2').innerHTML =
            [`${item['name'].title} - ${item['name'].first} ${item['name'].last}`];

            document.getElementById('email2').innerHTML =
            [`${item.email}`];

            document.getElementById('bday2').innerHTML =
            [`${item['dob'].date}`];

            document.getElementById('adress2').innerHTML =
            [`${item.location.street.name} number ${item.location.street.number}`];

            document.getElementById('phone_no2').innerHTML =
            [`${item.phone}`];

            document.querySelector("#image2").src = `${item["picture"].large}`;
            
            
    });
}

displayData2();
