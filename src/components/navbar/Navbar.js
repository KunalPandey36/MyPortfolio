import React, { useState } from "react";
import { icon } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaLinkedin, FaGithub, FaHackerrank } from "react-icons/fa";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  
  return (
    <div className="w-full h-24 mx-auto flex sticky top-0 z-50 bg-bodyColor justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div className="cursor-pointer ">
        <img
          className="object-cover w-[100px] h-[100px] text-gray-200"
          src={icon}
          alt="logo"
        />

      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              key={_id}
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center
        justify-center rounded-full text-designColor cursor-pointer"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="py-4 relative">
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 cursor-pointer group">
                  <img
                    className="object-cover w-[70px] h-[70px] text-gray-200"
                    src={icon}
                    alt="logo"
                  />
                  <div className="items-center justify-center flex">
                    <h1 className="text-2xl font-titleFont font-bold text-gray-400  group-hover:text-designColor duration-300">
                      Kunal
                    </h1>
                  </div>
                </div>
                <ul className="flex flex-col gap-4 px-4">
                  {navLinksdata.map((item) => (
                    <li key={item._id} className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300">
                      <Link
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        onClick={() => setShowMenu(false)}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 py-6">
                <span><h1 className="text-xl font-bodyFont uppercase text-gray-400 tracking-wide px-4">Find me in</h1></span>
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
                
              </div>

              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
