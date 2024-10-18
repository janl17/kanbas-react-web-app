import React from 'react';
import { Link } from 'react-router-dom';
import { courses } from './Database';
import { Course } from './Database/types';  // Assuming types are in Database folder

export default function Dashboard() {
    return (
        <div id="wd-dashboard-courses" className="row">
            <div className="row row-cols-1 row-cols-md-5 g-4">
                {courses.map((course: Course) => (
                    <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link to={`/Kanbas/Courses/${course._id}/Home`}>
                                <div className="card-body">
                                    <h5 className="card-title">{course.name}</h5>
                                    <p className="card-text">{course.description}</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
