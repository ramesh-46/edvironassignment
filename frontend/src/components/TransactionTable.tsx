import React from 'react';
import { Transaction } from '../types/Transaction';

interface TransactionTableProps {
  transactions: Transaction[];
}

const TransactionTable: React.FC<TransactionTableProps> = ({ transactions }) => {
  if (!transactions || transactions.length === 0) {
    return <p>No transactions found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200 border">
        {/* ... table header (same as before) */}
        <tbody className="bg-white divide-y divide-gray-200">
          {transactions.map((transaction) => (
            <tr key={transaction.custom_order_id}>
              {/* ... table data cells (same as before) */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;