import React from "react";
import { BsXCircleFill } from "react-icons/bs";
import "./Input.scss";

function InactiveInputField({ placeholder, size }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`cms__InactiveInput ${size}`}
      />
    </>
  );
}

function HoverInputField({ placeholder, size }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`cms__HoverInput ${size}`}
      />
    </>
  );
}

function DisableInputField({ placeholder, size }) {
  return (
    <>
      <input
        type="text"
        placeholder={placeholder}
        className={`cms__InactiveInput ${size}`}
      />
    </>
  );
}

function InputField({ placeholder, size, label }) {
  return (
    <>
      <label for="inputelement">
        {label}

        <input
          type="text"
          id="inputelement"
          placeholder={placeholder}
          className={`cms__Input ${size}`}
        />
      </label>
    </>
  );
}

function ErrorInputField({ placeholder, size, label }) {
  return (
    <>
      <label className="cms__label" for="inputelement">
        {label}

        <input
          type="text"
          id="inputelement"
          placeholder={placeholder}
          className={`cms__Error__Input ${size}`}
        />
      </label>
    </>
  );
}

export {
  InactiveInputField,
  HoverInputField,
  DisableInputField,
  InputField,
  ErrorInputField,
};
