import React, { useEffect, useState } from "react";
import Handshake from "../assets/Handshake.json";

import "../App.css";
import RINGS from "vanta/src/vanta.rings";
import Lottie from "lottie-react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  useEffect(() => {
    RINGS({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0x728b8b,
    });
  }, []);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_rfsf744",
        "template_b400dql",
        {
          from_name: form.name,
          to_name: "Tushar",
          user_email: form.email,
          to_email: "tusharnama844@gmail.com",
          message: form.message,
        },
        "eDExA6vz8A8YyCESb"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Thank you for connecting, I'll talk to you soon!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="flex justify-center ">
      <section className="   ">
        <div className="container ">
          <div className=" max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className=" hover:transition-colors cursor-cell mb-6 hover:text-gray-500 righteous-regular tracking-tighter  text-7xl">
                Get in Touch
              </h2>
              <p className="text-gray-400 text-lg">
                Have a question or want to work together? Fill out the form
                below and I'll get back to you as soon as possible.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 lg:gap-16 md:grid-cols-2">
              <div className="shadow-lg dark:shadow-none">
                <form className="space-y-4 p-6 sm:p-8" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 gap-4 lg:gap-24 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="block text-md font-medium text-gray-300"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        className="block w-full lg:w-[180px] h-[65%] p-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-md font-medium text-gray-300"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        className="block w-full lg:w-[180px] h-[65%] p-2 border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-md font-medium text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Enter your message"
                      value={form.message}
                      onChange={handleChange}
                      className="block w-full lg:w-[372px] p-2 min-h-[240px] border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center max-sm:w-full max-md:w-full py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
              <div className="flex flex-col items-center justify-center">
                <Lottie animationData={Handshake} />
                <h3 className="mt-4 text-3xl font-bold z-10 hover:z-0 hover:text-red-600 hover:transition cursor-default">
                  Dab me up, My G!
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="app">
        <div className="bg" id="vanta"></div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Contact;
