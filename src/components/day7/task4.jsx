import { useState } from "react";
import "./task4.css";

function UiTasks4() {
  // ---------- Task 31 & 32: Form with multiple inputs and state ----------
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
  });

  // ---------- Task 33 & 34: Validation and inline errors ----------
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateField = (field, value) => {
    if (!value.trim()) return "This field is required";
    if (field === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
      return "Invalid email format";
    if (field === "password" && value.length < 6)
      return "Password must be at least 6 characters";
    if (field === "age" && (isNaN(value) || Number(value) < 1))
      return "Enter a valid age";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  // ---------- Task 36 & 37: Password strength & visibility ----------
  const [showPassword, setShowPassword] = useState(false);
  const passwordStrength = () => {
    const pwd = formData.password;
    if (pwd.length === 0) return "";
    if (pwd.length < 6) return "Weak";
    if (pwd.length < 10) return "Medium";
    return "Strong";
  };

  // ---------- Task 35 & 40: Disable submit if invalid ----------
  const isFormValid = () => {
    return (
      Object.values(formData).every((val) => val.trim() !== "") &&
      Object.values(errors).every((err) => err === "")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const err = validateField(field, formData[field]);
      if (err) newErrors[field] = err;
    });
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmittedData(formData);
    }
  };

  // ---------- Task 38: Reset form ----------
  const handleReset = () => {
    setFormData({ name: "", email: "", password: "", age: "" });
    setErrors({});
    setSubmittedData(null);
  };

  return (
    <div className="ui4-container">

      {/* Task 31 & 32 */}
      <div className="task-card">
        <h3>Task 31 & 32: Form with multiple inputs</h3>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span className="error">{errors.name}</span>}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="toggle-btn"
        >
          {showPassword ? "Hide" : "Show"} Password
        </button>
        {errors.password && <span className="error">{errors.password}</span>}
        {formData.password && (
          <p>Password strength: <strong>{passwordStrength()}</strong></p>
        )}
        <input
          type="text"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <span className="error">{errors.age}</span>}
      </div>

      {/* Task 35 & 40: Submit button */}
      <div className="task-card">
        <h3>Task 35 & 40: Submit Form</h3>
        <button
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          Submit
        </button>
        <button onClick={handleReset}>Reset Form</button>
      </div>

      {/* Task 39: Display submitted data */}
      {submittedData && (
        <div className="task-card">
          <h3>Task 39: Submitted Data</h3>
          <div className="submitted-card">
            <p><strong>Name:</strong> {submittedData.name}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Password:</strong> {submittedData.password}</p>
            <p><strong>Age:</strong> {submittedData.age}</p>
          </div>
        </div>
      )}

    </div>
  );
}

export default UiTasks4;
