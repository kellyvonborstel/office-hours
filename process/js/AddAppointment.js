var React = require('react');

var AddAppointment = React.createClass({

  toggleFormDisplay: function() {
    this.props.handleToggle();
  },
  
  render: function() {

    var displayForm = {
      display: this.props.formVisible ? 'block' : 'none'
    };

    return(
      <div className="panel panel-primary">

        <div className="panel-heading appointment-addheading" onClick={ this.toggleFormDisplay }>
          <span className="glyphicon glyphicon-plus"></span> Add Appointment
        </div>

        <div className="panel-body" style={ displayForm }>

          <form className="add-appointment form-horizontal">

            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="studentName">Student</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="studentName" ref="inputStudentName" placeholder="Student" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="courseName">Course</label>
              <div className="col-sm-10">
                <input type="text" className="form-control"
                  id="courseName" ref="inputCourseName" placeholder="Course" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="appointmentDate">Date</label>
              <div className="col-sm-4">
                <input type="date" className="form-control"
                  id="appointmentDate" ref="inputAppointmentDate" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="appointmentTime">Time</label>
              <div className="col-sm-4">
                <input type="time" className="form-control"
                  id="appointmentTime" ref="inputAppointmentTime" />
              </div>
            </div>

            <div className="form-group">
              <label className="col-sm-2 control-label" htmlFor="appointmentNotes">Notes</label>
              <div className="col-sm-10">
                <textarea className="form-control" rows="4" cols="50"
                  id="appointmentNotes" ref="inputAppointmentNotes" placeholder="Notes">
                </textarea>
              </div>
            </div>

            <div className="form-group">
              <div className="col-sm-offset-2 col-sm-10">
                <button type="submit" className="btn btn-primary pull-right">Add Appointment</button>
              </div>
            </div>

          </form>

        </div>
      </div>
    )
  }
});

module.exports = AddAppointment;
