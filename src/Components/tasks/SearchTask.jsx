import { Search, X } from "lucide-react";
import { useTask } from "../../hooks/useTask";
import "./search-task.css";

export const SearchTask = () => {
  const { searchQuery, setSearchQuery } = useTask();

  return (
    <div className="search-container">
      <div className="search-input-container">
        <Search size={20} className="search-icon" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery("")} className="clear-search">
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
