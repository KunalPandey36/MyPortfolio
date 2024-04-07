import React, { useState } from "react";
import Title from "../layouts/Title";
import { handshake } from "../../assets";
import validator from "validator";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";

const Contact = () => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("Username is Required!");
    } else if (phone === "") {
      setErrMsg("Phone number is Required!");
    } else if (email === "") {
      setErrMsg("Email is Required!");
    } else if (!validator.isEmail(email)) {
      setErrMsg("Enter valid Email!");
    } else if (subject === "") {
      setErrMsg("Subject is Required!");
    } else if (message === "") {
      setErrMsg("Message is Required!");
    } else {
      setSuccessMsg(`Thank you ${username}, Your Message has been sent Successfully!`);
      setUsername("");
      setPhone("");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrMsg("");
      console.log(username, phone, email, subject, message);
    }
  };
  return (
    <section id="contact" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Contact" des="Connect with me!" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col mdl:flex-row gap-4 mdl:gap-0 mdl:justify-between ">
          <div className="w-full md:w-[60%] mdl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <img
              className="w-full h-64 object-cover rounded-lg mb-4 py-8"
              src={handshake}
              alt=""
            />
            <div className="flex flex-col gap-6 py-6">
              <h3 className=" text-3xl font-bold text-white">Kunal Pandey</h3>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Mobile Number : 7739094882
              </p>
              <p className="text-base text-gray-400 flex items-center gap-2">
                Email: kunalpa4007@gmail.com
              </p>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/kunal-pandey-6599b1190/">
                <span className="bannerIcon">
                  <FaLinkedin />
                </span>
              </a>

              <a href="https://github.com/KunalPandey36">
                <span className="bannerIcon">
                  <FaGithub />
                </span>
              </a>
              <a href="https://www.hackerrank.com/profile/kunalpa4007">
                <span className="bannerIcon">
                  <FaHackerrank />
                </span>
              </a>
            </div>
          </div>
          <div className=" w-full md:w-[80%] mdl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne">
            <form className="w-full flex flex-col gap-4 py-5">
              {errMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500
                text-base tracking-wide animate-bounce "
                >
                  {errMsg}
                </p>
              )}
              {successMsg && (
                <p
                  className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500
                text-base tracking-wide animate-bounce"
                >{successMsg}</p>
              )}
              <div className="w-full flex gap-10">
                <div className="flex flex-col w-1/2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide py-4">
                      Your Name
                    </p>
                    <input
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                      type="text"
                      className={`${ errMsg === "Username is Required!" && 'outline-designColor' } contactin`}
                    />
                  </div>
                </div>
                <div className="flex flex-col w-1/2 gap-4">
                  <div>
                    <p className="text-sm text-gray-400 uppercase tracking-wide py-4">
                      Phone Number
                    </p>
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      value={phone}
                      type="number"
                      className={`${ errMsg === "Phone number is Required!" && 'outline-designColor' } contactin`}
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  className={`${ (errMsg === "Email is Required!" || errMsg === "Enter valid Email!")  && 'outline-designColor' } contactin`}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                  type="text"
                  className={`${ errMsg === "Subject is Required!" && 'outline-designColor' } contactin`}
                />
              </div>
              <div className="flex flex-col gap-4 py-5">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${ errMsg === "Message is Required!" && 'outline-designColor' } contacttextarea`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div>
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase
                hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
