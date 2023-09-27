import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({ mode: "all" });

  const contactForm = useRef();

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    setLoading(true);
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        contactForm.current,
        process.env.NEXT_PUBLIC_KEY
      )
      .then(
        function (response) {
          setMessage({ type: "success" });
          console.log("SUCCESS!", response.status, response.text);
          toast.success("Your Response has been recorded!");
          reset();
          setLoading(false);
        },
        function () {
          setMessage({ type: "error" });
          toast.error("FAILED...", message);
          setLoading(false);
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-contact h-auto w-full bg-cover bg-no-repeat bg-blend-darken bg-primary bg-opacity-60 flex flex-col items-center justify-center py-20 px-10 md:px-0"
    >
      <div className="max-w-[1240px]">
        <div className="text-center py-5">
          <h1 className="text-white text-3xl font-bold">Contact Us</h1>
          <p className="text-gray-300 my-2 text-lg">
            Reach out to us to discuss your resource needs. We are here to help.
          </p>
        </div>
      </div>
      <div className="bg-gray-50 bg-opacity-60 p-10 w-[100%] md:w-[60%] min-h-[21rem] overflow-auto">
        <form
          className="flex flex-col"
          ref={contactForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="relative z-0 w-full group min-h-[4.7rem]">
            <input
              type="text"
              name="name"
              id="name"
              {...register("userName", {
                required: "Username is required",
              })}
              // aria-invalid={errors.firstName ? "true" : "false"}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="peer-focus:font-5xl absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name *
            </label>
            {errors.userName && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.userName?.message?.toString()}
              </p>
            )}
          </div>

          <div className="relative z-0 w-full  group min-h-[4.7rem]">
            <input
              type="email"
              name="email"
              id="email"
              {...register("email", {
                required: "Please enter a valid email",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Invalid Email",
                },
              })}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0   focus:appearance-none focus:bg-transparent  peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Email address *
            </label>
            {errors.email && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.email?.message?.toString()}
              </p>
            )}
          </div>

          <div className="relative z-0 w-full  group min-h-[4.7rem]">
            <input
              type="phone"
              name="phone"
              id="phone"
              {...register("phone", {
                required: "Phone is required",
                pattern: {
                  value: /^[0-9\b]+$/,
                  message: "Please enter a valid number",
                },
              })}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Phone *
            </label>
            {errors.phone && (
              <p role="alert" className="text-red-500 text-sm">
                {errors.phone.message.toString()}
              </p>
            )}
          </div>

          <div className="relative z-0 w-full group min-h-[4.7rem] max-h-[12rem] overflow-y-auto ">
            <textarea
              type="textarea"
              name="message"
              id="message"
              {...register("message")}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-200 appearance-none  focus:outline-none overflow-hidden focus:ring-0  peer"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="peer-focus:font-medium absolute text-md text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
            >
              Message
            </label>
          </div>
          <button
            disabled={loading}
            type="submit"
            className={`${loading ? "bg-opacity-50 cursor-none": "bg-opacity-100"} text-white bg-black hover:bg-opacity-80 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
            {loading ? "Please wait..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
