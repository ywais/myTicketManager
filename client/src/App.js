import React, {useEffect, useState} from 'react';
import axios from "axios";
import Board from './components/Board';
import './App.css';

function App() {
    //states
    const [tickets, setTickets] = useState([]); // tickets array to display
    const [ticketsWithHidden, setTicketsWithHidden] = useState([]); // tickets array with hidden tickets
    const [filtering, setFiltering] = useState('');
    const [hiddenCounter, setHiddenCounter] = useState(0);

    //get all and filter tickets data
    useEffect(() => {
        const getFilteredTickets = async () => {
            const { data } = await axios.get(`/api/tickets?searchText=${filtering}`);
            if(filtering === '') {
                if(ticketsWithHidden.length === 0) { // show all tickets from data
                    setTickets(data);
                } else { // show only non-hidden
                    setTickets(ticketsWithHidden);
                }
            } else {
                setTickets(data);
            }
        };
        getFilteredTickets();
    }, [filtering, ticketsWithHidden]);

    //hide button clicked
    const handleHideClick = (index) => {
        const ticketsCopy = ticketsWithHidden.length === 0 ? tickets.slice() : ticketsWithHidden.slice();
        ticketsCopy[index].className = 'hiddenTicket';
        ticketsCopy[index].style = {display: 'none'}; // TODO: move to css class
        setTicketsWithHidden(ticketsCopy);
        setHiddenCounter(hiddenCounter + 1);        
    }

    //restore button clicked
    const handleRestoreClick = () => {
        if(ticketsWithHidden.length > 0) {
            ticketsWithHidden.forEach(ticket => ticket.className = 'ticket')
            setHiddenCounter(0);
            setFiltering('');
            setTicketsWithHidden([]);
            document.querySelector('#searchInput').value = '';
        }
    }

    // app structure
    return (
        <main>
            <input id='searchInput' onChange={event => setFiltering(event.target.value)}></input>
            <div className='hideAndRestore'>
                <span id='hideTicketsCounter'>
                    {hiddenCounter > 0 ? hiddenCounter : ''}
                </span>
                <span id='hideTicketsText'>
                    {hiddenCounter > 0 ? ` hidden ticket${hiddenCounter > 1 ? 's ' : ' '}` : ''}
                </span>
                <button id="restoreHideTickets" onClick={handleRestoreClick}>restore</button>
            </div>
            <Board tickets={tickets} onClick={index => handleHideClick(index)}/>
        </main>
    );
}

export default App;
