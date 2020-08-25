import React from 'react';

function Ticket(props) {
    const printLabels = labels => {
        if(labels) {
            return labels.map((label, index) => <span key={index} className='label'>{label}</span>);
        } else {
            return '';
        }
    }

    return (
        <div className={props.className ? props.className : 'ticket'} id={props.id} style={props.style}>
            <button className="hideTicketButton" onClick={props.onClick}>hide</button>
            <div className='ticketTitle'>{props.title}</div>
            <div className='ticketContent'>{props.content}</div>
            <div className='ticketInfo'>
                <div className='ticketUserInfo'>
                    <span className='ticketUserEmail'>{props.userEmail}</span>
                    <span className='ticketCreationTime'>{props.creationTime}</span>
                </div>
                <div className='ticketLabels'>{printLabels(props.labels)}</div>
            </div>
            <br />
        </div>
    );
}

export default Ticket;