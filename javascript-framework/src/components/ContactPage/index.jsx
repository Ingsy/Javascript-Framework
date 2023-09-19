import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import styles from "./Contact.module.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    body: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (formData.fullName.length < 3) {
      newErrors.fullName = "Full name must be at least 3 characters long";
    }

    if (formData.subject.length < 3) {
      newErrors.subject = "Subject must be at least 3 characters long";
    }

    if (!formData.email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      newErrors.email = "Invalid email address";
    }

    if (formData.body.length < 3) {
      newErrors.body = "Body must be at least 3 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      console.log("Form data:", formData);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formHeader}>Contact Us</h2>
      <Form onSubmit={handleSubmit} className={styles.form}>
        <Form.Group controlId="fullName">
          <Form.Label className={styles.formLabel}>Full Name</Form.Label>
          <Form.Control
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            isInvalid={!!errors.fullName}
            required
            className={styles.formInput}
          />
          <Form.Control.Feedback type="invalid">
            {errors.fullName}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label className={styles.formLabel}>Subject</Form.Label>
          <Form.Control
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            isInvalid={!!errors.subject}
            required
            className={styles.formInput}
          />
          <Form.Control.Feedback type="invalid">
            {errors.subject}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className={styles.formLabel}>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            isInvalid={!!errors.email}
            required
            className={styles.formInput}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label className={styles.formLabel}>Body</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            name="body"
            value={formData.body}
            onChange={handleChange}
            isInvalid={!!errors.body}
            required
            className={styles.formInput}
          />
          <Form.Control.Feedback type="invalid">
            {errors.body}
          </Form.Control.Feedback>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className={styles.formSubmitButton}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default ContactForm;
