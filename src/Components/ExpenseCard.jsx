export function ExpenseCard() {
  return (
    <div className="bg-white  w-[30%] rounded-xl  mt-10 ">
      <h3 className="text-2xl font-semibold p-2">Add Expense</h3>
      <form action="input">
        <div className="p-2">
          <h4>Enter your expense details below</h4>
          <div className="grid grid-rows-1  place-content-between gap-2 pb-2">
            <label htmlFor="expenseName"></label>
            <input
              type="text"
              id="expenseName"
              placeholder="Enter Expense Name"
              className="border-2 rounded-sm "
            />
            <label htmlFor="expenseDescription"></label>
            <input
              type="text"
              id="expenseDescription"
              placeholder="Enter Expense Description"
              className="border-2 rounded-sm"
            />
            <label htmlFor="expenseCategory"></label>
            <input
              type="text"
              id="expenseCategory"
              placeholder="Enter Expense Category"
              className="border-2 rounded-sm"
            />
            <label htmlFor="expenseAmount"></label>
            <input
              type="text"
              id="expenseAmount"
              placeholder="Enter Expense Amount"
              className="border-2 rounded-sm"
            />
            <label htmlFor="expenseDate"></label>
            <input
              type="date"
              id="expenseDate"
              placeholder="Enter Expense Date"
              className="border-2 rounded-sm"
            />
            <input type="submit" className="bg-black text-blue-50 rounded-sm" />
          </div>
        </div>
      </form>
    </div>
  );
}
