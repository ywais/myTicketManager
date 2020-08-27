import React from 'react';

function Ticket(props) {
  const printLabels = (labels) => {
    if (labels) {
      return labels.map((label, index) => <span key={index} className="label">{label}</span>);
    }
    return '';
  };

  const printPriority = (priority) => {
    if (priority === 1) {
      return (
        <>
          <span className="priority low">●</span>
          {' '}
          Low
        </>
      );
    } if (priority === 2) {
      return (
        <>
          <span className="priority medium">●</span>
          {' '}
          Medium
        </>
      );
    }
    return (
      <>
        <span className="priority high">●</span>
        {' '}
        High
      </>
    );
  };

  const displayDate = (creationTime) => {
    const date = new Date(creationTime);
    const year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    if (month < 9) {
      month = `0${month + 1}`;
    } else if (month === 9) { month += 1; }
    if (day < 10) { day = `0${day}`; }
    if (hours < 10) { hours = `0${hours}`; }
    if (minutes < 10) { minutes = `0${minutes}`; }
    if (seconds < 10) { seconds = `0${seconds}`; }
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className={props.className ? props.className : 'ticket'} id={props.id}>
      <div className="buttons">
        <button className="doneTicketButton" onClick={props.onDoneClick}>done / undone</button>
        <button className="hideTicketButton" onClick={props.onHideClick}>hide</button>
      </div>
      <div className="ticketText" style={props.done ? { textDecoration: 'line-through' } : {}}>
        <h4 className="ticketTitle">{props.title}</h4>
        <p className="ticketContent">{props.content}</p>
        <div className="ticketInfo">
          <div className="ticketLeftInfo">
            <span className="ticketUserEmail">{props.userEmail}</span>
            <span className="ticketCreationTime">{displayDate(props.creationTime)}</span>
            <span className="ticketPriority">{printPriority(props.priority)}</span>
          </div>
          <div className="ticketLabels">{printLabels(props.labels)}</div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default Ticket;
