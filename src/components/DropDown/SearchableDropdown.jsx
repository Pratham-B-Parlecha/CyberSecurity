import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SearchableDropdown = ({
  options,
  label,
  id,
  selectedVal,
  handleChange,
}) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      !arrowRef.current.contains(e.target)
    ) {
      setIsOpen(false);
    }
  };

  const selectOption = (option) => {
    setQuery("");
    handleChange(option[label]);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const getDisplayValue = () => {
    if (query) return query;
    if (selectedVal) return selectedVal;
    return "";
  };

  const filterOptions = () => {
    return options.filter(
      (option) => option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
    );
  };

  return (
    <div className="dropdown">
      <div className="control">
        <div className="selected-value">
          <input
            ref={inputRef}
            className="input"
            type="text"
            value={getDisplayValue()}
            name="searchTerm"
            placeholder="Select an option"
            onChange={(e) => {
              setQuery(e.target.value);
              handleChange(null);
            }}
            onClick={toggleDropdown}
          />
        </div>
        <div
          className={`arrow ${isOpen ? "open" : ""}`}
          onClick={toggleDropdown}
          ref={arrowRef}
        >
          <IoIosArrowDown color="black" size="1rem" />
        </div>
      </div>

      <div className={`options ${isOpen ? "open" : ""}`}>
        {filterOptions().map((option, index) => (
          <div
            onClick={() => selectOption(option)}
            className={`option ${
              option[label] === selectedVal ? "selected" : ""
            }`}
            key={`${id}-${index}`}
          >
            {option[label]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchableDropdown;
