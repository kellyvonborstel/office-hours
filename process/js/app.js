var React = require('react');
var ReactDom = require('react-dom');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      myAppointments: []
    } // return
  }, // getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempAppointments = result;
      this.setState({
        myAppointments: tempAppointments
      }); // setState
    }.bind(this)); //tempAppointments
  }, // componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    var filteredAppointments = this.state.myAppointments;

    filteredAppointments = filteredAppointments.map(function(item, index) {
      return (
        <AppointmentList key = { index }
          singleItem = { item } />
      ) // return
    }.bind(this)); //filteredAppointments

    return (
      <div className="interface">
          <ul className="item-list media-list">{ filteredAppointments }</ul>
      </div>
    ) // return
  } // render

}); // MainInterface

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

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render