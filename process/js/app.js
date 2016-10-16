var React = require('react');
var ReactDom = require('react-dom');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      title: 'Appointments',
      show: true
    } // return
  }, // getInitialState

  render: function() {
    return (
      <div className="interface">
        <h1>{ this.state.show ? 'Student ' : null }
        { this.state.title }</h1>
        <ul>
          <li>Jane Doe 2:00 PM</li>
          <li>John Smith 3:00 PM</li>
        </ul>
      </div>
    ) // return
  } // render

}); // MainInterface

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render