import React, { Component, PropTypes } from "react";

import { Provider } from "react-redux";
import configureStore from "../store";

import Controller from "../utils/controller";

const store = configureStore();

export default class Spectacle extends Component {
  static propTypes = {
    children: PropTypes.node,
    theme: PropTypes.object,
    history: PropTypes.object
  };

  render() {
    return (
      <Provider store={store}>
        <Controller theme={this.props.theme} store={store} history={this.props.history}>
          {this.props.children}
        </Controller>
      </Provider>
    );
  }
}
