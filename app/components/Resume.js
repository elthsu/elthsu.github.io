// Include React
var React = require("react");

var Link = require("react-router").Link;

var Resume = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="row">
        <div className="infoContainer">
          <h1 className="fontName">Elton Hsu</h1>
          <a href="mailto:elthsu@gmail.com"><img id="gmailIcon" src="public/assets/img/gmail.png" /></a>
          <a href="https://www.linkedin.com/in/elthsu/" target="_blank"><img id="linkedinIcon" src="public/assets/img/linkedin.png" /></a>
          <a href="https://github.com/elthsu" target="_blank"><img id="githubIcon" src="public/assets/img/github.png" /></a>
          <br />
          <Link to="/Home"><button className="btn btn-info btn-lg btn-custom">Home</button></Link>
          <Link to="/Projects"><button className="btn btn-info btn-lg btn-custom btn-left">Projects</button></Link>
          <Link to="/AboutMe"><button className="btn btn-info btn-lg btn-custom">About Me</button></Link>

        </div>
        <div id="resumeContainer">
            <embed id="resume" src="public/assets/doc/EltonHsuResume.pdf" width="460px" height="660px" />
        </div>
          <div id="resumeImg"><span className="glyphicon glyphicon-new-window white" aria-hidden="true"></span><h3 className="resumeText">View Resume</h3></div>
        <div id="resumeFooterDiv">
          <h5>&copy;Elton Hsu</h5>
          <h5>Powered by <img id="reactImg" src="public/assets/img/react.png" />React.JS</h5>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Resume;
