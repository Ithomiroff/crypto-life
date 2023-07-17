import { AppNews } from './AppNews/AppNews';
import { AdminNews } from './AdminNews/AdminNews';

const News = ({ admin }) => (admin ? <AdminNews /> : <AppNews />);

export { News };
