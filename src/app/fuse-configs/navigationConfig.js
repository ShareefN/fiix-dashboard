import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	// {
	// 	id: 'dashboard',
	// 	title: 'Dashboard',
	// 	translate: 'DASHBOARD',
	// 	type: 'item',
	// 	icon: 'table_chart',
	// 	url: '/dashboard'
	// },
	{
		id: 'contractors',
		title: 'Contractors',
		translate: 'CONTRACTORS',
		type: 'item',
		icon: 'perm_contact_calendar',
		url: '/contractors'
	},
	{
		id: 'users',
		title: 'Users',
		translate: 'USERS',
		type: 'item',
		icon: 'person_outline',
		url: '/users'
	},
	{
		id: 'admins',
		title: 'Admins',
		translate: 'ADMINS',
		type: 'item',
		icon: 'person_pin',
		url: '/admins'
	},
	{
		id: 'applications',
		title: 'Applications',
		translate: 'APPLICATION',
		type: 'item',
		icon: 'touch_app',
		url: '/applications'
	},
	{
		id: 'reviews',
		title: 'Reviews',
		translate: 'REVIEWS',
		type: 'item',
		icon: 'rate_review',
		url: '/reviews'
	},
	{
		id: 'feedbacks',
		title: 'Feedback',
		translate: 'FEEDBACKS',
		type: 'item',
		icon: 'feedback',
		url: '/feedback'
	}
];

export default navigationConfig;
