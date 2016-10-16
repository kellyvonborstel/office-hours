var React = require('react');
var ReactDom = require('react-dom');
var _ = require('lodash');

var AppointmentList = require('./AppointmentList');
var AddAppointment = require('./AddAppointment');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      appointmentFormVisible: false,
      myAppointments: []
    } // return
  }, // getInitialState

  componentDidMount: function() {
    this.serverRequest = $.get('./js/data.json', function(result) {
      var tempAppointments = result;
      this.setState({
        myAppointments: tempAppointments
      }); // setState
    }.bind(this));
  }, // componentDidMount

  componentWillUnmount: function() {
    this.serverRequest.abort();
  }, // componentWillUnmount

  deleteAppointment: function(item) {
    var allAppointments = this.state.myAppointments;
    var newAppointments = _.without(allAppointments, item);
    this.setState({
      myAppointments: newAppointments
    }); // setState
  }, // deleteAppointment

  toggleAppointmentForm: function() {
    var tempVisibility = !this.state.appointmentFormVisible;
    this.setState({
      appointmentFormVisible: tempVisibility
    }); // setState
  }, // toggleAppointmentForm

  render: function() {
    var filteredAppointments = this.state.myAppointments;

    filteredAppointments = filteredAppointments.map(function(item, index) {
      return (
        <AppointmentList key = { index }
          singleItem = { item } 
          whichItem = { item }
          onDelete = { this.deleteAppointment } />
      ) // return
    }.bind(this)); //filteredAppointments

    return (
      <div className="interface">
        <AddAppointment 
          formVisible = { this.state.appointmentFormVisible }
          handleToggle = { this.toggleAppointmentForm } />
        <ul className="item-list media-list">{ filteredAppointments }</ul>
      </div>
    ) // return
  } // render

}); // MainInterface

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render