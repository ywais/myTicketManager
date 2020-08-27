import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './components/Board';
import Filters from './components/Filters';
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
      const spaces = new RegExp(/^(\s{1,})$/);
      if ((filtering === '' || filtering.match(spaces).length) > 0 && hiddenIds.length > 0) {
        data.forEach((ticket) => {
          hiddenIds.forEach((hiddenId) => {
            if (ticket.id === hiddenId) {
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
    setFiltering(`${filtering} `);
  };

  // hide button clicked
  const handleHideClick = (id) => {
    const ticketsCopy = tickets.slice();
    let isHidden = false;
    hiddenIds.forEach((hiddenId) => {
      if (hiddenId === id) {
        isHidden = true;
      }
    });
    if (!isHidden) {
      ticketsCopy.forEach((ticket) => {
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
    <div className="pageContainer">
      <header className="topBar">
        <h3>
          Tickets (
          {tickets.length}
          )
        </h3>
        <input id="searchInput" placeholder="Search Title..." onChange={(event) => setFiltering(event.target.value)} />
        <button className="createIicketButton">Create</button>
      </header>
      <main>
        <section className="centerContainer">
          <article className="board">
            <div className="hideAndRestore">
              <button id="restoreHideTickets" onClick={handleRestoreClick}>Restore Hidden Tickets</button>
              <span id="hideTicketsCounter">
                {hiddenIds.length > 0 ? hiddenIds.length : ''}
              </span>
              <span id="hideTicketsText">
                {hiddenIds.length > 0 ? ` hidden ticket${hiddenIds.length > 1 ? 's ' : ' '}` : ''}
              </span>
            </div>
            <Board
              tickets={tickets}
              onDoneClick={(id) => handleDoneClick(id)}
              onHideClick={(id) => handleHideClick(id)}
            />
          </article>
          <aside className="sideBar">
            {/* <h3>Filters:</h3>
            <div className='priorityFilter'></div>
            <div className='labelFilter'></div>
            <div className='added'></div> */}
            <Filters />
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
