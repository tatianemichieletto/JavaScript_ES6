let user = {
    name: 'Tatiane'
};

// Changing the property of an object
user.name = 'Outro nome 1';
user ['name'] = 'Outro nome 2';

const prop = 'name';
user[prop] = 'Outro nome 3';

// Creating a property
user.lastname = 'Michieletto';

// Deleting a property
delete user.name;