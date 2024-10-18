import { Link, useParams, useLocation } from "react-router-dom";
import React from "react";

export default function CoursesNavigation() {
    // Get the current course ID from the URL parameters
    const { cid } = useParams<{ cid: string }>(); // Get 'cid' from the route

    // Get the current pathname to determine which link is active
    const { pathname } = useLocation();

    // Array of links
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];

    return (
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map((link) => {
                // Create the path based on the course ID and the link name
                const path = link === "People"
                    ? `/Kanbas/Courses/${cid}/People` // Include 'cid' in the People path
                    : `/Kanbas/Courses/${cid}/${link}`; // General path for all other links

                // Determine if the current link is active based on the URL
                const isActive = pathname.includes(link);

                return (
                    <Link
                        key={link}
                        to={path}
                        id={`wd-course-${link.toLowerCase()}-link`}
                        className={`list-group-item border border-0 ${isActive ? "active" : "text-danger"}`}
                    >
                        {link}
                    </Link>
                );
            })}
        </div>
    );
}
