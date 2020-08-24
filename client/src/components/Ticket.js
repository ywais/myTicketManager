import React from 'react';

function Ticket(props) {
    const printLabels = labels => labels.forEach(label => <span className='label'>{label}</span>);

    return (
        <div className='ticket' id={props.ticket.id}>
            <div className='ticketTitle'>{props.ticket.title}</div>
            <div className='ticketContent'>{props.ticket.content}</div>
            <div className='ticketInfo'>
                <div className='ticketUserInfo'>
                    <span className='ticketUserEmail'>{props.ticket.userEmail}</span>
                    <span className='ticketCreationTime'>{props.ticket.creationTime}</span>
                </div>
                <div className='ticketLabels'>{printLabels(props.ticket.labels)}</div>
            </div>
        </div>
    );
}

export default Ticket;