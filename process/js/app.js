var React = require('react');
var ReactDom = require('react-dom');

var AppointmentList = require('./AppointmentList');

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

ReactDom.render(
  <MainInterface />,
  document.getElementById('studentAppointments')
); // render