import { Outlet } from 'react-router-dom';
import LandingPage from '../components/LandingPage';

const LandingPageLayout = () => (
  <LandingPage>
    <Outlet />  {/* <-- nested routes render out here */}
  </LandingPage>
);

export default LandingPageLayout;