import i18next from 'i18next';
import ar from './navigation-i18n/ar';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
	{
		id: 'dashboard',
		title: 'Dashboard',
		translate: 'DASHBOARD',
		type: 'item',
		icon: 'table_chart',
		url: '/dashboard'
	},
	{
		id: 'cases',
		title: 'Cases',
		translate: 'CASES',
		type: 'item',
		icon: 'list_alt',
		url: '/cases'
	}
];

export default navigationConfig;
