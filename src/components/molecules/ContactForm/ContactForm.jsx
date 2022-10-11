import { useState } from "react";

import Input from "components/atoms/Input/Input";

import StyledContactForm from "./StyledContactForm";

const ContactForm = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetFormValues = () => {
    setName('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // const data = { name, subject, message };
    // console.log(data);

    resetFormValues();
  };

  const handleNameChange = (event) => setName(event.target.value);
  const handleSubjectChange = (event) => setSubject(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  return (
    <StyledContactForm onSubmit={handleSubmit}>
      <Input name="name-field" label="Full name" value={name} handleChange={handleNameChange} />
      <Input name="subject-field" label="Subject" value={subject} handleChange={handleSubjectChange} />
      <Input name="message-field" label="Message" type="textarea" value={message} handleChange={handleMessageChange} />
      <input className="submit" type="submit" value="Submit" />
    </StyledContactForm>
  );
};

export default ContactForm;
