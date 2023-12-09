import React from 'react';
import cn from 'classnames';
import css from './TransactionHistory.module.css';

export const Transactions = ({ items }) => {
  return (
    <section className={cn(css.transactionsSection)}>
      <table className={cn(css.transactionsTable)}>
        <thead className={cn(css.transactionsHead)}>
          <tr>
            <th className={cn(css.transactionsHeadItem)}>Type</th>
            <th className={cn(css.transactionsHeadItemAmount)}>Amount</th>
            <th className={cn(css.transactionsHeadItem)}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(items) &&
            items.map(({ id, type, amount, currency }) => (
              <tr key={id} className={cn(css.transactionsBodyList)}>
                <td className={cn(css.transactionsBodyItem)}>{type}</td>
                <td className={cn(css.transactionsBodyItemAmount)}>{amount}</td>
                <td className={cn(css.transactionsBodyItem)}>{currency}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </section>
  );
};
