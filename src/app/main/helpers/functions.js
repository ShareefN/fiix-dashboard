import React from "react";
import clsx from "clsx";
import _ from "@lodash";
import { constants } from "./strings";

const statusColor = [
  {
    id: 1,
    name: "pendingAssesment",
    color: "bg-blue-600 text-white"
  },
  {
    id: 2,
    name: "pendingIndication",
    color: "bg-yellow-600 text-white"
  },
  {
    id: 3,
    name: "insufficientPhotos",
    color: "bg-blue-400 text-white"
  },
  {
    id: 4,
    name: "notIndicated",
    color: "bg-gray-400 text-white"
  },
  {
    id: 5,
    name: "pendingAppointment",
    color: "bg-red-500 text-white"
  },
  {
    id: 6,
    name: "pendingScan",
    color: "bg-red-800 text-white"
  },
  {
    id: 7,
    name: "pendingPlan",
    color: "bg-orange-400 text-white"
  },
  {
    id: 8,
    name: "pendingPatientApproval",
    color: "bg-yellow-700 text-white"
  },
  {
    id: 9,
    name: "active",
    color: "bg-green-400 text-white"
  },
  {
    id: 10,
    name: "closed",
    color: "bg-green-400 text-white"
  }
  // {
  //     id   : 11,
  //     name : 'Awaiting PayPal payment',
  //     color: 'bg-blue-700 text-white'
  // },
  // {
  //     id   : 12,
  //     name : 'Remote payment accepted',
  //     color: 'bg-green-800 text-white'
  // },
  // {
  //     id   : 13,
  //     name : 'On pre-order (not paid)',
  //     color: 'bg-purple-700 text-white'
  // },
  // {
  //     id   : 14,
  //     name : 'Awaiting Cash-on-delivery payment',
  //     color: 'bg-blue-800 text-white'
  // }
];

function StatusColor(props) {
  // console.log(_.find(statusColor, {name: props.name}))
  console.log(props.name)
  const color = _.find(statusColor, { name: props.name });

  return (
    <div
      className={clsx(
        "inline text-12 p-4 rounded truncate",
        color ? "color" : ""
      )}
    >
      {constants.CASE_STATUS_MAP[props.name]}
    </div>
  );
}

function getUrlParams(ctx) {
  const params = {};

  if (ctx && ctx.search) {
    const searchParams = ctx.search.replace("?", "").split("&");
    for (let i = 0; i < searchParams.length; i++) {
      const paramsPair = searchParams[i].split("=");

      params[paramsPair[0]] = paramsPair[1];
    }
  }

  return params;
}

export { getUrlParams, StatusColor };
