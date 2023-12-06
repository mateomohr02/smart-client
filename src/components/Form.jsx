import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  isFormValid,
  isEmailValid,
  isPhoneNumberValid,
} from "../assets/validation";
import { sendEmail } from "../redux/actions/sendEmail";

const Form = ({ showAndHideAlert }) => {
  const globalLang = useSelector((state) => state.languageReducer.language);

  const [lang, setLang] = useState(globalLang);

  useEffect(() => {
    setLang(globalLang);
  }, [globalLang]);

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isFormValid(formData)) {
      let sendData = {
        name: formData.name,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      };

      console.log(sendData, "lo que se envia");
      await dispatch(sendEmail(sendData));

      showAndHideAlert();

      setFormData({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ...Object.keys(formData).reduce((acc, key) => {
          if (!formData[key]) {
            acc[key] = `${key} es requerido`;
          } else if (key === "email" && !isEmailValid(formData[key])) {
            acc[key] = "Correo electrónico no válido";
          } else if (
            key === "phone" &&
            formData[key] &&
            !isPhoneNumberValid(formData[key])
          ) {
            acc[key] = "Número de teléfono no válido";
          }
          return acc;
        }, {}),
      }));
    }
  };

  return (
    <>
      {
      lang === "Es" ? (
        <form
          onSubmit={handleSubmit}
          className="w-full lg:mx-56 p-4 border border-black rounded bg-blue-200"
        >
          <div className="mb-2 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 lg:mr-2">
              <label
                className="block text-sm font-medium"
                htmlFor="nombre"
              >
                Nombre:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && (
                <p className="text-red-500">Ingrese su nombre.</p>
              )}
            </div>
            <div className="my-2 lg:my-0 lg:w-1/2 lg:ml-2">
              <label
                className="block text-sm font-medium"
                htmlFor="apellido"
              >
                Apellido:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              {errors.lastName && (
                <p className="text-red-500">Ingrese su apellido.</p>
              )}
            </div>
          </div>

          <div className="mb-2 flex flex-col lg:flex-row justify-between">
            <div className="lg:w-1/2 lg:mr-2">
              <label
                className="block text-sm font-medium"
                htmlFor="email"
              >
                Correo Electrónico:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className="text-red-500">
                  Ingrese un correo electrónico válido.
                </p>
              )}
            </div>
            <div className="my-2 lg:my-0 lg:w-1/2 lg:ml-2">
              <label
                className="block text-sm font-medium"
                htmlFor="telefono"
              >
                Teléfono:
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              {errors.phone && (
                <p className="text-red-500">
                  Ingrese un número de teléfono válido.
                </p>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-medium"
              htmlFor="mensaje"
            >
              Mensaje:
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
            />
            {errors.message && (
              <p className="text-red-500">Deje su consulta.</p>
            )}
          </div>

          <button
            className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </form>
      ) : (
        <form
  onSubmit={handleSubmit}
  className="w-full lg:mx-56 p-4 border border-gray-300 rounded bg-blue-200"
>
  <div className="mb-2 flex flex-col lg:flex-row justify-between">
    <div className="lg:w-1/2 lg:mr-2">
      <label
        className="block text-sm font-medium"
        htmlFor="name"
      >
        Name:
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded"
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
      />
      {errors.name && (
        <p className="text-red-500">Please enter your name.</p>
      )}
    </div>
    <div className="my-2 lg:my-0 lg:w-1/2 lg:ml-2">
      <label
        className="block text-sm font-medium"
        htmlFor="lastName"
      >
        Last Name:
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded"
        type="text"
        id="lastName"
        name="lastName"
        value={formData.lastName}
        onChange={handleInputChange}
      />
      {errors.lastName && (
        <p className="text-red-500">Please enter your last name.</p>
      )}
    </div>
  </div>

  <div className="mb-2 flex flex-col lg:flex-row justify-between">
    <div className="lg:w-1/2 lg:mr-2">
      <label
        className="block text-sm font-medium"
        htmlFor="email"
      >
        Email:
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded"
        type="text"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
      />
      {errors.email && (
        <p className="text-red-500">
          Please enter a valid email address.
        </p>
      )}
    </div>
    <div className="my-2 lg:my-0 lg:w-1/2 lg:ml-2">
      <label
        className="block text-sm font-medium"
        htmlFor="phone"
      >
        Phone:
      </label>
      <input
        className="w-full px-3 py-2 border border-gray-300 rounded"
        type="text"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleInputChange}
      />
      {errors.phone && (
        <p className="text-red-500">
          Please enter a valid phone number.
        </p>
      )}
    </div>
  </div>

  <div className="mb-4">
    <label
      className="block text-sm font-medium"
      htmlFor="message"
    >
      Message:
    </label>
    <textarea
      className="w-full px-3 py-2 border border-gray-300 rounded"
      id="message"
      name="message"
      value={formData.message}
      onChange={handleInputChange}
      rows="4"
    />
    {errors.message && (
      <p className="text-red-500">Please leave your inquiry.</p>
    )}
  </div>

  <button
    className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all duration-300 ease-in-out"
    onClick={handleSubmit}
  >
    Send
  </button>
</form>

      )}
    </>
  );
};

export default Form;
