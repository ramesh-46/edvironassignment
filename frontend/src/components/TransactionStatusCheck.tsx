import React, { useState } from 'react';
import { getTransactionByCustomId } from '../services/transactionService';
import { Transaction } from '../types/Transaction';

const TransactionStatusCheck: React.FC = () => {
  const [customOrderId, setCustomOrderId] = useState('');
  const [transaction, setTransaction] = useState<Transaction | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCheckStatus = async () => {
    try {
      const data = await getTransactionByCustomId(customOrderId);
      setTransaction(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setTransaction(null);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Check Transaction Status</h2>
      <input
        type="text"
        placeholder="Enter Custom Order ID"
        value={customOrderId}
        onChange={(e) => setCustomOrderId(e.target.value)}
        className="border rounded p-2 mr-2"
      />
      <button onClick={handleCheckStatus} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Check Status
      </button>

      {transaction && (
        <div className="mt-4 border p-4 rounded">
          <p>Status: {transaction.status}</p>
          {/* Display other transaction details as needed */}
        </div>
      )}

      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};

export default TransactionStatusCheck;