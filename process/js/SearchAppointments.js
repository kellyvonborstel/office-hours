var React = require('react');

var SearchAppointments = React.createClass({
  render: function() {
    return(
      <div className="row search-appointments">
        <div className="col-sm-offset-3 col-sm-6">
          <div className="input-group">
            <input id="SearchApts" placeholder="Search" type="text" className="form-control" aria-label="Search Appointments" />
            <div className="input-group-btn">
              <button type="button" className="btn btn-primary dropdown-toggle"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sort by: <span className="caret"></span>
              </button>
              <ul className="dropdown-menu dropdown-menu-right">
                <li><a href="#" id="studentName">Student</a></li>
                <li><a href="#" id="appointmentDate">Date</a></li>
                <li><a href="#" id="courseName">Course</a></li>
                <li role="separator" className="divider"></li>
                <li><a href="#" id="asc">Asc</a></li>
                <li><a href="#" id="desc">Desc</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ) // return
  } // render
}); // SearchAppointments

module.exports = SearchAppointments;
