import React, { useState } from "react";
import SingupForm from "./SingupForm";
import SingupFormSucces from "./SingupFormSucces";

function Form() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };

  return (
    <div>
      {!formIsSubmitted ? (
        <SingupForm submitForm={submitForm} />
      ) : (
        <SingupFormSucces />
      )}
    </div>
  );
}

export default Form;
