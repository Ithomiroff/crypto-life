import { useRoutes } from 'react-router-dom';

import { Entrypoint } from './components/Entrypoint/Entrypoint';
import { APP_ROUTES } from './routes';

const App = () => <Entrypoint>{useRoutes(APP_ROUTES)}</Entrypoint>;

export default App;
