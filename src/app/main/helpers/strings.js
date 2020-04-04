const CASE_STATUS_MAP = {
  pendingAssesment: "Pending Assessment",
  pendingIndication: "Pending Indication",
  insufficientPhotos: "Insufficient Photos",
  notIndicated: "Not Indicated",
  pendingAppointment: "Pending Appointment",
  pendingScan: "Pending Scan",
  pendingPlan: "Pending Plan",
  pendingPatientApproval: "Pending Patient Approval",
  active: "Active",
  closed: "Closed"
};

const CASE_STATUSES_INDEXES = [
  "pendingAssesment",
  "pendingIndication",
  "insufficientPhotos",
  "notIndicated",
  "pendingAppointment",
  "pendingScan",
  "pendingPlan",
  "pendingPatientApproval",
  "active"
];

const CASE_TYPE_MAP = {
  standard: 'Smile',
  plus: 'Smile +',
  eon: "Eon",
  '—': '—'
};

const CASE_STATUSES = [
  {
    label: "Pending Assessment",
    value: "pendingAssesment"
  },
  {
    label: "Pending Indication",
    value: "pendingIndication"
  },
  {
    label: "Insufficient Photos",
    value: "insufficientPhotos"
  },
  {
    label: "Not Indicated",
    value: "notIndicated"
  },
  {
    label: "Pending Appointment",
    value: "pendingAppointment"
  },
  {
    label: "Pending Scan",
    value: "pendingScan"
  },
  {
    label: "Pending Plan",
    value: "pendingPlan"
  },
  {
    label: "Pending Patient Approval",
    value: "pendingPatientApproval"
  },
  {
    label: "Active",
    value: "active"
  },
  {
    label: "Closed",
    value: "closed"
  }
];

const IMAGE_POSITIONS_MAP = {
  frontImage: "Front image",
  leftImage: "Left image",
  lowerImage: "Lower image",
  rightImage: "Right image",
  upperImage: "Upper image"
};

const APPOINTMENT_TYPES_MAP = {
  scanVisit: "Scan Visit",
  consultation: "Consultation",
  ipr: "IPR"
};

const APPOINTMENT_TYPES = [
  {
    label: "Scan Visit",
    value: "scanVisit"
  },
  {
    label: "Consultation",
    value: "consultation"
  },
  {
    label: "IPR",
    value: "ipr"
  }
];

const APPOINTMENT_STATUSES_MAP = {
  scheduled: "Scheduled",
  noShow: "No Show",
  cancelled: "Cancelled",
  finished: "Finished"
};

const APPOINTMENT_STATUSES = [
  {
    label: "Scheduled",
    value: "scheduled"
  },
  {
    label: "No Show",
    value: "noShow"
  },
  {
    label: "Cancelled",
    value: "cancelled"
  },
  {
    label: "Finished",
    value: "finished"
  }
];

const LANGUAGES_MAP = {
  en: "English",
  ar: "Arabic"
};

const LANGUAGES = [
  {
    label: "English",
    value: "en"
  },
  {
    label: "Arabic",
    value: "ar"
  },
  {
    label: "German",
    value: "de"
  }
];

const GENDERS = [
  {
    label: "Male",
    value: "male"
  },
  {
    label: "Female",
    value: "female"
  }
];

const CONTACTMETHOD = [
  {
    label: "Phone",
    value: "phone"
  },
  {
    label: "Whatsapp",
    value: "whatsapp"
  },
  {
    label: "Email",
    value: "email"
  }
];

const CURRENCIES = ["JOD", "SAR", "USD", "AED", "KWD", "QAR"];

const COUNTRIES = [
  "United Arab Emirates",
  "Saudi Arabia",
  "Qatar",
  "Kuwait",
  "Jordan",
  "Germany",
  "Iraq",
  "Lebanon"
];

const INVOICE_TYPES_MAP = {
  scanVisit: "Scan Visit",
  package: "Package",
  fullPayment: "Full Payment",
  other: "Other"
};

const INVOICE_TYPES = [
  {
    label: "Scan Visit",
    value: "scanVisit"
  },
  {
    label: "Package",
    value: "package"
  },
  {
    label: "Full Payment",
    value: "fullPayment"
  },
  {
    label: "Other",
    value: "other"
  }
];

const INVOICE_STATUSES_MAP = {
  scheduled: "Scheduled",
  due: "Due"
};

const INVOICE_STATUSES = [
  {
    label: "Scheduled",
    value: "scheduled"
  },
  {
    label: "Due",
    value: "due"
  }
];

