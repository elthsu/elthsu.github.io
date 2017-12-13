// Include the React library
var React = require("react");

// Include the react-router module
var router = require("react-router");


// Include the Route component for displaying individual routes
var Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
var Router = router.Router;

// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
var hashHistory = router.hashHistory;

// browserHistory makes for cleaner URLs but can only be used when running a server
var browserHistory = router.browserHistory;

// Include the IndexRoute (catch-all route)
var IndexRoute = router.IndexRoute;

// Reference the high-level components
var Main = require("../components/Main");
var Home = require("../components/Home");
var Resume = require("../components/Resume");
var AboutMe = require("../components/AboutMe");
var Projects = require("../components/Projects");




// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={broswerHistory}>
    <Route path="/" component={Main}>

      {/* User selection shows the appropriate component */}
      <Route path="Home" component={Home} />
      <Route path="Projects" component={Projects} />
      <Route path="AboutMe" component={AboutMe} />
      <Route path="Resume" component={Resume} />

      {/* If user selects any other path... we get the Home Route */}
      <IndexRoute component={Home} />

    </Route>

    <Route path="Projects" component={Projects}>
      <Route path="Home" component={Home} />
      <Route path="AboutMe" component={AboutMe} />
      <Route path="Resume" component={Resume} />
      <IndexRoute component={Projects} />
    </Route>

    <Route path="AboutMe" component={AboutMe}>
      <Route path="Home" component={Home} />
      <Route path="Projects" component={Projects} />
      <Route path="Resume" component={Resume} />
      <IndexRoute component={AboutMe} />
    </Route>


    <Route path="Resume" component={Resume}>
      <Route path="Home" component={Home} />
      <Route path="Projects" component={Projects} />
      <Route path="AboutMe" component={AboutMe} />
      <IndexRoute component={Resume} />
    </Route>


  </Router>

);
