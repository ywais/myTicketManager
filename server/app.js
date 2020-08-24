const express = require('express');
const fs = require('fs').promises;
// let filePath = process.env.NODE_ENV === 'test' ? './recordTest.json' : './record.json';
let filePath = './data.json';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('../client/build'));

app.get('/api/tickets', async (req, res) => {
    let tickets = await fs.readFile(filePath);
    let ticketsUnJSONed = JSON.parse(tickets);
    if(req.query.searchText){
        const filteredTickets = ticketsUnJSONed.filter(ticket => ticket.title.toLowerCase().includes(req.query.searchText.toLowerCase()) ? ticket : '');
        res.send(filteredTickets);
        // res.send(req.query.searchText);
    } else {
        res.send(ticketsUnJSONed);
    }
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
    let tickets = await fs.readFile(filePath);
    let ticketsUnJSONed = JSON.parse(tickets);
    let index;
    ticketsUnJSONed.forEach((ticket, i) => {
        if(ticket.id === req.params.ticketId) {
            ticket.done = true;
            ticket.updated = true;
            index = i;
        }
    });
    let ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
    await fs.writeFile(filePath, ticketsReJSONed);
    res.send(ticketsUnJSONed[index]);
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
    let tickets = await fs.readFile(filePath);
    let ticketsUnJSONed = JSON.parse(tickets);
    let index;
    ticketsUnJSONed.forEach((ticket, i) => {
        if(ticket.id === req.params.ticketId) {
            ticket.done = false;
            ticket.updated = true;
            index = i;
        }
    });
    let ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
    await fs.writeFile(filePath, ticketsReJSONed);
    res.send(ticketsUnJSONed[index]);
});

module.exports = app;