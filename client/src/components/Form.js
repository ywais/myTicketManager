import React from 'react';

function Form(props) {
  const onSubmitClick = () => {
    props.onClick({
      id: document.querySelector('#id').value,
      title: document.querySelector('#title').value,
      content: document.querySelector('#content').value,
      userEmail: document.querySelector('#userEmail').value,
      creationTime: Date.now(),
      labels: Array.from(document.querySelectorAll('#labels option:checked')).map((label) => label.value),
      priority: Number(document.querySelector('#priority option:checked').value),
    });
  };

  return (
    <form className="newTicket" style={{ display: props.showForm }}>
      <h4>Add a new ticket</h4>
      <label htmlFor="id">ID: </label>
      <input type="text" id="id" name="id" required />
      <br />
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" required />
      <br />
      <label htmlFor="content">Content: </label>
      <input type="text" id="content" name="content" required />
      <br />
      <label htmlFor="userEmail">Email: </label>
      <input type="text" id="userEmail" name="userEmail" required />
      <br />
      <label id="labelsLable" htmlFor="labels">Labels: </label>
      <select name="labels" id="labels" multiple>
        <option value="Api">Api</option>
        <option value="Collapse">Collapse</option>
        <option value="Corvid">Corvid</option>
        <option value="Expand">Expand</option>
        <option value="Guidelines">Guidelines</option>
        <option value="Login">Login</option>
        <option value="Problem">Problem</option>
        <option value="Tutorial">Tutorial</option>
        <option value="View Count">View Count</option>
      </select>
      <br />
      <label htmlFor="priority">Priority: </label>
      <select name="priority" id="priority" required>
        <option value="1">low</option>
        <option value="2">medium</option>
        <option value="3">high</option>
      </select>
      <br />
      <div className="formButtons">
        <button type="button" id="submit" onClick={onSubmitClick}>Submit</button>
        <button type="button" id="close" onClick={props.onCloseClick}>close</button>
      </div>
    </form>
  );
}

export default Form;
