import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import pl from "react-phone-input-2/lang/pl.json";
import { useContext } from "react";

import { MainContext } from "@/context/MainContext";
import { LabelError } from "./LabelError";

export const TelInput = () => {
  const { isErrorTel, toggleErrorTel } = useContext(MainContext);

  const handleChange = (value: string) => {
    toggleErrorTel({
      stateError: false,
      tel: value,
    });
  };

  return (
    <div>
      <PhoneInput
        country={"pl"}
        onlyCountries={["pl"]}
        localization={pl}
        countryCodeEditable={false}
        inputClass="input-tel"
        onChange={handleChange}
        inputProps={{
          name: "tel",
          required: true,
        }}
      />

      {isErrorTel.stateError && <LabelError />}
    </div>
  );
};
