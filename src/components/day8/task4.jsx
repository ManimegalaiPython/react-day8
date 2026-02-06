import { useEffect, useState } from "react";

const Task31to40 = () => {
  /* ================= TASK 31 ================= */
  const [value31, setValue31] = useState("");

  /* ================= TASK 32 ================= */
  const [focus32, setFocus32] = useState(false);

  /* ================= TASK 33 ================= */
  const [value33, setValue33] = useState("");

  /* ================= TASK 34 ================= */
  const [value34, setValue34] = useState("");
  const [blurred34, setBlurred34] = useState(false);

  /* ================= TASK 35 ================= */
  const [value35, setValue35] = useState("");

  /* ================= TASK 36 ================= */
  const [password36, setPassword36] = useState("");
  const [show36, setShow36] = useState(false);

  /* ================= TASK 37 ================= */
  const [password37, setPassword37] = useState("");

  const getStrength = () => {
    if (password37.length < 4) return "Weak";
    if (password37.length < 8) return "Medium";
    return "Strong";
  };

  /* ================= TASK 38–39 ================= */
  const [submitted38, setSubmitted38] = useState(false);

  useEffect(() => {
    if (submitted38) {
      const timer = setTimeout(() => setSubmitted38(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [submitted38]);

  /* ================= TASK 40 ================= */
  const [disabled40, setDisabled40] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Tasks 31 – 40</h1>

      {/* ---------- TASK 31 ---------- */}
      <h3>31. Floating Label Input</h3>
      <div style={{ position: "relative", marginBottom: "20px" }}>
        <input
          value={value31}
          onChange={(e) => setValue31(e.target.value)}
          style={{ padding: "10px", width: "200px" }}
        />
        <label
          style={{
            position: "absolute",
            left: "10px",
            top: value31 ? "-10px" : "10px",
            fontSize: value31 ? "12px" : "14px",
            background: "white",
            padding: "0 4px",
          }}
        >
          Name
        </label>
      </div>

      <hr />

      {/* ---------- TASK 32 ---------- */}
      <h3>32. Highlight Border on Focus</h3>
      <input
        onFocus={() => setFocus32(true)}
        onBlur={() => setFocus32(false)}
        style={{
          padding: "10px",
          border: focus32 ? "2px solid #373C7D" : "1px solid gray",
        }}
      />

      <hr />

      {/* ---------- TASK 33 ---------- */}
      <h3>33. Helper Text While Typing</h3>
      <input
        value={value33}
        onChange={(e) => setValue33(e.target.value)}
        style={{ padding: "10px" }}
      />
      {value33 && <p>Keep typing...</p>}

      <hr />

      {/* ---------- TASK 34 ---------- */}
      <h3>34. Error After Blur</h3>
      <input
        value={value34}
        onChange={(e) => setValue34(e.target.value)}
        onBlur={() => setBlurred34(true)}
        style={{ padding: "10px" }}
      />
      {blurred34 && !value34 && <p style={{ color: "red" }}>Required field</p>}

      <hr />

      {/* ---------- TASK 35 ---------- */}
      <h3>35. Disable Submit Until Filled</h3>
      <input
        value={value35}
        onChange={(e) => setValue35(e.target.value)}
        style={{ padding: "10px" }}
      />
      <br />
      <button disabled={!value35}>Submit</button>

      <hr />

      {/* ---------- TASK 36 ---------- */}
      <h3>36. Toggle Password Visibility</h3>
      <input
        type={show36 ? "text" : "password"}
        value={password36}
        onChange={(e) => setPassword36(e.target.value)}
        style={{ padding: "10px" }}
      />
      <button onClick={() => setShow36(!show36)}>
        {show36 ? "Hide" : "Show"}
      </button>

      <hr />

      {/* ---------- TASK 37 ---------- */}
      <h3>37. Password Strength</h3>
      <input
        type="password"
        value={password37}
        onChange={(e) => setPassword37(e.target.value)}
        style={{ padding: "10px" }}
      />
      {password37 && <p>Strength: {getStrength()}</p>}

      <hr />

      {/* ---------- TASK 38 ---------- */}
      <h3>38. Show Success Message</h3>
      <button onClick={() => setSubmitted38(true)}>Submit Form</button>
      {submitted38 && <p style={{ color: "green" }}>Form Submitted!</p>}

      <hr />

      {/* ---------- TASK 40 ---------- */}
      <h3>40. Disable Inputs After Submit</h3>
      <input disabled={disabled40} style={{ padding: "10px" }} />
      <br />
      <button onClick={() => setDisabled40(true)}>Submit</button>
    </div>
  );
};

export default Task31to40;
