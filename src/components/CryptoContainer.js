import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchData from './../Actions/FetchData';

class CryptoContainer extends Component {
	ComponentDidMount() {
		this.props.FetchData();
	}

	render() {
		return (
			<View>
				<Text> Container </Text>
			</View>
		)
	}
}

function mapStateToProps(state) {
	return {
		crypto: state.crypto
	}
}

export default connect(mapStateToProps, {FetchData})(CryptoContainer)