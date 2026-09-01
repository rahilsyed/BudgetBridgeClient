import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from '../components/common/ProtectedRoute';
import DashboardLayout from '../components/layout/DashboardLayout';
import LandingPage from '../pages/landing/LandingPage';
import DashboardHome from '../pages/dashboard/DashboardHome';
import MyAccountPage from '../pages/account/MyAccountPage';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashboardLayout />
        </ProtectedRoute>
      }
    >
      <Route index element={<DashboardHome />} />
      <Route path="account" element={<MyAccountPage />} />
    </Route>
  </Routes>
);

export default AppRoutes;
