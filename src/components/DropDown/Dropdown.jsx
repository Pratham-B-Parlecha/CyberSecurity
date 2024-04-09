import "./dropdown.css";
import SearchableDropdown from "./SearchableDropdown";
import { animals } from "./data/animals";
import { useState } from "react";

export default function Dropdown() {
  const [value, setValue] = useState("");

  return (
    <div className="Con">
      <SearchableDropdown
        options={animals}
        label="name"
        id="id"
        selectedVal={value}
        handleChange={(val) => setValue(val)}
      />
    </div>
  );
}
