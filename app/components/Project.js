// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;


var Project = React.createClass({

  // Here we render the component
  render: function() {

    return (


      <div>
        <div className="row">
          <div className="infoContainer">
            <h1 className="fontName">Elton Hsu</h1>
            <a href="mailto:elthsu@gmail.com"><img id="gmailIcon" src="assets/img/gmail.png" /></a>
            <a href="https://www.linkedin.com/in/elthsu/" target="_blank"><img id="linkedinIcon" src="assets/img/linkedin.png" /></a>
            <a href="https://github.com/elthsu" target="_blank"><img id="githubIcon" src="assets/img/github.png" /></a>
            <br />
            <button className="btn btn-info btn-lg btn-custom btn-left">See Projects</button>
            <button className="btn btn-info btn-lg btn-custom">About Me</button>
            <button className="btn btn-info btn-lg btn-custom">Download Resume</button>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Project;
