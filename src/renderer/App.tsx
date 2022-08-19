import RouteMenu from './route';
import { RouteParams, PageSettings } from './route/interface';
import TestPage from './component/page-index';
import icon from '../../assets/icon.png';

const appName = 'electron-template';

export default function App() {
  return (
    <RouteMenu
      icon={icon}
      projectName={appName}
      route={[
        { name: '', page: <TestPage /> },
        { name: 'test', page: <TestPage /> },
      ]}
    />
  );
}
