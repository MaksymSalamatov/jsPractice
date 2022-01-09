let parentNode = document.createElement('div');
parentNode.classList.add('coverCard');
document.body.append(parentNode);

function getFetch(url) {
    fetch(url)
        .then(responce => responce.json())
        .then(data => data.forEach(item => {
            let element = document.createElement('div');
            element.classList.add('coverItems');
            element.innerHTML = item.name;
            parentNode.append(element);
        }))
}

getFetch('https://jsonplaceholder.typicode.com/users')