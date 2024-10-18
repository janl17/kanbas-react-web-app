import { NavLink } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";


export default function KanbasNavigation() {
    const { pathname } = useLocation();
    const links = [
        { label: "Dashboard", path: "/Kanbas/Dashboard", icon: AiOutlineDashboard },
        { label: "Courses",   path: "/Kanbas/Dashboard", icon: LiaBookSolid },
        { label: "Calendar",  path: "/Kanbas/Calendar",  icon: IoCalendarOutline },
        { label: "Inbox",     path: "/Kanbas/Inbox",     icon: FaInbox },
        { label: "Labs",      path: "/Labs",             icon: LiaCogSolid },
    ];

    return (
        <div id="wd-kanbas-navigation" style={{ width: 120 }}
             className="list-group rounded-0 position-fixed
         bottom-0 top-0 d-none d-md-block bg-black z-2">

            <a href="https://www.northeastern.edu/" id="wd-neu-link" target="_blank"
               className="list-group-item bg-black border-0 text-center">
                <img src="/images/NEU.png" width="75px" alt="Northeastern University Logo" />
            </a>
            <Link to="/Kanbas/Account" className={`list-group-item text-center border-0 bg-black
            ${pathname.includes("Account") ? "bg-white text-danger" : "bg-black text-white"}`}>
                <FaRegCircleUser className={`fs-1 ${pathname.includes("Account") ? "text-danger" : "text-white"}`} />
                <br />
                Account
            </Link>
            {links.map((link) => (
                <Link key={link.path} to={link.path} className={`list-group-item bg-black text-center border-0
              ${pathname.includes(link.label) ? "text-danger bg-white" : "text-white bg-black"}`}>
                    {link.icon({ className: "fs-1 text-danger"})}
                    <br />
                    {link.label}
                </Link>
            ))}

            <NavLink to="/Kanbas/Account" id="wd-account-link"
                     className={({ isActive }) =>
                         isActive
                             ? "list-group-item text-center border-0 bg-white text-danger"
                             : "list-group-item text-center border-0 bg-black text-white"
                     }>
                {/* Account icon - White */}
                <FaRegCircleUser className="fs-1 text-white" /><br />
                Account
            </NavLink>

            <NavLink to="/Kanbas/Dashboard" id="wd-dashboard-link"
                     className={({ isActive }) =>
                         isActive
                             ? "list-group-item text-center border-0 bg-white text-danger"
                             : "list-group-item text-center border-0 bg-black text-white"
                     }>
                {/* Other icons - Red */}
                <AiOutlineDashboard className="fs-1 text-danger" /><br />
                Dashboard
            </NavLink>

            <NavLink to="/Kanbas/Courses" id="wd-course-link"
                     className={({ isActive }) =>
                         isActive
                             ? "list-group-item text-center border-0 bg-white text-danger"
                             : "list-group-item text-center border-0 bg-black text-white"
                     }>
                <LiaBookSolid className="fs-1 text-danger" /><br />
                Courses
            </NavLink>

            <NavLink to="/Kanbas/Calendar" id="wd-calendar-link"
                     className={({ isActive }) =>
                         isActive
                             ? "list-group-item text-center border-0 bg-white text-danger"
                             : "list-group-item text-center border-0 bg-black text-white"
                     }>
                <IoCalendarOutline className="fs-1 text-danger" /><br />
                Calendar
            </NavLink>

            <NavLink to="/Kanbas/Inbox" id="wd-inbox-link"
                     className={({ isActive }) =>
                         isActive
                             ? "list-group-item text-center border-0 bg-white text-danger"
                             : "list-group-item text-center border-0 bg-black text-white"
                     }>
                <FaInbox className="fs-1 text-danger" /><br />
                Inbox
            </NavLink>

            <NavLink to="/Labs" id="wd-labs-link"
                     className={({ isActive }) =>
                         isActive
                             ? "list-group-item text-center border-0 bg-white text-danger"
                             : "list-group-item text-center border-0 bg-black text-white"
                     }>
                <LiaCogSolid className="fs-1 text-danger" /><br />
                Labs
            </NavLink>
        </div>
    );
}
