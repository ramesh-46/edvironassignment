// App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';
import { getTransactions } from './services/transactionService';
import { Transaction } from './types/Transaction';

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        const data = await getTransactions();
        setTransactions(data);
        setError(null);
      } catch (error: any) {
        console.error("Full error in App.tsx:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      {transactions.length > 0 ? (
        transactions.map(transaction => (
          <div key={transaction.custom_order_id}>
            <p>Custom Order ID: {transaction.custom_order_id}</p>
            <p>Status: {transaction.status}</p>
            {/* ... other data */}
          </div>
        ))
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
}

export default App;