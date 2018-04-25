import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import FetchData from './../Actions/FetchData';
import Coin from './Coin';
import Spinner from 'react-native-loading-spinner-overlay';

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
		if (crypto.isFetching) {
			return (
				<View>
					<Spinner
					visible={crypto.isFetching}
					textContent={"Loading..."}
					textStyle={{color: '#253145'}}
					animation:"fade"
					/>
				</View>	
			)
		}

		return (
			<ScrollView contentContainerStyle={contentContainer}>	
				{this.renderCoin()}
			</ScrollView>
		)
	}
}

function mapStateToProps(state) {
	return {
		crypto: state.crypto
	}
}

const styles = StyleSheet.create({
	contentContainer: {
		paddingBottom: 100,
		paddingTop: 55
	}
})

export default connect(mapStateToProps, {FetchData})(CryptoContainer)