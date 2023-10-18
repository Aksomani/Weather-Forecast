// export const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions';
// export const geoApiOptions = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'bbc733b2e6msh521c7c5de8be8efp1634f4jsn06f5c9250bb9',
// 		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
// 	}
// };

export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'bbc733b2e6msh521c7c5de8be8efp1634f4jsn06f5c9250bb9',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};
export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "d6b49454c7e3b5730a04b6fa209e9353";

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }