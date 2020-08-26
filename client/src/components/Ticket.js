import React from 'react';

function Ticket(props) {
    const printLabels = labels => {
        if(labels) {
            return labels.map((label, index) => <span key={index} className='label'>{label}</span>);
        } else {
            return '';
        }
    }

    const displayDate = (creationTime) => {
        let date = new Date(creationTime),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            hours = date.getHours(),
            minutes = date.getMinutes(),
            seconds = date.getSeconds();
        if(month < 9) {
            month = '0' + (month + 1);
        } else {
            if(month === 9) { month++ }
        }
        if(day < 10) { day = '0' + day; }
        if(hours < 10) { hours = '0' + hours; }
        if(minutes < 10) { minutes = '0' + minutes; }
        if(seconds < 10) { seconds = '0' + seconds; }
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    
    return (
        <div className={props.className ? props.className : 'ticket'} id={props.id} style={props.style}>
            <button className="hideTicketButton" onClick={props.onClick}>hide</button>
            <h4 className='ticketTitle'>{props.title}</h4>
            <p className='ticketContent'>{props.content}</p>
            <div className='ticketInfo'>
                <div className='ticketUserInfo'>
                    <span className='ticketUserEmail'>{props.userEmail}</span>
                    <span className='ticketCreationTime'>{displayDate(props.creationTime)}</span>
                </div>
                <div className='ticketLabels'>{printLabels(props.labels)}</div>
            </div>
            <br />
        </div>
    );
}

export default Ticket;