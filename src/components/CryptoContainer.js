import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import FetchData from './../Actions/FetchData';
import Coin from './Coin';

class CryptoContainer extends Component {
	
	ComponentDidMount() {
		this.props.FetchData();
	}

	renderCoin() {
		const { crypto } = this.props;
		console.log(crypto)

		return crypto.data.map((coin, index)) =>
			<Coin
				key={index}
				coin_name={coin_name}
				symbol={coin.symbol}
				price_usd={coin.price_usd}
				percent_change_24h={coin.percent_change_24h}
				percent_change_7d={coin.percent_change_7d}
			/>
		)	
	}

	render() {
		const { crypto } = this.props;
		return (
			<View>
				{this.renderCoin()}
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