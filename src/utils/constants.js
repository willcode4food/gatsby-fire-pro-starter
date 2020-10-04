/* eslint-disable no-undef */
const FIREBASE = {
	STORAGE: {
		PROFILE_IMG_FOLDER: 'profile-images',
		BASE_URL: 'https://storage.googleapis.com/...',
	},
	CONFIG: {
		apiKey: process.env.GATSBY_APIKEY,
		authDomain: process.env.GATSBY_AUTHDOMAIN,
		databaseURL: process.env.GATSBY_DATABASEURL,
		projectId: process.env.GATSBY_PROJECTID,
		storageBucket: process.env.GATSBY_STORAGEBUCKET,
		messagingSenderId: process.env.GATSBY_MESSAGINGSENDERID,
	},
}

const PROFILE_IMAGE_TYPES = ['.jpg', '.png', '.jpeg', '.gif']
const PROFILE_IMAGE_SIZE = 150
const PROFILE_IMAGE_THUMB_SIZE = 55
const DEFAULT_AVATAR_SIZE = '9rem'
const DEFAULT_AVATAR_THUMB_SIZE = '50px'
const EVENT_TYPES = {
	PAGEVIEW: 'pageView',
	NODERATED: 'nodeRated',
	LOGIN: 'login',
	SEARCH_SELECT: 'searchSelect',
	REGISTER: 'register',
	DISPENSARY_MAP_SELECT: 'dispensaryMapSelect',
	DISPENSARY_DIRECTIONS: 'dispensaryDirections',
	DISPENSARY_REVIEWS_VIEW: 'dispensaryReviewsView',
	DISPENSARY_MENU_VIEW: 'dispensaryMenuView',
	DISPENSARY_VIEW: 'dispensaryView',
	DISPENSARY_CALL: 'dispensaryCall',
	STRAIN_VIEW: 'strainView',
	STRAIN_FINDER_SELECT: 'strainFinderSelect',
	STRAIN_PRODUCT_SELECT: 'strainProductSelect',
	TOP_RATED_STRAIN_SELECT: 'topRatedStrainSelect',
	FEATURED_DISPENSARY_SELECT: 'featuredDispensarySelect',
}

const TRACKING_ACTIONS = {
	DIRECTIONS_ACTION: 'getDirections',
	FEATURED_DISPENSARY_SELECT_ACTION: 'featuredDispensarySelect',
	LOGIN_ACTION: 'login',
	RATING_ACTION: 'rate',
	REGISTER_ACTION: 'register',
	MAP_FOCUS_ACTION: 'mapFocus',
	USER_SELECT: 'userSelect',
	VIEW_ACTION: 'view',
	VIEW_INVENTORY_MENU: 'inventoryMenuView',
	VIEW_REVIEWS: 'reviewsView',
}

const PATH_HISTORY_STORAGE = 'PATH_HISTORY_STORAGE'

const USER_ROLES = {
	ADMIN: 'admin',
	USER: 'user',
}

// eslint-disable-next-line no-undef
module.exports = {
	DEFAULT_AVATAR_SIZE,
	DEFAULT_AVATAR_THUMB_SIZE,
	EVENT_TYPES,
	FIREBASE,
	PATH_HISTORY_STORAGE,
	PROFILE_IMAGE_SIZE,
	PROFILE_IMAGE_THUMB_SIZE,
	PROFILE_IMAGE_TYPES,
	TRACKING_ACTIONS,
	USER_ROLES,
}
