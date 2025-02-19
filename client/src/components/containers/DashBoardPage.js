import React, { Component } from "react";
import Auth from "../../modules/Auth";
import Dashboard from "../presentationals/Dashboard";
import { withRouter } from "react-router-dom";

class DashboardPage extends Component {
  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    this.state = {
      secretData: ""
    };
  }

  /**
   * This method will be executed after initial rendering.
   */
  componentDidMount() {
    const xhr = new XMLHttpRequest();
    xhr.open("get", "/admin/dashboard");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    // set the authorization HTTP header
    xhr.setRequestHeader("Authorization", `bearer ${Auth.getToken()}`);
    xhr.responseType = "json";
    xhr.addEventListener("load", () => {
      if (xhr.status === 200) {
        this.setState({
          secretData: xhr.response.message
        });
      }
    });
    xhr.send();
  }

  /**
   * Render the component.
   */
  render() {
    return <Dashboard secretData={this.state.secretData} />;
  }
}

export default withRouter(DashboardPage);
