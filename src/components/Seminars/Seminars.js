import { AdminSeminars } from './AdminSeminars/AdminSeminars';
import { AppSeminars } from './AppSeminars/AppSeminars';

const Seminars = ({ admin }) => (admin ? <AdminSeminars /> : <AppSeminars />);

export { Seminars };
