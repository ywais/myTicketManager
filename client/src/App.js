import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './components/Board';
import './App.css';

function App() {
  // states
  const [tickets, setTickets] = useState([]);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [filtering, setFiltering] = useState('');

  // get all and filter tickets data
  useEffect(() => {
    const getFilteredTickets = async () => {
      const { data } = await axios.get(`/api/tickets?searchText=${filtering}`);
      if(filtering === '' && hiddenIds.length > 0) {
        data.forEach(ticket => {
            hiddenIds.forEach(hiddenId => {
                if(ticket.id === hiddenId) {
                    ticket.className = 'hiddenTicket';
                }
            });
        });
      }
        setTickets(data);
    };
    getFilteredTickets();
  }, [filtering]);

  // done button clicked
  const handleDoneClick = (id) => {
    const ticketsCopy = tickets.slice();
    ticketsCopy.forEach(async (ticket) => {
      if (ticket.id === id) {
        await axios.post(`/api/tickets/${id}/${ticket.done === true ? 'un' : ''}done`);
      }
    });
    setFiltering(filtering + ' ');
  };

  // hide button clicked
  const handleHideClick = (id) => {
    const ticketsCopy = tickets.slice();
    let isHidden = false;
    hiddenIds.forEach(hiddenId => {
        if(hiddenId === id) {
            isHidden = true;
        }
    });
    if(!isHidden) {
        ticketsCopy.forEach(ticket => {
        if (ticket.id === id) {
            ticket.className = 'hiddenTicket';
            setHiddenIds(hiddenIds.concat(id));
        }
        });
    }
  };

  // restore button clicked
  const handleRestoreClick = () => {
      tickets.forEach((ticket) => { ticket.className = 'ticket'; });
    //   setTickets([]);
      setHiddenIds([]);
    setFiltering('');
    document.querySelector('#searchInput').value = '';
  };

  // app structure
  return (
    <main>
      <input id="searchInput" onChange={(event) => setFiltering(event.target.value)} />
      <div className="hideAndRestore">
        <span id="hideTicketsCounter">
          {hiddenIds.length > 0 ? hiddenIds.length : ''}
        </span>
        <span id="hideTicketsText">
          {hiddenIds.length > 0 ? ` hidden ticket${hiddenIds.length > 1 ? 's ' : ' '}` : ''}
        </span>
        <button id="restoreHideTickets" onClick={handleRestoreClick}>Restore Hidden Tickets</button>
      </div>
      <Board
        tickets={tickets}
        onDoneClick={(id) => handleDoneClick(id)}
        onHideClick={(id) => handleHideClick(id)}
      />
    </main>
  );
}

export default App;
