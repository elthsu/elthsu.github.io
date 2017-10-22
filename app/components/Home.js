// Include React
var React = require("react");
// Including the Link component from React Router to navigate within our application without full page reloads
var Link = require("react-router").Link;

// Create the Main component
var Home = React.createClass({

  // Here we render the component
  render: function() {

    return (
      <div className="indexBtmWrap">
        <div className="jumbotron">
    			<h2><strong>Welcome</strong></h2>
          <h1 id="fontName">Elton Hsu</h1>
          <a href="mailto:elthsu@gmail.com"><img id="gmailIcon" src="public/assets/img/gmail.png" /></a>
          <a href="https://www.linkedin.com/in/elthsu/" target="_blank"><img id="linkedinIcon" src="public/assets/img/linkedin.png" /></a>
          <a href="https://github.com/elthsu" target="_blank"><img id="githubIcon" src="public/assets/img/github.png" /></a>


    			<hr />
    			<p>
    				  <Link to="/Projects"><button className="btn btn-info btn-lg btn-custom btn-left">Projects</button></Link>
    				  <Link to="/AboutMe"><button className="btn btn-info btn-lg btn-custom">About Me</button></Link>
              <Link to="/Resume"><button className="btn btn-info btn-lg btn-custom">Résumé</button></Link>
    			</p>
        </div>
        <div id="indexFooterDiv">
          <h5>&copy;Elton Hsu</h5>
          <h5>Powered by <img id="reactImg" src="public/assets/img/react.png" />React.JS</h5>
        </div>
      </div>

    );
  }
});

// Export the component back for use in other files
module.exports = Home;
