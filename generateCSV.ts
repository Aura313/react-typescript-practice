import * as fs from 'fs';
import { datatype, internet, name as _name, date } from 'faker';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

const numberOfUsers = 100;  // Change this to generate the number of users you want

const users = [];

for (let i = 0; i < numberOfUsers; i++) {
    const user = {
        id: datatype.uuid(),
        email: internet.email(),
        name: _name.findName(),
        password: internet.password(),
        createdAt: date.past().toISOString(),
        profileId: null  // You can adjust this if you have profile data to reference
    };
    users.push(user);
}

const csvWriter = createCsvWriter({
    path: 'users.csv',
    header: [
        {id: 'id', title: 'ID'},
        {id: 'email', title: 'EMAIL'},
        {id: 'name', title: 'NAME'},
        {id: 'password', title: 'PASSWORD'},
        {id: 'createdAt', title: 'CREATEDAT'},
        {id: 'profileId', title: 'PROFILEID'}
    ]
});

csvWriter.writeRecords(users)
    .then(() => {
        console.log('...Done writing users.csv');
    });
