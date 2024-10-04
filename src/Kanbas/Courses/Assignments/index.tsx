import { BsThreeDotsVertical, BsCheckCircle, BsPlus, BsGripVertical } from "react-icons/bs";
import { FaFileAlt, FaRegFileAlt, FaSearch } from "react-icons/fa";
import LessonControlButtons from "../Modules/LessonControlButtons";
import ModulesControls from "../Modules/ModulesControls";
import { FaPlus } from "react-icons/fa6";

export default function Assignments() {
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

            {/* Modules and Lessons */}
            <div>

                <br />
                <ul id="wd-modules" className="list-group rounded-0">
                    <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="fw-bold p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            Assignment 1
                            <LessonControlButtons />
                        </div>
                        <ul className="wd-lessons list-group rounded-0">
                            {/* Assignment 1 */}
                            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 mb-3">
                                <div className="d-flex align-items-center">
                                    {/* Drag handle icon */}
                                    <BsGripVertical className="me-3 fs-3" />

                                    {/* Green icon for assignment */}
                                    <FaRegFileAlt className="text-success me-3" style={{ fontSize: '20px' }} />

                                    <div>
                                        {/* Assignment name with link and black text */}
                                        <a href="#/Kanbas/Courses/1234/Assignments/a1" className="fw-bold text-decoration-none text-dark">
                                            A1
                                        </a>
                                        <br />
                                        {/* Red text and availability info */}
                                        <span className="text-danger wd-title me-2">Multiple Modules</span>
                                        <span className="text-muted">
              | <span className="fw-bold">Not available until</span> May 6 at 12:00am
            </span>
                                        {/* Due date and points */}
                                        <div className="text-muted mt-1">
                                            <span className="fw-bold">Due</span> May 13 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                </div>
                                {/* Right-aligned buttons */}
                                <div className="ms-auto d-flex align-items-center">
                                    <LessonControlButtons /> {/* Buttons on the right */}
                                </div>
                            </li>

                            {/* Assignment 2 */}
                            <li className="wd-lesson list-group-item d-flex justify-content-between align-items-center p-3 mb-3">
                                <div className="d-flex align-items-center">
                                    {/* Drag handle icon */}
                                    <BsGripVertical className="me-3 fs-3" />

                                    {/* Green icon for assignment */}
                                    <FaRegFileAlt className="text-success me-3" style={{ fontSize: '20px' }} />

                                    <div>
                                        {/* Assignment name with link and black text */}
                                        <a href="#/Kanbas/Courses/1234/Assignments/a2" className="fw-bold text-decoration-none text-dark">
                                            A2
                                        </a>
                                        <br />
                                        {/* Red text and availability info */}
                                        <span className="text-danger wd-title me-2">Multiple Modules</span>
                                        <span className="text-muted">
              | <span className="fw-bold">Not available until</span> May 13 at 12:00am
            </span>
                                        {/* Due date and points */}
                                        <div className="text-muted mt-1">
                                            <span className="fw-bold">Due</span> May 20 at 11:59pm | 100 pts
                                        </div>
                                    </div>
                                </div>
                                {/* Right-aligned buttons */}
                                <div className="ms-auto d-flex align-items-center">
                                    <LessonControlButtons /> {/* Buttons on the right */}
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>


            </div>
        </div>
    );
}
