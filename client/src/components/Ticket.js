import React from 'react';

function Ticket(props) {
    const printLabels = labels => labels.forEach(label => <span className='label'>{label}</span>);

    return (
        <div className='ticket' id={props.id}>
            <div className='ticketTitle'>{props.title}</div>
            <div className='ticketContent'>{props.content}</div>
            <div className='ticketInfo'>
                <div className='ticketUserInfo'>
                    <span className='ticketUserEmail'>{props.userEmail}</span>
                    <span className='ticketCreationTime'>{props.creationTime}</span>
                </div>
                <div className='ticketLabels'>{printLabels(props.labels)}</div>
            </div>
        </div>
    );
}

export default Ticket;