import React, {useEffect, useState} from 'react';
import axios from "axios";
import Board from './components/Board';
import './App.css';

function App() {
    //states
    const [tickets, setTickets] = useState([]);
    const [originalTickets, setOriginalTickets] = useState([]);
    const [filtering, setFiltering] = useState('');
    const [hiddenCounter, setHiddenCounter] = useState(0);

    //filter tickets data
    useEffect(() => {
        const getFilteredTickets = async () => {
            const { data } = await axios.get(`/api/tickets?searchText=${filtering}`);
            setTickets(data);
        };
        getFilteredTickets();
    }, [filtering]);

    //hide button clicked
    const handleHideClick = (index) => {
        const ticketsCopy = tickets.slice();
        ticketsCopy.splice(index, 1);
        setHiddenCounter(hiddenCounter + 1);
        if(originalTickets.length === 0) {
            setOriginalTickets(tickets);
        }
        setTickets(ticketsCopy);
    }

    //restore button clicked
    const handleRestoreClick = () => {
        if(originalTickets.length > 0) {
            setHiddenCounter(0);
            setTickets(originalTickets);
            setOriginalTickets([]);
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
                    {hiddenCounter > 0 ? ` hidden ticket${hiddenCounter > 1 ? 's' : ''}` : ''}
                </span>
                <button id="restoreHideTickets" onClick={handleRestoreClick}>restore</button>
            </div>
            <Board tickets={tickets} onClick={index => handleHideClick(index)}/>
        </main>
    );
}

export default App;
