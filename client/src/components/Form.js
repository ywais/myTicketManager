import React from 'react';

function Form(props) {
  const now = new Date();

  const onSubmitClick = () => {
      props.onClick({
      id: document.querySelector('#id').value,
      title: document.querySelector('#title').value,
      content: document.querySelector('#content').value,
      userEmail: document.querySelector('#userEmail').value,
      creationTime: Date.now(),
      labels: Array.from(document.querySelectorAll('#labels option:checked')).map(label => label.value),
      priority: document.querySelector('#priority option:checked').value
    });
  }
    
  return (
    <form className="newTicket" style={{ display: props.showForm }}>
      <label htmlFor="id">ID:</label>
      <input type="text" id="id" name="id" required />
      <br />
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" required />
      <br />
      <label htmlFor="content">Content:</label>
      <input type="text" id="content" name="content" required />
      <br />
      <label htmlFor="userEmail">Email:</label>
      <input type="text" id="userEmail" name="userEmail" required />
      <br />
      <label htmlFor="labels">Labels:</label>
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
      <label htmlFor="priority">Priority:</label>
      <select name="priority" id="priority" required>
        <option value="1">low</option>
        <option value="2">medium</option>
        <option value="3">high</option>
      </select>
      <br />
      <button type="button" id="submit" onClick={onSubmitClick}>Submit</button>
    </form>
  );
}

export default Form;