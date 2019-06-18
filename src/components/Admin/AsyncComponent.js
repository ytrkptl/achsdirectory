import React, { Component } from 'react';

//this is a higher order component, i.e. a component that returns another component
export default function asyncComponent(importComponent) {
	class AsyncComponent extends Component {
		_isMounted = false;

		constructor(props) {
			super(props);
			this.state = {
				component: null
			}
		}

		async componentDidMount() {
			this._isMounted = true;
			const { default: component } = await importComponent();
			if (this._isMounted){
				this.setState({component: component})
			}	
		}

		 componentWillUnmount() {
		    this._isMounted = false;
		  }

		render() {
			const Component = this.state.component;
			return Component? <Component {...this.props} /> : null
		}
	}
	return AsyncComponent;
}