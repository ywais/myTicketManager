import React, {useEffect, useState} from 'react';
import axios from "axios";
import Board from './components/Board';
import './App.css';

function App() {
    //states
    const [tickets, setTickets] = useState([]);

    //get tickets data
    useEffect(() => {
        const getTickets = async () => {
            const { data } = await axios.get('/api/tickets');
            setTickets(data);
        };
        getTickets();
    }, []);

    // app structure
    return (
        <main>
            <Board tickets={tickets}/>
        </main>
    );
}

export default App;
