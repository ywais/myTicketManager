const express = require('express');
const fs = require('fs').promises;

const filePath = './data.json';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/tickets', async (req, res) => {
  const tickets = await fs.readFile(filePath);
  const ticketsUnJSONed = JSON.parse(tickets);
  if (req.query.searchText) {
    const filteredTickets = ticketsUnJSONed.filter((ticket) => (ticket.title.toLowerCase().includes(req.query.searchText.toLowerCase())));
    res.send(filteredTickets);
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
      res.send({ updated: true });
    }
  });
  const ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
  await fs.writeFile(filePath, ticketsReJSONed);
});

app.post('/api/tickets/:ticketId/undone', async (req, res) => {
  const tickets = await fs.readFile(filePath);
  const ticketsUnJSONed = JSON.parse(tickets);
  ticketsUnJSONed.forEach((ticket, i) => {
    if (ticket.id === req.params.ticketId) {
      ticketsUnJSONed[i].done = false;
      res.send({ updated: true });
    }
  });
  const ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
  await fs.writeFile(filePath, ticketsReJSONed);
});

app.post('/api/tickets/create', async (req, res) => {
  const tickets = await fs.readFile(filePath);
  const ticketsUnJSONed = JSON.parse(tickets);
  ticketsUnJSONed.push(req.body);
  res.send({ created: true });
  const ticketsReJSONed = JSON.stringify(ticketsUnJSONed);
  await fs.writeFile(filePath, ticketsReJSONed);
});

module.exports = app;
