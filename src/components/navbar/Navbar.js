import React from "react";
import { icon } from "../../assets/index";
import { navLinksdata } from "../../constants";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className="w-full h-24 mx-auto flex sticky top-0 z-50 bg-bodyColor justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img className="object-cover w-[100px] h-[100px] text-gray-200" src={icon} alt="logo" />
      </div>
      <div>
        <ul className="flex items-center gap-10">
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
      </div>
    </div>
  );
}

export default Navbar;
