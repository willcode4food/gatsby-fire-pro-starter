const states = [
	// {
	// 	abbr: 'AL',
	// defaultMapZoom: 8,
	// 	fullName: 'Alabama',
	// geoLocation: {
	// 	latitude: 32.806671,
	// 	longitude: -86.791130,
	// }
	// },
	// {
	// 	abbr: 'AK',
	// 	defaultMapZoom: 4,
	// 	fullName: 'Alaska',
	// 	geoLocation: {
	// 		latitude: 61.370716,
	// 		longitude: -152.404419,
	// 	},
	// },
	// {
	// 	abbr: 'AZ',
	// 	defaultMapZoom: 5.8,
	// 	fullName: 'Arizona',
	// 	geoLocation: {
	// 		latitude: 33.729759,
	// 		longitude: -111.431221,
	// 	},
	// },
	// {
	// 	abbr: 'AR',
	// 	defaultMapZoom: 7,
	// 	fullName: 'Arkansas',
	// 	geoLocation: {
	// 		latitude: 34.969704,
	// 		longitude: -92.373123,
	// 	},
	// },
	{
		abbr: 'CA',
		defaultMapZoom: 7,
		fullName: 'California',
		geoLocation: {
			latitude: 36.116203,
			longitude: -119.681564,
		},
	},
	{
		abbr: 'CO',
		defaultMapZoom: 7,
		fullName: 'Colorado',
		geoLocation: {
			latitude: 39.059811,
			longitude: -105.311104,
		},
	},
	// {
	// 	abbr: 'CT',
	// 	defaultMapZoom: 8,
	// 	fullName: 'Connecticut',
	// 	geoLocation: {
	// 		latitude: 41.597782,
	// 		longitude: -72.755371,
	// 	},
	// },
	{
		abbr: 'DC',
		defaultMapZoom: 12,
		fullName: 'District of Columbia',
		geoLocation: {
			latitude: 38.9072,
			longitude: -77.0369,
		},
	},
	// {
	// 	abbr: 'DE',
	// 	defaultMapZoom: 8,
	// 	fullName: 'Delaware',
	// 	geoLocation: {
	// 		latitude: 39.318523,
	// 		longitude: -75.507141,
	// 	},
	// },
	{
		abbr: 'FL',
		defaultMapZoom: 6,
		fullName: 'Florida',
		geoLocation: {
			latitude: 27.766279,
			longitude: -81.686783,
		},
	},
	// {
	// 	abbr: 'GA',
	// defaultMapZoom: 8,
	// 	fullName: 'Georgia',
	// geoLocation: {
	// 	latitude: 33.040619,
	// 	longitude: -83.643074,
	// },
	// },
	// {
	// 	abbr: 'HI',
	// 	defaultMapZoom: 8,
	// 	fullName: 'Hawaii',
	// 	geoLocation: {
	// 		latitude: 21.094318,
	// 		longitude: -157.498337,
	// 	},
	// },
	// {
	// 	abbr: 'ID',
	// defaultMapZoom: 8,
	// 	fullName: 'Idaho',
	// geoLocation: {
	// 	latitude: 44.240459,
	// 	longitude: -114.478828,
	// },
	// },
	{
		abbr: 'IL',
		defaultMapZoom: 6,
		fullName: 'Illinois',
		geoLocation: {
			latitude: 40.349457,
			longitude: -88.986137,
		},
	},
	// {
	// 	abbr: 'IN',
	// 	defaultMapZoom: 7,
	// 	fullName: 'Indiana',
	// 	geoLocation: {
	// 		latitude: 39.849426,
	// 		longitude: -86.258278,
	// 	},
	// },
	// {
	// 	abbr: 'IA',
	// defaultMapZoom: 8,
	// 	fullName: 'Iowa',
	// geoLocation: {
	// 	latitude: 42.011539,
	// 	longitude: -93.210526,
	// },
	// },
	// {
	// 	abbr: 'KS',
	// defaultMapZoom: 8,
	// 	fullName: 'Kansas',
	// geoLocation: {
	// 	latitude: 38.526600,
	// 	longitude: -96.726486,
	// },
	// },
	// {
	// 	abbr: 'KY',
	// defaultMapZoom: 8,
	// 	fullName: 'Kentucky',
	// geoLocation: {
	// 	latitude: 37.668140,
	// 	longitude: -84.670067,
	// },
	// },
	// {
	// 	abbr: 'LA',
	// 	defaultMapZoom: 8,
	// 	fullName: 'Louisiana',
	// 	geoLocation: {
	// 		latitude: 31.169546,
	// 		longitude: -91.867805,
	// 	},
	// },
	{
		abbr: 'ME',
		defaultMapZoom: 6,
		fullName: 'Maine',
		geoLocation: {
			latitude: 45.593947,
			longitude: -69.381927,
		},
	},
	{
		abbr: 'MD',
		defaultMapZoom: 7,
		fullName: 'Maryland',
		geoLocation: {
			latitude: 39.063946,
			longitude: -76.802101,
		},
	},
	{
		abbr: 'MA',
		defaultMapZoom: 8,
		fullName: 'Massachusetts',
		geoLocation: {
			latitude: 42.230171,
			longitude: -71.530106,
		},
	},
	{
		abbr: 'MI',
		defaultMapZoom: 7,
		fullName: 'Michigan',
		geoLocation: {
			latitude: 43.326618,
			longitude: -84.536095,
		},
	},
	// {
	// 	abbr: 'MN',
	// 	defaultMapZoom: 6,
	// 	fullName: 'Minnesota',
	// 	geoLocation: {
	// 		latitude: 45.694454,
	// 		longitude: -93.900192,
	// 	},
	// },
	// {
	// 	abbr: 'MS',
	// 	defaultMapZoom: 6,
	// 	fullName: 'Mississippi',
	// 	geoLocation: {
	// 		latitude: 32.741646,
	// 		longitude: -89.678696,
	// 	},
	// },
	// {
	// 	abbr: 'MO',
	// 	fullName: 'Missouri',
	// defaultMapZoom: 8,
	// geoLocation: {
	// 	latitude: 38.456085,
	// 	longitude: -92.288368,
	// },
	// },
	// {
	// 	abbr: 'MT',
	// 	defaultMapZoom: 6,
	// 	fullName: 'Montana',
	// 	geoLocation: {
	// 		latitude: 46.921925,
	// 		longitude: -110.454353,
	// 	},
	// },
	// {
	// 	abbr: 'NE',
	// defaultMapZoom: 8,
	// 	fullName: 'Nebraska',
	// geoLocation: {
	// 	latitude: 41.125370,
	// 	longitude: -98.268082,
	// },
	// },
	{
		abbr: 'NV',
		defaultMapZoom: 6,
		fullName: 'Nevada',
		geoLocation: {
			latitude: 38.313515,
			longitude: -117.055374,
		},
	},
	{
		abbr: 'NH',
		defaultMapZoom: 7,
		fullName: 'New Hampshire',
		geoLocation: {
			latitude: 43.652492,
			longitude: -72.863896,
		},
	},
	// {
	// 	abbr: 'NJ',
	// 	defaultMapZoom: 8,
	// 	fullName: 'New Jersey',
	// 	geoLocation: {
	// 		latitude: 40.298904,
	// 		longitude: -74.521011,
	// 	},
	// },
	// {
	// 	abbr: 'NM',
	// 	defaultMapZoom: 6,
	// 	fullName: 'New Mexico',
	// 	geoLocation: {
	// 		latitude: 34.840515,
	// 		longitude: -106.248482,
	// 	},
	// },
	{
		abbr: 'NY',
		defaultMapZoom: 6,
		fullName: 'New York',
		geoLocation: {
			latitude: 42.165726,
			longitude: -74.948051,
		},
	},
	// {
	// 	abbr: 'NC',
	// defaultMapZoom: 8,
	// 	fullName: 'North Carolina',
	// geoLocation: {
	// 	latitude: 35.630066,
	// 	longitude: -79.806419,
	// },
	// },
	// {
	// 	abbr: 'ND',
	// 	defaultMapZoom: 6,
	// 	fullName: 'North Dakota',
	// 	geoLocation: {
	// 		latitude: 47.528912,
	// 		longitude: -99.784012,
	// 	},
	// },
	// {
	// 	abbr: 'OH',
	// 	defaultMapZoom: 7,
	// 	fullName: 'Ohio',
	// 	geoLocation: {
	// 		latitude: 40.388783,
	// 		longitude: -82.764915,
	// 	},
	// },
	// {
	// 	abbr: 'OK',
	// 	defaultMapZoom: 7,
	// 	fullName: 'Oklahoma',
	// 	geoLocation: {
	// 		latitude: 35.565342,
	// 		longitude: -96.928917,
	// 	},
	// },
	// {
	// 	abbr: 'OR',
	// 	defaultMapZoom: 6,
	// 	fullName: 'Oregon',
	// 	geoLocation: {
	// 		latitude: 44.572021,
	// 		longitude: -122.070938,
	// 	},
	// },
	// {
	// 	abbr: 'PA',
	// 	defaultMapZoom: 7,
	// 	fullName: 'Pennsylvania',
	// 	geoLocation: {
	// 		latitude: 40.590752,
	// 		longitude: -77.209755,
	// 	},
	// },
	{
		abbr: 'RI',
		defaultMapZoom: 9,
		fullName: 'Rhode Island',
		geoLocation: {
			latitude: 41.680893,
			longitude: -71.51178,
		},
	},
	// {
	// 	abbr: 'SC',
	// defaultMapZoom: 8,
	// 	fullName: 'South Carolina',
	// geoLocation: {
	// 	latitude: 33.856892,
	// 	longitude: -80.945007,
	// },
	// },
	// {
	// 	abbr: 'SD',
	// defaultMapZoom: 8,
	// 	fullName: 'South Dakota',
	// geoLocation: {
	// 	latitude: 44.299782,
	// 	longitude: -99.438828,
	// },
	// },
	// {
	// 	abbr: 'TN',
	// defaultMapZoom: 8,
	// 	fullName: 'Tennessee',
	// geoLocation: {
	// 	latitude: 35.747845,
	// 	longitude: -86.692345,
	// },
	// },
	// {
	// 	abbr: 'TX',
	// defaultMapZoom: 8,
	// 	fullName: 'Texas',
	// geoLocation: {
	// 	latitude: 31.054487,
	// 	longitude: -97.563461,
	// },
	// },
	// {
	// 	abbr: 'UT',
	// defaultMapZoom: 8,
	// 	fullName: 'Utah',
	// geoLocation: {
	// 	latitude: 40.150032,
	// 	longitude: -111.862434,
	// },
	// },
	{
		abbr: 'VT',
		defaultMapZoom: 8,
		fullName: 'Vermont',
		geoLocation: {
			latitude: 44.045876,
			longitude: -72.710686,
		},
	},
	// {
	// 	abbr: 'VA',
	// defaultMapZoom: 8,
	// 	fullName: 'Virginia',
	// geoLocation: {
	// 	latitude: 37.769337,
	// 	longitude: -78.169968,
	// },
	// },
	// {
	// 	abbr: 'WA',
	// 	defaultMapZoom: 6,
	// 	fullName: 'Washington',
	// 	geoLocation: {
	// 		latitude: 47.400902,
	// 		longitude: -121.490494,
	// 	},
	// },
	// {
	// 	abbr: 'WV',
	// 	defaultMapZoom: 7,
	// 	fullName: 'West Virginia',
	// 	geoLocation: {
	// 		latitude: 38.491226,
	// 		longitude: -80.954453,
	// 	},
	// },
	// {
	// 	abbr: 'WI',
	// defaultMapZoom: 8,
	// 	fullName: 'Wisconsin',
	// geoLocation: {
	// 	latitude: 44.268543,
	// 	longitude: -89.616508,
	// },
	// },
	// {
	// 	abbr: 'WY',
	// defaultMapZoom: 8,
	// 	fullName: 'Wyoming',
	// geoLocation: {
	// 	latitude: 42.755966,
	// 	longitude: -107.302490,
	// },
	// },
]
module.exports = states
