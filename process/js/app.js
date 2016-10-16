var React = require('react');
var ReactDom = require('react-dom');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      data: [
        {
          "studentName": "Jane Doe",
          "courseName": "VC 237",
          "appointmentDate": "2016-12-10 15:30",
          "appointmentNotes": "Discuss exam grade and extra credit work"
        },
        {
          "studentName": "John Smith",
          "courseName": "VC 238",
          "appointmentDate": "2016-12-10 14:30",
          "appointmentNotes": "Go over forms assignment"
        },
        {
          "studentName": "Eric Jones",
          "courseName": "VC 237",
          "appointmentDate": "2016-12-12 15:30",
          "appointmentNotes": "Discuss project deadline extension"
        },
        {
          "studentName": "Emily Brown",
          "courseName": "VC 238",
          "appointmentDate": "2016-12-12 16:00",
          "appointmentNotes": "Review material from recent absence"
        }
      ]
    } // return
  }, // getInitialState

  render: function() {
    var filteredAppointments = this.state.data;

    filteredAppointments = filteredAppointments.map(function(item, index) {
      return (
        <li className="appointment-item media" key={ index }>
          <div className="appointment-info media-body">
            <div className="appointment-head">
              <span className="student-name">{ this.state.data[index].studentName }</span>
              <span className="appointment-date pull-right">{ this.state.data[index].appointmentDate }</span>
            </div>
          </div>
          <div className="course-name">
            <span className="label-item">Course: </span>
            { this.state.data[index].courseName }
          </div>
          <div className="appointment-notes">{ this.state.data[index].appointmentNotes }</div>
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