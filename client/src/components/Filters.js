import React from 'react';

function Filters(props) {
  return (
    <section className="innerSidebar">
      <h3>Filters:</h3>
      <div className="filterGroup priorityFilter">
        <h5>Priorites</h5>
        <ul className="noStyle">
          <li>
            <label htmlFor="low">
              <input id="low" type="checkbox" name="priorities" />
              {' '}
              Low
            </label>
          </li>
          <li>
            <label htmlFor="medium">
              <input id="medium" type="checkbox" name="priorities" />
              {' '}
              Medium
            </label>
          </li>
          <li>
            <label htmlFor="high">
              <input id="high" type="checkbox" name="priorities" />
              {' '}
              High
            </label>
          </li>
        </ul>
      </div>
      <div className="filterGroup labelFilter">
        <h5>Lables</h5>
        <ul className="noStyle">
          <li>
            <label htmlFor="api">
              <input id="api" type="checkbox" name="lables" />
              {' '}
              Api
            </label>
          </li>
          <li>
            <label htmlFor="collapse">
              <input id="collapse" type="checkbox" name="lables" />
              {' '}
              Collapse
            </label>
          </li>
          <li>
            <label htmlFor="corvid">
              <input id="corvid" type="checkbox" name="lables" />
              {' '}
              Corvid
            </label>
          </li>
          <li>
            <label htmlFor="expand">
              <input id="expand" type="checkbox" name="lables" />
              {' '}
              Expand
            </label>
          </li>
          <li>
            <label htmlFor="guidelines">
              <input id="guidelines" type="checkbox" name="lables" />
              {' '}
              Guidelines
            </label>
          </li>
          <li>
            <label htmlFor="login">
              <input id="login" type="checkbox" name="lables" />
              {' '}
              Login
            </label>
          </li>
          <li>
            <label htmlFor="problem">
              <input id="problem" type="checkbox" name="lables" />
              {' '}
              Problem
            </label>
          </li>
          <li>
            <label htmlFor="tutorial">
              <input id="tutorial" type="checkbox" name="lables" />
              {' '}
              Tutorial
            </label>
          </li>
          <li>
            <label htmlFor="view Count">
              <input id="view Count" type="checkbox" name="lables" />
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
