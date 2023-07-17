import { clientApi, createUrl, post } from '../config';

const url = createUrl('/auth');

export const registerUser = (body) => post(url('/register'), body);
export const loginUser = (body) => post(url('/login'), body);
export const restorePasswordUser = (body) => post(url('/restorePassword'), body);