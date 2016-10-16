var React = require('react');

var AppointmentList = React.createClass({
  render: function() {
    return(
      <li className="appointment-item media">
        <div className="appointment-info media-body">
          <div className="appointment-head">
            <span className="student-name">{ this.props.singleItem.studentName }</span>
            <span className="appointment-date pull-right">{ this.props.singleItem.appointmentDate }</span>
          </div>
        </div>
        <div className="course-name">
          <span className="label-item">Course: </span>
          { this.props.singleItem.courseName }
        </div>
        <div className="appointment-notes">{ this.props.singleItem.appointmentNotes }</div>
      </li>
    ) // return
  } // render
}); // AppointmentList

module.exports = AppointmentList;