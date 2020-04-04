const STATS_COLOR = {
	IN_QC: 'bg-blue-400',
	IN_MFG: 'bg-red-400',
	READY_FOR_SHIPPING: 'bg-green-400',
	IN_SHIPPING: 'bg-purple-400',
	REJECTED: 'bg-orange-400',
	SHIPPED: 'bg-pink-800'
};

const STATUS = [
	{ label: 'Incomplete', value: 'NEW' },
	{
		label: 'QC Processing',
		value: 'IN_QC'
	},
	{
		label: 'Manufacturing',
		value: 'IN_MFG'
	},
	{
		label: 'Ready for Shipping',
		value: 'READY_FOR_SHIPPING'
	},
	{
		label: 'Shipping',
		value: 'IN_SHIPPING'
	},
	{
		label: 'Rejected',
		value: 'REJECTED'
	},
	{
		label: 'Shipped',
		value: 'SHIPPED'
	}
];

const STATUS_TITLE = {
	NEW: 'Incomplete',
	IN_QC: 'QC Processing',
	IN_MFG: 'Manufacturing',
	READY_FOR_SHIPPING: 'Ready for Shipping',
	IN_SHIPPING: 'Shipping',
	REJECTED: 'Rejected',
	SHIPPED: 'Shipped'
};

const SHIPMENT_STATUS_TITLE = {
	PENDING: 'Pending',
	SHIPPED: 'Shipped'
};

const SHIPMENT_STATUS = [
	{
		label: 'Pending',
		value: 'PENDING'
	},
	{
		label: 'Shipped',
		value: 'SHIPPED'
	}
];

const ORDER_STATUS_TITLE = {
	IN_PRINTING: 'Printing',
	IN_FINISHING: 'Finishing',
	IN_PACKAGING: 'Packaging',
	DONE: 'Done'
}

const ORDER_STATUS = [
	{
		label: 'Printing',
		value: 'IN_PRINTING'
	},
	{
		label: 'Finishing',
		value: 'IN_FINISHING'
	},
	{
		label: 'Packaging',
		value: 'IN_PACKAGING'
	},
	{
		label: 'Done',
		value: 'DONE'
	}
];

const constants = {
	STATS_COLOR,
	STATUS,
	SHIPMENT_STATUS,
	ORDER_STATUS,
	STATUS_TITLE,
	SHIPMENT_STATUS_TITLE,
	ORDER_STATUS_TITLE
};

export { constants };
