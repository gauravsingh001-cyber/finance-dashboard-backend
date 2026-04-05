import Record from '../models/record.model.js';

export const getSummary = async (userId) => {
  const records = await Record.find({ user: userId });

  let income = 0;
  let expense = 0;

  records.forEach(r => {
    if (r.type === 'income') income += r.amount;
    else expense += r.amount;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense
  };
};