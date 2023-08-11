import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // setStep,
  // setPhone,
  // setDialCode,
  // setCountry,
  setField,
} from "../../redux/formWizardSlice";
import { validatePhone } from "../../utils/validation";
import axios from "axios";

const PhoneStep = () => {
  const dispatch = useDispatch();
  const phone = useSelector((state) => state.formWizard.phone);

  const [countries, setCountries] = useState([]);
  const [selectedDialCode, setSelectedDialCode] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://apinew.testqmeter.net/api/v1/template/new-country-list/?format=json"
      )
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.log("AXIS ERROR");
      });
  }, []);

  const handleNext = () => {
    if (validatePhone(phone)) {
      dispatch(setField({ field: "step", value: 3 }));
    }
  };

  const handleCodeSelect = (e) => {
    const dialCode = e.target.value;
    setSelectedDialCode(dialCode);
    dispatch(setField({ field: "dialCode", value: dialCode }));
  };

  const handleCountrySelect = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    dispatch(setField({ field: "country", value: country }));
  };

  return (
    <div className="formPhone">
      <h3>Please enter your phone number</h3>
      <select value={selectedDialCode} onChange={handleCodeSelect}>
        <option>Select dial code</option>
        {countries.map((country, index) => (
          <option key={index} value={country?.dial_code}>
            {country?.dial_code}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) =>
          dispatch(setField({ field: "phone", value: e.target.value }))
        }
      />
      <br />
      <select
        value={selectedCountry}
        onChange={handleCountrySelect}
        className="selectCountries"
      >
        <option>Select country</option>

        {countries.map((country, index) => (
          <option key={index} value={country?.name}>
            {country?.name}
          </option>
        ))}
      </select>
      <br />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default PhoneStep;
