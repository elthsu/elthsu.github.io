// Include React
var React = require("react");

var Link = require("react-router").Link;

var AboutMe = React.createClass({

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
            <Link to="/Projects"><button className="btn btn-info btn-lg btn-custom">Projects</button></Link>
            <Link to="/Resume"><button className="btn btn-info btn-lg btn-custom">Résumé</button></Link>
          </div>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = AboutMe;
