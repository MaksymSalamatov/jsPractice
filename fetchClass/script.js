class MockAPI {
    constructor(apiKey, resourceName) {
        this.apiKey = apiKey;
        this.resourceName = resourceName;
    }

    getAll() {
        return fetch(`https://${this.apiKey}.mockapi.io/${this.resourceName}`)
            .then(response => response.json());
    }

    get(itemId) {
        return fetch(`https://${this.apiKey}.mockapi.io/${this.resourceName}/${itemId}`)
            .then(response => response.json())
    }

    create(itemData) {
        const options = {
            method: 'POST',
            body: JSON.stringify(itemData),
            headers: {
                'Content-Type': 'application/json'
            },
        };

        return fetch(`https://${this.apiKey}.mockapi.io/${this.resourceName}`, options)
            .then(response => response.json())
    }

    update(itemData) {
        const options = {
            method: 'PUT',
            body: JSON.stringify(itemData),
            headers: {
                'Content-type': 'application/json'
            },
        };

        return fetch(`https://${this.apiKey}.mockapi.io/${this.resourceName}/${itemData.id}`, options)
            .then(response => response.json())
    }

    delete(itemId) {
        return fetch(`https://${this.apiKey}.mockapi.io/${this.resourceName}/${itemId}`, { method: 'DELETE' })
            .then(response => response.json())
    }
    
}



class UserAPI extends MockAPI {
    constructor(apiKey) {
        super(apiKey, 'users');
    }
}

class PostAPI extends MockAPI {
    constructor(apiKey) {
        super(apiKey, 'posts');
    }
}

const apiKey = '61db05874593510017aff79a';

const usersAPI = new UserAPI(apiKey);
const postsAPI = new PostAPI(apiKey);

const manualUser = {
    age: 27,
    name: 'Maksym',
    surname: 'Salamatov',
    city: 'Dnepr'
};


async function run() {
    const users = await usersAPI.getAll();
    console.log(users);

    const secondUser = await usersAPI.get(2);
    console.log('second user', secondUser);

    const newUser = await usersAPI.create(manualUser);
    console.log('new user', newUser);


    const users1 = await usersAPI.getAll();
    console.log(users1);
}

// run();


