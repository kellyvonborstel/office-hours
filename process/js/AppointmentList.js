var React = require('react');

var AppointmentList = React.createClass({

  handleDelete: function() {
    this.props.onDelete(this.props.whichItem)
  }, // handleDelete

  render: function() {
    return(
      <li className="appointment-item media">
        <div className="media-left">
          <button className="appointment-delete btn btn-xs btn-danger" onClick={ this.handleDelete }>
          <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
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