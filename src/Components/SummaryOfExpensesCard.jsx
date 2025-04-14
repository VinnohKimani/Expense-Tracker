export function SummaryOfExpensesCard({ expenses, onDeleteExpense }) {
  return (
    <div className="mt-6 w-[80%]">
      <table className="border-2 w-full">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 text-left">Expense</th>
            <th className="p-2 text-left">Description</th>
            <th className="p-2 text-left">Amount</th>
            <th className="p-2 text-left">Category</th>
            <th className="p-2 text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id} className="border-t">
              <td className="p-2">{expense.name}</td>
              <td className="p-2">{expense.description}</td>
              <td className="p-2">${expense.amount.toFixed(2)}</td>
              <td className="p-2">{expense.category}</td>
              <td className="p-2">{expense.date}</td>
              <td className="p-2">
                <button
                  onClick={() => onDeleteExpense(expense.id)}
                  className="text-red-600 hover:text-red-800 font-medium"
                  title="Delete expense"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
