import { withFormsy } from 'formsy-react';
import React from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { FormHelperText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { orange } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
	productImageFeaturedStar: {
		position: 'absolute',
		top: 0,
		right: 0,
		color: orange[400],
		opacity: 0
	},
	productImageUpload: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut
	},
	productImageItem: {
		transitionProperty: 'box-shadow',
		transitionDuration: theme.transitions.duration.short,
		transitionTimingFunction: theme.transitions.easing.easeInOut,
		'&:hover': {
			'& $productImageFeaturedStar': {
				opacity: 0.8
			}
		},
		'&.featured': {
			pointerEvents: 'none',
			boxShadow: theme.shadows[3],
			'& $productImageFeaturedStar': {
				opacity: 1
			},
			'&:hover $productImageFeaturedStar': {
				opacity: 1
			}
		}
	}
}));
function ImageInput(props) {
	const classes = useStyles();
	function changeValue(event) {
		if (event.target.files.length) {
			props.setValue(event.target);
			props.onChange(event);
		}
	}
	const errorMessage = props.getErrorMessage();
	let face = !props.isValid() ? <FormHelperText className={'text-red-500'}>{errorMessage}</FormHelperText> : '';
	return (
		<div className={'flex flex-col items-center ' + props.className}>
			<input
				type="file"
				style={{ display: 'none' }}
				id={props.id || null}
				name={props.name}
				onChange={changeValue}
				label={props.label || null}
			/>
			{!props.image && !props.image != null && !props.image != '' ? (
				<label
					htmlFor={props.id}
					className={clsx(
						classes.productImageUpload,
						'flex items-center justify-center relative w-128 h-128 rounded-4 overflow-hidden cursor-pointer shadow-1 hover:shadow-5'
					)}
				>
					{props.defaultImgUrl ? (
						<img className="max-w-none w-auto" src={props.defaultImgUrl} alt={props.position} />
					) : (
						<Icon fontSize="large" color="action">
							cloud_upload
						</Icon>
					)}
				</label>
			) : (
				<label
					htmlFor={props.id}
					className={clsx(
						classes.productImageUpload,
						'flex items-center justify-center relative w-128 h-128 rounded-4 overflow-hidden cursor-pointer shadow-1 hover:shadow-5',
						1 && 'featured'
					)}
				>
					{<Icon className={classes.productImageFeaturedStar}>star</Icon>}
					<img className="max-w-none w-auto" src={props.image} alt={props.position} />
				</label>
			)}
			<Typography>{props.textName}</Typography>
			{face}
		</div>
	);
}

export default React.memo(withFormsy(ImageInput));
