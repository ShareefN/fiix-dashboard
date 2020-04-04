/**
 * Authorization Roles
 */
const authRoles = {
	admin: ['admin'],
	super: ['admin', 'superAdmin'],
	user: ['admin', 'staff', 'user'],
	onlyGuest: []
};

export default authRoles;
