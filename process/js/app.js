var React = require('react');
var ReactDom = require('react-dom');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      myAppointmens: []
    } // return
  }, // getInitialState

  render: function() {
    var filteredAppointments = this.state.myAppointments;

    filteredAppointments = filteredAppointments.map(function(item, index) {
      return (
        <li className="appointment-item media" key={ index }>
          <div className="appointment-info media-body">
            <div className="appointment-head">
              <span className="student-name">{ this.state.myAppointments[index].studentName }</span>
              <span className="appointment-date pull-right">{ this.state.myAppointments[index].appointmentDate }</span>
            </div>
          </div>
          <div className="course-name">
            <span className="label-item">Course: </span>
            { this.state.myAppointments[index].courseName }
          </div>
          <div className="appointment-notes">{ this.state.myAppointments[index].appointmentNotes }</div>
        </li>
      ) // return
    }.bind(this)); //filteredAppointments

    return (
      <div className="interface">
          <ul className="item-list media-list">{ filteredAppointments }</ul>
      </div>
    ) // return
  } // render

}); // MainInterface

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render