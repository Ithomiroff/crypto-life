import { AdminSignals } from './AdminSignals/AdminSignals';
import { AppSignals } from './AppSignals/AppSignals';

const Signals = ({ admin }) => (admin ? <AdminSignals /> : <AppSignals />);

export { Signals };
