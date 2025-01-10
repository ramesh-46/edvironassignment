import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from '../components/Dashboard';
import TransactionDetails from '../components/TransactionDetails';
import TransactionStatusCheck from '../components/TransactionStatusCheck';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/transactions/school/:schoolId" element={<TransactionDetails />} />
        <Route path="/transactions/status" element={<TransactionStatusCheck />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;