import React from 'react';
import { Text, View, Stylesheet, Image } from 'react-native';
import { images } from './../../extra/icons';

const Coin = ({symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => {
	return (
		<View style={container}>
			<Image style={styles.image} source={{ uri: images[symbol] }}
			/>
			<Text>{symbol}</Text>
			<Text>{coin_name}</Text>
			<Text>{price_usd} <Text style={bold}>$</Text></Text>
			<Text>Change past 24 hours: {percent_change_24h}</Text>
			<Text>Change past 7 days: {percent_change_7d}</Text>
		</View>	
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex'
	},
	image: {
		width: 40,
		height: 40,
	},
	bold: {
		fontWeight: 'bold'
	}
})

const { container, image, bold } = styles;
export default Coin;