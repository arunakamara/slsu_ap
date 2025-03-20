import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = ({ users, handleRegister }) => {
  const navigate = useNavigate();
  const [stateUniversities, setStateUniversities] = useState([]);
  const [privateUniversities, setPrivateUniversities] = useState([]);

  const levelOptions = ["Undergraduate", "Master's", "Ph.D."];

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    universityType: Yup.string().required("University Type is required"),
    universityName: Yup.string().required("University Name is required"),
    otherUniversity: Yup.string(),
    levelOfEducation: Yup.string().required("Level of Education is required"),
    course: Yup.string().required("Course is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      universityType: "",
      universityName: "",
      otherUniversity: "Enter your other University Name",
      levelOfEducation: "",
      course: "",
    },
    validationSchema,
    onSubmit: (values) => {
      if (users.find((u) => u.email === values.email)) {
        toast.error("Email already registered");
        return;
      }
      console.log(values);
      handleRegister(values);
      navigate("/login");
    },
  });

  const getPrivateUniversity = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/university/private"
      );
      const universities = data.map((u) => u.name);
      setPrivateUniversities(universities);
    } catch (ex) {
      console.log(ex.response.data);
    }
  };
  const getStateUniversity = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/university/state"
      );
      const universities = data.map((u) => u.name);
      setStateUniversities(universities);
    } catch (ex) {
      console.log(ex.response.data);
    }
  };

  useEffect(() => {
    getPrivateUniversity();
    getStateUniversity();
  }, []);

  return (
    <section className="py-16 bg-white sm:mx-8 md:w-[80%] lg:w-[50%] md:px-8 md:mx-auto">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 text-center mb-12">
          Register
        </h1>
        <form
          className="bg-gray-50 p-6 rounded-lg shadow-md max-w-2xl mx-auto"
          onSubmit={formik.handleSubmit}
        >
          {Object.entries(formik.initialValues).map(([field, value]) => (
            <div className="mb-4" key={field}>
              <label
                className="block text-gray-700 mb-1 font-semibold capitalize"
                htmlFor={field}
              >
                {field.replace(/([A-Z])/g, " $1").trim()}
              </label>
              {field === "universityType" ? (
                <select
                  id={field}
                  {...formik.getFieldProps(field)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select University Type</option>
                  <option value="state">State University</option>
                  <option value="private">Private University</option>
                </select>
              ) : field === "universityName" ? (
                <>
                  <select
                    id={field}
                    {...formik.getFieldProps(field)}
                    className="w-full p-2 border rounded-lg"
                    onChange={(e) => {
                      formik.handleChange(e);
                    }}
                  >
                    <option value="">Select University Name</option>
                    {(formik.values.universityType === "state"
                      ? stateUniversities
                      : privateUniversities
                    ).map((u) => (
                      <option key={u} value={u}>
                        {u}
                      </option>
                    ))}
                    <option value="others">Others</option>
                  </select>
                </>
              ) : field === "otherUniversity" ? (
                <input
                  type="text"
                  id={field}
                  disabled={formik.values.universityName !== "others"}
                  {...formik.getFieldProps(field)}
                  className="w-full p-2 border rounded-lg "
                  placeholder={`Enter your ${field
                    .replace(/([A-Z])/g, " $1")
                    .trim()} if your university is not in the list above`}
                />
              ) : field === "levelOfEducation" ? (
                <select
                  id={field}
                  {...formik.getFieldProps(field)}
                  className="w-full p-2 border rounded-lg"
                >
                  <option value="">Select Level of Education</option>
                  {levelOptions.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={
                    field === "confirmPassword" || field === "password"
                      ? "password"
                      : "text"
                  }
                  id={field}
                  {...formik.getFieldProps(field)}
                  className="w-full p-2 border rounded-lg"
                  placeholder={`Enter your ${field
                    .replace(/([A-Z])/g, " $1")
                    .trim()}`}
                />
              )}
              {formik.touched[field] && formik.errors[field] ? (
                <p className="text-red-500 text-sm">{formik.errors[field]}</p>
              ) : null}
            </div>
          ))}
          <button
            type="submit"
            className="w-full cursor-pointer px-4 py-2 bg-green-800 text-white rounded-lg hover:bg-green-700"
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
