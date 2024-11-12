import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Layout from './components/Layout';
import Sales from './pages/Sales';
import Dashboard from './pages/dashboard/Dashboard';
import ManagerLayout from './components/ManagerLayout';
import Agents from './pages/dashboard/Agents';
import AddAgent from './pages/dashboard/AddAgent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="/sales" element={
          <Layout>
            <Sales />
          </Layout>
        } />
        <Route path="/dashboard" element={
          <ManagerLayout>
            <Dashboard />
          </ManagerLayout>
        } />
        <Route path="/agents" element={
          <ManagerLayout>
            <Agents />
          </ManagerLayout>
        } />
        <Route path="/enroll-agent" element={
          <ManagerLayout>
            <AddAgent />
          </ManagerLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
