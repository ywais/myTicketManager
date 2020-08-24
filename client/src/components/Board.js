import React from 'react';
import Ticket from './Ticket';

function Board(props) {
    const addTicket = tickets => tickets.map((ticket, index) =>
            <Ticket
            key = {ticket.id}
            id = {ticket.id}
            title = {ticket.title}
            content = {ticket.content}
            userEmail = {ticket.userEmail}
            creationTime = {ticket.creationTime}
            labels = {ticket.labels}
            style = {ticket.style}
            onClick = {() => props.onClick(index)}
            />
    );

    return (
        <div className = 'ticketsContainer'>
            {addTicket(props.tickets)}
        </div>
    );
}

export default Board;