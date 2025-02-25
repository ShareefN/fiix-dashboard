import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import React from 'react';

function PurchaseButton() {
	return (
		<Button
			component="a"
			href="https://1.envato.market/zDGL6"
			target="_blank"
			rel="noreferrer noopener"
			role="button"
			className="normal-case"
			variant="contained"
			color="secondary"
		>
			<Icon className="text-16">shopping_cart</Icon>
			<span className="mx-4">Purchase FUSE React</span>
		</Button>
	);
}

export default PurchaseButton;
