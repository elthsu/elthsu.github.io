// Include React
var React = require("react");

var Link = require("react-router").Link;

var AboutMe = React.createClass({

  // Here we render the component
  render: function() {

    return (


      <div>
        <div className="row" id="rowsetting">
          <div className="infoContainer">
            <h1 className="fontName">Elton Hsu</h1>
            <div className="shortcutGroup">
            <a href="mailto:elthsu@gmail.com"><img id="gmailIcon" src="public/assets/img/gmail.png" /></a>
            <a href="https://www.linkedin.com/in/elthsu/" target="_blank"><img id="linkedinIcon" src="public/assets/img/linkedin.png" /></a>
            <a href="https://github.com/elthsu" target="_blank"><img id="githubIcon" src="public/assets/img/github.png" /></a>
            </div>
            <br />
            <Link to="/Home"><button className="btn btn-info btn-lg btn-custom btn-left">Home</button></Link>
            <Link to="/Projects"><button className="btn btn-info btn-lg btn-custom">Projects</button></Link>
            <Link to="/Resume"><button className="btn btn-info btn-lg btn-custom">Résumé</button></Link>
          </div>
          <div className="aboutMeContainer">
            <img className="iconGroup" id="html5Icon" src="public/assets/img/html5.png" />
            <img className="iconGroup" id="cssIcon" src="public/assets/img/css.png" />
            <img className="iconGroup" id="jsIcon" src="public/assets/img/javascript.png" />
            <img className="iconGroup" id="materializeIcon" src="public/assets/img/materialize.png" />
            <img className="iconGroup" id="bootstrapIcon" src="public/assets/img/bootstrap.png" />
            <img className="iconGroup" id="handlebarsIcon" src="public/assets/img/handlebars.png" />
            <img className="iconGroup" id="reactIcon" src="public/assets/img/reactjs.png" />
            <img className="iconGroup" id="ajaxIcon" src="public/assets/img/ajax.png" />
            <img className="iconGroup" id="firebaseIcon" src="public/assets/img/firebase.png" />
            <img className="iconGroup" id="mySqlIcon" src="public/assets/img/mysql.png" />
            <img className="iconGroup" id="nodeIcon" src="public/assets/img/node.png" />
            <img className="iconGroup" id="mongoIcon" src="public/assets/img/mongodb.png" />
            <img className="iconGroup" id="mongooseIcon" src="public/assets/img/mongoose.png" />
            <img className="iconGroup" id="expressIcon" src="public/assets/img/expressjs.png" />
            <img className="iconGroup" id="gitIcon" src="public/assets/img/git.png" />
          </div>
            <div className="aboutMeText">
              <h2> About Me </h2>
              <hr />
              <h3>A passionate, problem solving web developer who values the listening aspect of communication as much as conversing and loves design because of the opportunity to dissect items and reassemble for everyone's benefit. Excited to use my MERN skills to complete any tasks.</h3>
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
module.exports = AboutMe;
