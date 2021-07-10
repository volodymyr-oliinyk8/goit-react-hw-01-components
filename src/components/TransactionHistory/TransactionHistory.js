import React from 'react';
import PropType from 'prop-types';

const TransactionHistory = ({ items }) => (
    <table class="transaction-history">
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                <tr key={id}>
                    <td>{type}</td>
                    <td>{amount}</td>
                    <td>{currency}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

TransactionHistory.prototype = {
    id: PropType.string.isRequired,
    type: PropType.string.isRequired,
    mountd: PropType.string.isRequired,
    currency: PropType.string.isRequired,
  
}
export default TransactionHistory;