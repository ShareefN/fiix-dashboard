import React from 'react';
import { Typography, Paper } from '@material-ui/core';

function Widget2(props) {
	return (
		<Paper
			onClick={() => props.widget.click(props.widget.data.state)}
			className="w-full rounded-8 shadow-none border-1 cursor-pointer"
		>
			<div className={`flex items-center h-52 ${props.widget.textColor} text-white`}>
				<Typography className={`text-28 flex w-full justify-center`}>
					<span className="truncate" >{props.widget.data.extra.label}</span>
				</Typography>
			</div>
			<div className="text-center  pb-28 pt-24">
				<Typography
					className={`text-40 lg:text-54 md:text-40 break-words leading-none`}
				>
					{props.widget.data.count}
				</Typography>
			</div>
		</Paper>
	);
}

export default React.memo(Widget2);