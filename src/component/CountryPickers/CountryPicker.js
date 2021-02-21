import React, { useState, useEffect } from "react";
import { fetchDataCountry } from "../../api";
import { NativeSelect, FormControl } from "@material-ui/core";

function CountryPicker({handleCountryChange }) {
  const [country, setCountry] = useState([]);
  useEffect(() => {
    const fonkdata = async () => {
      setCountry(await fetchDataCountry());
    };
    fonkdata();
  });
  return (
    <div>
      <FormControl>
        <NativeSelect
          defaultValue=""
          onChange={(e) => handleCountryChange(e.target.value)}
        >
          <option value="">Global</option>
          {country.map((country, i) => (
            <option key={i} value={country}>
              {country}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </div>
  );
}

export default CountryPicker;
