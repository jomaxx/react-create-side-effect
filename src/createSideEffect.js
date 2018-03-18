import React from "react";

export default function createSideEffect(fn) {
  return class SideEffect extends React.Component {
    componentDidMount() {
      this.componentWillUnmount = fn(this.props);
    }

    shouldComponentUpdate() {
      return false;
    }

    render() {
      return null;
    }
  };
}
