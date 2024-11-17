import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './components/Layout';
import Login from './pages/Login';
import { useAuthStore } from './stores/authStore';

// Lazy load route components
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Monitoring = lazy(() => import('./pages/Monitoring'));
const Chatbot = lazy(() => import('./pages/Chatbot'));
const ServiceCenters = lazy(() => import('./pages/ServiceCenters'));
const CarSpecs = lazy(() => import('./pages/CarSpecs'));
const Settings = lazy(() => import('./pages/Settings'));

function App() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Router>
      <Layout>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/monitoring" element={<Monitoring />} />
            <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/service" element={<ServiceCenters />} />
            <Route path="/specs" element={<CarSpecs />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;