export function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="my-4">
      <input
        type="text"
        placeholder="Search Expenses..."
        className="border-2 rounded-sm p-2 w-[30%]"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
}