const PACKAGE_STATUSES = [
  {
    label: "Shipped",
    value: "shipped"
  },
  {
    label: "Scheduled",
    value: "scheduled"
  },
  {
    label: "Pending Clearance",
    value: "pendingClearance"
  },
  {
    label: "Manufactured",
    value: "manufactured"
  }
];

const PACKAGE_STATUSES_MAP = {
  shipped: "Shipped",
  scheduled: "Scheduled",
  pendingClearance: "Pending Clearance",
  manufactured: "Manufactured"
};

const PAYMENT_PLANS = [
  {
    label: "FlexPay",
    value: "flexPay"
  },
  {
    label: "Simple Pay",
    value: "simplePay"
  },
  {
    label: "Single Pay",
    value: "singlePay"
  }
];

const PAYMENT_PLAN_MAP = {
  flexPay: "FlexPay",
  simplePay: "Simple Pay",
  singlePay: "Single Pay",
  "—": "—"
};

const STEP_STATUS_MAP = {
  active: "Active",
  scheduled: "Scheduled",
  done: "Done"
};

const ENQUIRY_STATUSES = [
  {
    label: "New",
    value: "new"
  },
  {
    label: "Active",
    value: "active"
  },
  {
    label: "Closed",
    value: "closed"
  }
];

const ENQUIRY_STATUS_MAP = {
  new: "New",
  active: "Active",
  closed: "Closed"
};

const DASHBOARD_STATS_MAP = {
  active: "Active",
  closed: "Closed",
  notIndicated: "Not Indicated",
  insufficientPhotos: "Insufficient Photos",
  pendingScan: "Pending Scan",
  pendingAppointment: "Pending Appointment",
  pendingAssesment: "Pending Assessment",
  pendingIndication: "Pending Indication",
  pendingPatientApproval: "Pending Patient Approval",
  pendingPlan: "Pending Plan"
};

const CALLS_TYPES_MAP = {
  noAnswer: "Not Answered",
  answer: "Answered"
};

const CALLS_TYPES = [
  {
    label: "Not Answered",
    value: "noAnswer"
  },
  {
    label: "Answered",
    value: "answer"
  },
  {
    label: "Not Called",
    value: "notCalled"
  }
];

//ratings
const INTEREST_TYPES = [
  {
    label: "High",
    value: "high"
  },
  {
    label: "Moderate",
    value: "moderate"
  },
  {
    label: "Low",
    value: "low"
  }
];

const INTEREST_MAP = {
  high: "high",
  moderate: "moderate",
  low: "low"
};

const PRODUCT_AWARENESS_TYPES = [
  {
    label: "High",
    value: "high"
  },
  {
    label: "Moderate",
    value: "moderate"
  },
  {
    label: "Low",
    value: "low"
  }
];

const PRODUCT_AWARENESS_MAP = {
  high: "high",
  moderate: "moderate",
  low: "low"
};

const REACTION_TO_PRICE_TYPES = [
  {
    label: "Positive",
    value: "positive"
  },
  {
    label: "Negative",
    value: "negative"
  }
];

const REACTION_TO_PRICE_MAP = {
  positive: "positive",
  negative: "negative"
};

const constants = {
  APPOINTMENT_TYPES,
  APPOINTMENT_TYPES_MAP,
  APPOINTMENT_STATUSES_MAP,
  APPOINTMENT_STATUSES,
  LANGUAGES_MAP,
  LANGUAGES,
  CASE_STATUSES,
  CASE_STATUS_MAP,
  GENDERS,
  CURRENCIES,
  COUNTRIES,
  INVOICE_TYPES_MAP,
  INVOICE_TYPES,
  INVOICE_STATUSES_MAP,
  INVOICE_STATUSES,
  PACKAGE_STATUSES,
  PACKAGE_STATUSES_MAP,
  PAYMENT_PLANS,
  PAYMENT_PLAN_MAP,
  STEP_STATUS_MAP,
  ENQUIRY_STATUSES,
  ENQUIRY_STATUS_MAP,
  DASHBOARD_STATS_MAP,
  CALLS_TYPES,
  CALLS_TYPES_MAP,
  CONTACTMETHOD,
  IMAGE_POSITIONS_MAP,
  CASE_STATUSES_INDEXES,
  CASE_TYPE_MAP,
  
  INTEREST_TYPES,
  INTEREST_MAP,
  PRODUCT_AWARENESS_TYPES,
  PRODUCT_AWARENESS_MAP,
  REACTION_TO_PRICE_TYPES,
  REACTION_TO_PRICE_MAP
};

export { constants };
