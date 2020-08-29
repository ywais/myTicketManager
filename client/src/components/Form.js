import React from 'react';

function Form(props) {
  return (
    <form className="newTicket" style={{ display: props.showForm }}>
      <label htmlFor="id">id:</label>
      <input type="text" id="id" name="id" required />
      <br />
      <label htmlFor="title">title:</label>
      <input type="text" id="title" name="title" required />
      <br />
      <label htmlFor="content">content:</label>
      <input type="text" id="content" name="content" required />
      <br />
      <label htmlFor="userEmail">email:</label>
      <input type="text" id="userEmail" name="userEmail" required />
      <br />
      <label htmlFor="creationTime">creation time:</label>
      <input type="text" id="creationTime" name="creationTime" readOnly required />
      <br />
      <label htmlFor="labels">labels:</label>
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
      <label htmlFor="priority">priority:</label>
      <select name="priority" id="priority" required>
        <option value="1">low</option>
        <option value="2">medium</option>
        <option value="3">high</option>
      </select>
      <br />
      <button type="button" id="submit" onClick={props.onSubmitClick}>Submit</button>
    </form>
  );
}

export default Form;