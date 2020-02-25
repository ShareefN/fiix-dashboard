import React from "react";
import { Typography, Paper } from "@material-ui/core";

function Widget2(props) {
  return (
    <Paper
      onClick={() => props.widget.click(props.widget.data.state)}
      className="w-full rounded-8 shadow-none border-1 cursor-pointer"
    >
      <div className="flex items-center justify-between pr-4 pl-16 pt-4">
        <Typography className="text-16">{props.widget.title}</Typography>
      </div>
      <div className="text-center pt-12 pb-28">
        <Typography
          className={`text-40 lg:text-54 md:text-40 break-words leading-none ${props.widget.textColor}`}
        >
          {props.widget.data.count}
        </Typography>
        <Typography className="text-16" color="textSecondary">
          {props.widget.data.label}
        </Typography>
      </div>
      <div className="flex items-center px-16 h-52 border-t-1">
        <Typography
          className="text-15 flex w-full justify-center"
          color="textSecondary"
        >
          <span className="truncate">{props.widget.data.extra.label}</span>
        </Typography>
      </div>
    </Paper>
  );
}

export default React.memo(Widget2);
