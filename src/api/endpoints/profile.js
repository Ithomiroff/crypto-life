import { createUrl, get, post } from '../config';

const url = createUrl('/profile');

export const getProfile = () => get(url(''));
export const getProfileSeminars = () => get(url('/seminars'));
export const getProfileAvatar = () => get(url('/avatar'));
export const createProfileAvatar = (form) => post(url('/avatar'), form);
