// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;


var Projects = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div>
        <div className="row">
          <div className="infoContainer">
            <h1 className="fontName">Elton Hsu</h1>
            <a href="mailto:elthsu@gmail.com"><img id="gmailIcon" src="public/assets/img/gmail.png" /></a>
            <a href="https://www.linkedin.com/in/elthsu/" target="_blank"><img id="linkedinIcon" src="public/assets/img/linkedin.png" /></a>
            <a href="https://github.com/elthsu" target="_blank"><img id="githubIcon" src="public/assets/img/github.png" /></a>
            <br />
            <Link to="/Home"><button className="btn btn-info btn-lg btn-custom btn-left">Home</button></Link>
            <Link to="/AboutMe"><button className="btn btn-info btn-lg btn-custom">About Me</button></Link>
            <Link to="/Resume"><button className="btn btn-info btn-lg btn-custom">Résumé</button></Link>
          </div>
          <div className="projectsContainer">

            <h2>Public Transit Mapper</h2>
            <a href="http://eltonhsu.com/LA-Metro-Stations-Helper/" target="_blank"><img className="projectImg" id="proj1" src="https://media.giphy.com/media/xT9IguYybCWpDXb6BW/giphy.gif" /></a>
            <h3>A useful tool for any traveller or new transplant of a city. The app takes multiple APIs and provides information centered around LA's Metro Stations. Can be customized to any city.</h3>
            <hr />
            <h2>Swapr</h2>
            <a href="https://swapr-app.herokuapp.com/" target="_blank"><img className="projectImg" id="proj2" src="https://media.giphy.com/media/l1J9RmLUEsyzouIrm/giphy.gif" /></a>
            <h3>An app where users can connect with one another to swap items with no money involved. With a built-in real-time chat system, users can safely arrange to exchange items without sharing personal information.</h3>

          </div>
        </div>

        <div id="footerDiv">
          <h5>&copy;Elton Hsu</h5>
          <h5>Powered by <img id="reactImg" src="public/assets/img/react.png" />React.JS</h5>
        </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Projects;
