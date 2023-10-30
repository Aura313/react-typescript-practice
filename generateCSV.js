"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = require("faker");
var csv_writer_1 = require("csv-writer");
var numberOfUsers = 100; // Change this to generate the number of users you want
var users = [];
for (var i = 0; i < numberOfUsers; i++) {
    var user = {
        id: faker_1.datatype.uuid(),
        email: faker_1.internet.email(),
        name: faker_1.name.findName(),
        password: faker_1.internet.password(),
        createdAt: faker_1.date.past().toISOString(),
        profileId: null // You can adjust this if you have profile data to reference
    };
    users.push(user);
}
var csvWriter = (0, csv_writer_1.createObjectCsvWriter)({
    path: 'users.csv',
    header: [
        { id: 'id', title: 'ID' },
        { id: 'email', title: 'EMAIL' },
        { id: 'name', title: 'NAME' },
        { id: 'password', title: 'PASSWORD' },
        { id: 'createdAt', title: 'CREATEDAT' },
        { id: 'profileId', title: 'PROFILEID' }
    ]
});
csvWriter.writeRecords(users)
    .then(function () {
    console.log('...Done writing users.csv');
});
