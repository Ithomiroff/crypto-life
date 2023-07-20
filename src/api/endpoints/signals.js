import { createUrl, get, post } from '../config';

const url = createUrl('/signal');

export const getSignalsList = () => get(url('/list'));
