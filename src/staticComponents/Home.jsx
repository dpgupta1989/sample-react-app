import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import routes from "./routes";
import Header from "./Header";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/srp") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "";
  };
  
  componentDidMount() {
    
  }
  componentDidUpdate(e) {
    
  }
  render() {
    return (
      <div>
        <Header/>
        <div id="main-panel" className="main-panel" ref="mainPanel">
          <Switch>{this.getRoutes(routes)}</Switch>
        </div>
      </div>
    );
  }
}

export default Home;
