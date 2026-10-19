import { useState } from "react";
export default function SignupForm({ onClose }) {
  const [formData, setFormData] = useState({
    
    email: "",
    password: "",
    Phone_number :"",
    Address:"",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Signup data:", formData);

    // Send formData to your backend API here
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-3 text-2xl text-gray-500 hover:text-black"
          aria-label="Close sign up form"
        >
          &times;
        </button>

        <h2 className="mb-2 text-center text-2xl font-bold text-gray-800">
          Create an Account
        </h2>

        <p className="mb-6 text-center text-gray-500">
          Sign up to get started!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              username
            </label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
              autoComplete="username"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              autoComplete="email"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Create password"
              autoComplete="new-password"
              minLength={8}
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
          </div>
          <div>
           <label className="mb-1 block text-sm font-medium text-gray-700">
              Phone-Number
            </label>
          <input
          type="tel"
          name="phone"
          placeholder="Enter your phone number"
          value={formData.Phone_number}
          onChange={(e) => {
          const digitsOnly = e.target.value
          .replace(/\D/g, "")
          .slice(0, 10);

          setFormData({
          ...formData,
          Phone_number: digitsOnly,
          });
           }}
            maxLength={10}
             inputMode="numeric"
            pattern="[0-9]{10}"
             required
             className="w-full border rounded-lg px-4 py-2"
            />
             <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Location
            </label>
            <input
              type="text"
              name="Address"
              value={formData.Address}
              onChange={handleChange}
              placeholder="Enter Address"
              autoComplete="Address"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            </div> 
            </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onClose}
            className="font-medium text-blue-600 hover:underline"
          >
            Log in
          </button>
        </p>
      </div>
    </div>
  );
}