var React = require('react');
var ReactDom = require('react-dom');
var _ = require('lodash');

var AppointmentList = require('./AppointmentList');
var AddAppointment = require('./AddAppointment');
var SearchAppointments = require('./SearchAppointments');

var MainInterface = React.createClass({

  getInitialState: function() {
    return {
      appointmentFormVisible: false,
      orderBy: 'studentName',
      orderDir: 'asc',
      queryText: '',
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

  addItem: function(tempItem) {
    var tempAppointments = this.state.myAppointments;
    tempAppointments.push(tempItem);
    this.setState({
      myAppointments: tempAppointments
    }); // setState
  }, // addItem

  reOrder: function(orderBy, orderDir) {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    }); // setState
  }, // reOrder

  searchAppointments: function(q) {
    this.setState({
      queryText: q
    }); // setState
  }, // searchAppointments

  render: function() {
    var filteredAppointments = [];
    var orderBy = this.state.orderBy;
    var orderDir = this.state.orderDir;
    var queryText = this.state.queryText;
    var myAppointments = this.state.myAppointments;

    myAppointments.forEach(function(item) {
      if (
        item.studentName.toLowerCase().indexOf(queryText) !== -1 ||
        item.courseName.toLowerCase().indexOf(queryText) !== -1 ||
        item.appointmentDate.toLowerCase().indexOf(queryText) !== -1 ||
        item.appointmentNotes.toLowerCase().indexOf(queryText) !== -1
      ) {
        filteredAppointments.push(item);
      }
    })

    filteredAppointments = _.orderBy(filteredAppointments, function(item) {
      return item[orderBy].toLowerCase();
    }, orderDir); // orderBy

    filteredAppointments = filteredAppointments.map(function(item, index) {
      return (
        <AppointmentList key = { index }
          singleItem = { item } 
          whichItem = { item }
          onDelete = { this.deleteAppointment }
        />
      ) // return
    }.bind(this)); //filteredAppointments

    return (
      <div className="interface">
        <AddAppointment 
          formVisible = { this.state.appointmentFormVisible }
          handleToggle = { this.toggleAppointmentForm }
          handleSubmission = { this.addItem }
        />
        <SearchAppointments 
          orderBy = { this.state.orderBy }
          orderDir = { this.state.orderDir }
          onReOrder = { this.reOrder }
          onSearch = { this.searchAppointments }
        />
        <ul className="item-list media-list">{ filteredAppointments }</ul>
      </div>
    ) // return
  } // render

}); // MainInterface

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render