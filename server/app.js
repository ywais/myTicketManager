const express = require('express');
const fs = require('fs').promises;
// let filePath = process.env.NODE_ENV === 'test' ? './recordTest.json' : './record.json';
const filePath = './data.json';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static('../client/build'));

app.get('/api/tickets', async (req, res) => {
  const tickets = await fs.readFile(filePath);
  const ticketsUnJSONed = JSON.parse(tickets);
  if (req.query.searchText) {
    const filteredTickets = ticketsUnJSONed.filter((ticket) => (ticket.title.toLowerCase().includes(req.query.searchText.toLowerCase()) ? ticket : ''));
    res.send(filteredTickets);
    // res.send(req.query.searchText);
  } else {
    res.send(ticketsUnJSONed);
  }
});

app.post('/api/tickets/:ticketId/done', async (req, res) => {
  const tickets = await fs.readFile(filePath);
  const ticketsUnJSONed = JSON.parse(tickets);
  ticketsUnJSONed.forEach((ticket, i) => {
    if (ticket.id === req.params.ticketId) {
      ticketsUnJSONed[i].done = true;
      ticketsUnJSONed[i].updated = true;
    }
  });
  const ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
  await fs.writeFile(filePath, ticketsReJSONed);
  res.send({ updated: true });
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const tickets = await fs.readFile(filePath);
  const ticketsUnJSONed = JSON.parse(tickets);
  ticketsUnJSONed.forEach((ticket, i) => {
    if (ticket.id === req.params.ticketId) {
      ticketsUnJSONed[i].done = false;
      ticketsUnJSONed[i].updated = true;
    }
  });
  const ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
  await fs.writeFile(filePath, ticketsReJSONed);
  res.send({ updated: true });
});

module.exports = app;
