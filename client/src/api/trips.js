import axios from 'axios';

const url = 'http://localhost:3030/api/trips';

export const fetchTrips = (query) => axios.get(url, { params: { query } });
export const createTrip = (newTrip) => axios.post(url, newTrip);
export const updatedTrip = (id, update) => axios.patch(`${url}/${id}`, update);
export const deleteTrip = (id) => axios.delete(`${url}/${id}`);