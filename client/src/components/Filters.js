import React/*, { useState }*/ from 'react';

function Filters(props) {
  // const [unchecked, setUnchecked] = useState([[],[]]);

  // const priorityClicked = async (id) => {
  //   const box = document.getElementById(id);
  //   const checked = await box.checked;
  //   console.log(checked);
  //   const uncheckedCopy = unchecked.slice();
  //   if(checked) {
  //     uncheckedCopy[0].concat(id);
  //   } else {
  //     uncheckedCopy[0].forEach((listedId, index) => {
  //       if(listedId === id) {
  //         uncheckedCopy[0].splice(index, index + 1);
  //       }
  //     });
  //   }
  //   setUnchecked(uncheckedCopy);
  // }

  // const labelClicked = (id) => {
  //   const box = document.getElementById(id);
  //   const uncheckedCopy = unchecked.slice();
  //   if(!box.checked) {
  //     uncheckedCopy[1].concat(id);
  //   } else {
  //     uncheckedCopy[1].forEach((listedId, index) => {
  //       if(listedId === id) {
  //         uncheckedCopy[1].splice(index, index + 1);
  //       }
  //     });
  //   }
  //   setUnchecked(uncheckedCopy);
  // }

  return (
    <section className="innerSidebar">
      <h3>Filters:</h3>
      <div className="filterGroup priorityFilter">
        <h5>Priorites</h5>
        <ul className="noStyle" /*onChange={() => props.onChange(unchecked)}*/>
          <li>
            <label htmlFor="low">
              <input id="low" type="checkbox" name="priorities" onChange={(event) => props.onChange(1, event.target.checked)} defaultChecked/>
              {' '}
              Low
            </label>
          </li>
          <li>
            <label htmlFor="medium">
              <input id="medium" type="checkbox" name="priorities" onChange={(event) => props.onChange(2, event.target.checked)} defaultChecked/>
              {' '}
              Medium
            </label>
          </li>
          <li>
            <label htmlFor="high">
              <input id="high" type="checkbox" name="priorities" onChange={(event) => props.onChange(3, event.target.checked)} defaultChecked/>
              {' '}
              High
            </label>
          </li>
        </ul>
      </div>
      <div className="filterGroup labelFilter">
        <h5>Lables</h5>
        <ul className="noStyle" /*onChange={() => props.onChange(unchecked)}*/>
          <li>
            <label htmlFor="api">
              <input id="api" type="checkbox" name="lables" onChange={(event) => props.onChange("Api", event.target.checked)} defaultChecked/>
              {' '}
              Api
            </label>
          </li>
          <li>
            <label htmlFor="collapse">
              <input id="collapse" type="checkbox" name="lables" onChange={(event) => props.onChange("Collapse", event.target.checked)} defaultChecked/>
              {' '}
              Collapse
            </label>
          </li>
          <li>
            <label htmlFor="corvid">
              <input id="corvid" type="checkbox" name="lables" onChange={(event) => props.onChange("Corvid", event.target.checked)} defaultChecked/>
              {' '}
              Corvid
            </label>
          </li>
          <li>
            <label htmlFor="expand">
              <input id="expand" type="checkbox" name="lables" onChange={(event) => props.onChange("Expand", event.target.checked)} defaultChecked/>
              {' '}
              Expand
            </label>
          </li>
          <li>
            <label htmlFor="guidelines">
              <input id="guidelines" type="checkbox" name="lables" onChange={(event) => props.onChange("Guidelines", event.target.checked)} defaultChecked/>
              {' '}
              Guidelines
            </label>
          </li>
          <li>
            <label htmlFor="login">
              <input id="login" type="checkbox" name="lables" onChange={(event) => props.onChange("Login", event.target.checked)} defaultChecked/>
              {' '}
              Login
            </label>
          </li>
          <li>
            <label htmlFor="problem">
              <input id="problem" type="checkbox" name="lables" onChange={(event) => props.onChange("Problem", event.target.checked)} defaultChecked/>
              {' '}
              Problem
            </label>
          </li>
          <li>
            <label htmlFor="tutorial">
              <input id="tutorial" type="checkbox" name="lables" onChange={(event) => props.onChange("Tutorial", event.target.checked)} defaultChecked/>
              {' '}
              Tutorial
            </label>
          </li>
          <li>
            <label htmlFor="view Count">
              <input id="viewCount" type="checkbox" name="lables" onChange={(event) => props.onChange("ViewCount", event.target.checked)} defaultChecked/>
              {' '}
              View Count
            </label>
          </li>
        </ul>
      </div>
      <div className="added" />
    </section>
  );
}

export default Filters;
