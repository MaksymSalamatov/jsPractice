
let cover,
    titleOfCover,
    coverOfElementsNames,
    coverOfElementsUsersName,
    coverOfElementsId,
    coverOfElementsEmail,
    coverOfElementsPhone,
    coverOfElementsWeb;

cover = document.createElement('div');
cover.classList.add('cover');
document.body.append(cover);

function createElement(elem, title, elemParent) {
    elem = document.createElement('h2');
    elem.innerHTML = title;
    cover.append(elem);

    elemParent = document.createElement('div');
    elemParent.classList.add('coverOfElementsNames');
    cover.append(elemParent);

    return elemParent
}


let userNames = createElement(titleOfCover, 'Names of users', coverOfElementsNames);
let userUsernames = createElement(titleOfCover, 'Usernames', coverOfElementsUsersName);
let userId = createElement(titleOfCover, 'User ID', coverOfElementsId);
let userEmail= createElement(titleOfCover, 'User Email', coverOfElementsId);
let userPhone= createElement(titleOfCover, 'User Phone', coverOfElementsPhone);
let userWebsite= createElement(titleOfCover, 'User Website', coverOfElementsWeb);


function getFetch(url, parentNode, key) {
    fetch(url)
        .then(response => response.json())
        .then(data => data.forEach(item => {
            let element = document.createElement('div');
            element.classList.add('elements');
            element.innerHTML = item[key];
            parentNode.append(element);
        }))
}
getFetch('https://jsonplaceholder.typicode.com/users', userNames, 'name');
getFetch('https://jsonplaceholder.typicode.com/users', userUsernames, 'username');
getFetch('https://jsonplaceholder.typicode.com/users', userId, 'id');
getFetch('https://jsonplaceholder.typicode.com/users', userEmail, 'email');
getFetch('https://jsonplaceholder.typicode.com/users', userPhone, 'phone');
getFetch('https://jsonplaceholder.typicode.com/users', userWebsite, 'website');








