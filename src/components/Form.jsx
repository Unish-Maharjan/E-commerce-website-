import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const data = {
      access_key: "e417c06a-b5b4-48a5-8648-7796535b1464", 
      ...formData,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();

    if (result.success) {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } else {
      setStatus("error");
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name *"
          required
          className="bg-gray-100 p-3 rounded outline-none mt-2"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email *"
          required
          className="bg-gray-100 p-3 rounded outline-none"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Your Phone *"
          className="bg-gray-100 p-3 rounded outline-none"
        />
      </div>

      <textarea
        rows="6"
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        className="w-full bg-gray-100 p-4 rounded outline-none mt-5"
      ></textarea>

      <div className="flex justify-end items-center gap-4 mt-4">
        {status === "success" && (
          <p className="text-green-500 text-sm">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 text-sm">Something went wrong. Try again.</p>
        )}
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-red-500 text-white px-8 py-3 rounded hover:bg-red-600 transition disabled:opacity-50"
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
      </div>

    </form>
  );
};

export default Form;