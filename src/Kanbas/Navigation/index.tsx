import { Link, useLocation } from "react-router-dom";
import "./index.css";
import neu from "./neu.png"
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaTv, FaRegQuestionCircle, FaClock, FaInbox, FaPeopleArrows, FaRegArrowAltCircleRight } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-2" />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" />  },
    { label: "Courses",   icon: <FaBook className="fs-2" />           },
    { label: "Groups",   icon: <FaPeopleArrows className="fs-2" />           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-2" /> },
    { label: "Inbox",  icon: <FaInbox className="fs-2" /> },
    { label: "History",  icon: <FaClock className="fs-2" /> },
    { label: "Commons",  icon: <FaRegArrowAltCircleRight className="fs-2" /> },
    { label: "Studio",  icon: <FaTv className="fs-2" /> },
    { label: "Help",  icon: <FaRegQuestionCircle className="fs-2" /> },
  ];
  const { pathname } = useLocation();
  return (
    <ul className="wd-kanbas-navigation">
        <Link to={"/Kanbas/#"}> 
          <img src={neu} alt="" className="neu-image"/>
        </Link>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          {/* Conditional, if courses we just default to the first course */}
          {link.label === "Courses" && 
          <Link to={`/Kanbas/Courses/CS1234`}> {link.icon} {link.label} </Link>}
          {link.label !== "Courses" && 
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>}
        </li>
      ))}
    </ul>
  );
}
export default KanbasNavigation;