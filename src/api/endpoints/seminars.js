import { createUrl, get, post } from '../config';

const url = createUrl('/seminar');

export const getSeminarsList = () => get(url(''));
export const addUserToSeminar = (id) => post(url(`/${id}/addUser`));
