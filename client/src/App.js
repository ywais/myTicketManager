import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Board from './components/Board';
import Filters from './components/Filters';
import './App.css';

function App() {
  // states
  const [tickets, setTickets] = useState([]);
  const [hiddenIds, setHiddenIds] = useState([]);
  const [searchParam, setSearchParam] = useState('');
  const [filtering, setFiltering] = useState([[], []]); //[priorities, labels]

  // get all and filter tickets data
  useEffect(() => {
    const getFilteredTickets = async () => {
      const { data } = await axios.get(`/api/tickets?searchText=${searchParam}`);
      const spaces = new RegExp(/^(\s{1,})$/);
      const length = searchParam === '' || searchParam.match(spaces) === null ? 0 : searchParam.match(spaces).length;
      if(filtering[0].length > 0 || filtering[1].length > 0) {
        data.forEach(ticket => {
          if(filtering[0].includes(ticket.priority)) {
            ticket.style = {display: "none"};
          } else {
            if(ticket.labels) {debugger;
              ticket.labels.forEach(label => {
                if(filtering[1].includes(label)) {
                  ticket.style = {display: "none"};debugger;
                }
              });
            }   
          }
        });
      }
      if ((searchParam === '' || length > 0) && hiddenIds.length > 0) {
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
    getFilteredTickets();debugger;
  }, [searchParam]);

  // done button clicked
  const handleDoneClick = (id) => {
    const ticketsCopy = tickets.slice();
    ticketsCopy.forEach(async (ticket) => {
      if (ticket.id === id) {
        await axios.post(`/api/tickets/${id}/${ticket.done === true ? 'un' : ''}done`);
      }
    });
    setSearchParam(`${searchParam} `);
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
    setSearchParam('');
    document.querySelector('#searchInput').value = '';
  };

  //check for checked boxes
  const onCheckboxClick = (boxId, isChecked) => {debugger;
    let filteringCopy = filtering.slice();
    if(isChecked) {
      if(typeof boxId === 'number') {
        filteringCopy[0].forEach((priority, index) => {
          if(priority === boxId) {
              filteringCopy[0].splice(index, index + 1);debugger;
          }
        });
      } else {
        filteringCopy[1].forEach((label, index) => {
          if(label === boxId) {
              filteringCopy[1].splice(index, index + 1);debugger;
          }
        });
      }
    } else {
      if(typeof boxId === 'number') {
        filteringCopy[0] = filteringCopy[0].concat(boxId);debugger;
      } else {
        filteringCopy[1] = filteringCopy[1].concat(boxId);
      }
    }
    setFiltering(filteringCopy);
    setSearchParam(`${searchParam} `);debugger;

    // const uncheckedCopy = unchecked.slice();
    // uncheckedCopy[0].forEach((priority, index) => {
    //   uncheckedCopy[0][index] = priority === 'low' ? 1 : priority === 'medium' ? 2 : 3;
    // })
    // setFiltering(uncheckedCopy);
    // setSearchParam(`${searchParam} `);
  }

  // app structure
  return (
    <div className="pageContainer">
      <header className="topBar">
        <h3>
          Tickets (
          {tickets.length}
          )
        </h3>
        <input id="searchInput" placeholder="Search Title..." onChange={(event) => setSearchParam(event.target.value)} />
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
            <Filters onChange={(boxId, isChecked) => onCheckboxClick(boxId, isChecked)}/>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
