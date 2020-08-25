import React, {useEffect, useState} from 'react';
import axios from "axios";
import Board from './components/Board';
import './App.css';

function App() {
    //states
    const [tickets, setTickets] = useState([]);
    const [originalTickets, setOriginalTickets] = useState([]);
    const [filtering, setFiltering] = useState('');

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
        if(originalTickets.length === 0) {
            setOriginalTickets(tickets);
        }
        setTickets(ticketsCopy);
    }

    // app structure
    return (
        <main>
            <input id='searchInput' onChange={event => setFiltering(event.target.value)}></input>
            <Board tickets={tickets} onClick={index => handleHideClick(index)}/>
        </main>
    );
}

export default App;
