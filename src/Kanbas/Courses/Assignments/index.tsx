import { BsThreeDotsVertical, BsCheckCircle, BsPlus, BsGripVertical } from "react-icons/bs";
import { FaFileAlt, FaRegFileAlt, FaSearch } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import { FaPlus } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import assignments from '../../Database/assignments.json'; // Ensure this path is correct

export default function Assignments() {
    const { cid: courseId } = useParams(); // Get the courseId from the URL

    // Debugging logs
    console.log("Course ID from URL:", courseId); // Log the courseId
    console.log("All Assignments:", assignments); // Log all assignments

    // Filter assignments by the courseId from the URL
    const filteredAssignments = assignments.filter(assignment => assignment.course === courseId);

    // Log the filtered assignments
    console.log("Filtered Assignments:", filteredAssignments); // Check if filtering is correct

    return (
        <div id="wd-assignments" className="container-fluid p-4">
            {/* Header with Search and Buttons */}
            <div className="d-flex justify-content-between align-items-center mb-3">
                {/* Search Field */}
                <div className="input-group" style={{ width: "300px" }}>
                    <span className="input-group-text bg-white">
                        <FaSearch />
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search..."
                        id="wd-search-assignment"
                    />
                </div>

                {/* Group and Assignment Buttons */}
                <div>
                    <button
                        id="wd-add-assignment-group"
                        className="btn btn-light me-2"
                        style={{ color: "black" }}
                    >
                        <FaPlus className="me-1" /> Group
                    </button>
                    <button id="wd-add-assignment" className="btn btn-danger">
                        <FaPlus className="me-1" /> Assignment
                    </button>
                </div>
            </div>

            {/* List of Assignments */}
            <div>
                {filteredAssignments.length > 0 ? (
                    <ul id="wd-modules" className="list-group rounded-0">
                        {filteredAssignments.map((assignment) => (
                            <li key={assignment._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                                <div className="fw-bold p-3 ps-2 bg-secondary">
                                    <BsGripVertical className="me-2 fs-3" />
                                    {assignment.title} {/* Use actual assignment title */}
                                    <LessonControlButtons />
                                </div>
                                <ul className="wd-lessons list-group rounded-0">
                                    <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 mb-3">
                                        <div className="d-flex align-items-center">
                                            {/* Drag handle icon */}
                                            <BsGripVertical className="me-3 fs-3" />

                                            {/* Green icon for assignment */}
                                            <FaRegFileAlt className="text-success me-3" style={{ fontSize: '20px' }} />

                                            <div>
                                                {/* Assignment name with link */}
                                                <a
                                                    href={`#/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                                    className="fw-bold text-decoration-none text-dark"
                                                >
                                                    {assignment.title} {/* Use actual assignment title */}
                                                </a>
                                                <br />
                                                {/* Availability and due date info */}
                                                <span className="text-danger wd-title me-2">Multiple Modules</span>
                                                <span className="text-muted">
                                                    | <span className="fw-bold">Not available until</span> May 6 at 12:00am
                                                </span>
                                                <div className="text-muted mt-1">
                                                    <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                                                </div>
                                            </div>
                                        </div>
                                        {/* Right-aligned buttons */}
                                        <div className="ms-auto d-flex align-items-center">
                                            <LessonControlButtons />
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No assignments found for this course.</p>
                )}
            </div>
        </div>
    );
}
