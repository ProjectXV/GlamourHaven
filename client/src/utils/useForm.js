/*
    This is a custom validation react hook created to make validation easier 
    since we have so many forms that require validation. Instead of doing validation as someone fills the form
    it does validation after filling the form to prevent re-renders
*/

import { useState } from "react";

export const useForm = (options) => {
  //manages state of the whole form
  const [data, setData] = useState(options?.initialValues || {});
  //to accomodate errors
  const [errors, setErrors] = useState({});

  /*
    The handleChange function is responsible for managing the change events of our input elements.
    We need a way to tell the function which attribute of the form it manages.
    For this reason, we call the function with the name of the attribute (key).
    handleChange then returns a function that uses the React event to update the form state.
    */
  const handleChange = (key, sanitizeFn) => (e) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
  };

  /*-------------function that handles the form submission----------*/
  const handleSubmit = async (e) => {
    e.preventDefault(); //prevents form from submitting at this point

    const validations = options?.validations;
    // Check if there are validations specified
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key]; //gets key for each validation

        //checks for validation for required fields
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        //checks for validations that require regex patterns
        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        //checks for custom validations
        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value)) {
          valid = false;
          newErrors[key] = custom.message;
        }
      }

      //if validation fails, it returns the errors
      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }
    //otherwise set errors to empty object
    setErrors({});

    //proceed to execute the onsubmit function
    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
};
