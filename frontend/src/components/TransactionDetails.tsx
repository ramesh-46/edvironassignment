import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getTransactionBySchool } from '../services/transactionService';
import { Transaction } from '../types/Transaction';
import TransactionTable from './TransactionTable';

const TransactionDetails: React.FC = () => {
    const { schoolId } = useParams();
    const [transactions, setTransactions] = useState<Transaction[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      if(schoolId){
      const fetchTransactions = async () => {
        try {
          const data = await getTransactionBySchool(schoolId);
          setTransactions(data);
        } catch (err: any) {
          setError(err.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchTransactions();
    }
    }, [schoolId]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
  
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Transactions Details</h1>
        {transactions.length > 0 ? <TransactionTable transactions={transactions} /> : <p>No transactions found for this school.</p>}
      </div>
    );
  };
  
  export default TransactionDetails;