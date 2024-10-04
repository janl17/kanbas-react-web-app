import { Link } from "react-router-dom";

export default function Dashboard() {
    // Array to hold at least 7 courses
    const courses = [
        { id: 1, title: "CS1234 React JS", term: "Fall", year: "2023", section: "01", image: "/images/reactjs.jpg" },
        { id: 2, title: "CS1235 Vue JS", term: "Spring", year: "2023", section: "02", image: "/images/vuejs.jpg" },
        { id: 3, title: "CS1236 Angular", term: "Summer", year: "2022", section: "03", image: "/images/angular.jpg" },
        { id: 4, title: "CS1237 Node JS", term: "Fall", year: "2022", section: "04", image: "/images/nodejs.jpg" },
        { id: 5, title: "CS1238 Python", term: "Spring", year: "2022", section: "05", image: "/images/python.jpg" },
        { id: 6, title: "CS1239 Django", term: "Summer", year: "2021", section: "06", image: "/images/django.jpg" },
        { id: 7, title: "CS1240 Java", term: "Fall", year: "2021", section: "07", image: "/images/java.jpg" },
    ];

    return (
        <div id="wd-dashboard" className="container">
            <h1 id="wd-dashboard-title">Dashboard</h1>
            <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
            <hr />

            <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
                {courses.map(course => (
                    <div key={course.id} className="col wd-dashboard-course" style={{ width: "260px", marginBottom: "40px" }}>
                        <div className="card rounded-3 overflow-hidden">
                            <Link className="wd-dashboard-course-link text-decoration-none text-dark"
                                  to={`/Kanbas/Courses/${course.id}/Home`}>
                                <img src={course.image} width="100%" height={160} alt={course.title} />
                                <div className="card-body">
                                    <h5 className="wd-dashboard-course-title card-title">
                                        {course.title}
                                    </h5>
                                    <p className="wd-dashboard-course-title card-text">
                                        {course.term} {course.year} - Section {course.section}
                                    </p>
                                    <button className="btn btn-primary">Go</button>
                                </div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
