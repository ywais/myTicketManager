import React from 'react';
import Ticket from './Ticket';

function Board(props) {

    const addTicket = tickets => tickets.forEach(ticket =>
            <Ticket
            id = {ticket.id}
            title = {ticket.title}
            content = {ticket.content}
            userEmail = {ticket.userEmail}
            creationTime = {ticket.creationTime}
            labels = {ticket.labels}
            />
    );

    return (
        <div className = 'ticketsContainer'>
            {addTicket(props.tickets)}
        </div>
    );
}

export default Board;