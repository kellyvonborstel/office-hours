var React = require('react');
var ReactDom = require('react-dom');

var MainInterface = React.createClass({
  render: function() {
    return (
      <h1>Student Appointments</h1>
    )
  } // render
}); // MainInterface

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render