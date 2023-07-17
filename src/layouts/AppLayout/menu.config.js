import { ReactComponent as News } from '../../assets/icons/news.svg';
import { ReactComponent as Signals } from '../../assets/icons/signals.svg';
import { ReactComponent as Investments } from '../../assets/icons/investments.svg';
import { ReactComponent as Seminars } from '../../assets/icons/seminars.svg';
import { ReactComponent as Profile } from '../../assets/icons/profile.svg';

const MENU_CONFIG = [
  {
    path: 'news',
    label: 'Новости',
    icon: <News />,
  },
  {
    path: 'signals',
    label: 'Сигналы',
    icon: <Signals />,
  },
  {
    path: 'investments',
    label: 'Инвестиции',
    icon: <Investments />,
  },
  {
    path: 'seminars',
    label: 'Семинары',
    icon: <Seminars />,
  },
  {
    path: 'profile',
    label: 'Профиль',
    icon: <Profile />,
  },
];

export { MENU_CONFIG };
