import "./dropdown.css";
import SearchableDropdown from "./SearchableDropdown";
import { animals } from "./data/animals";
import { useState } from "react";

export default function Dropdown({placeholder}) {
  const [value, setValue] = useState("");

  return (
    <div className="Con">
      <SearchableDropdown
        options={animals}
        label="name"
        id="id"
        selectedVal={value}
        handleChange={(val) => setValue(val)}
        placeholder={placeholder}
      />
    </div>
  );
}
