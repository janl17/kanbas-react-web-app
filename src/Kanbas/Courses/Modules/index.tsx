import { useParams } from "react-router";
import * as db from "../../Database"; // Assuming your modules are imported from the Database
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs"; // Icon import
import LessonControlButtons from "./LessonControlButtons";

export default function Modules() {
    // Get the course ID from the URL parameters
    const { cid } = useParams<{ cid: string }>();

    // Retrieve the modules from the database
    const modules = db.modules;

    // Filter the modules based on the course ID (cid)
    const filteredModules = modules.filter((module: any) => module.course === cid);

    return (
        <div>
            <ModulesControls /><br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">
                {/* Map through the filtered modules */}
                {filteredModules.map((module: any) => (
                    <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                        <div className="wd-title p-3 ps-2 bg-secondary">
                            <BsGripVertical className="me-2 fs-3" />
                            {module.name} {/* Module name dynamically */}
                            <LessonControlButtons />
                        </div>
                        {module.lessons && (
                            <ul className="wd-lessons list-group rounded-0">
                                {module.lessons.map((lesson: any) => (
                                    <li key={lesson.id} className="wd-lesson list-group-item p-3 ps-1">
                                        <BsGripVertical className="me-2 fs-3" />
                                        {lesson.name} {/* Lesson name dynamically */}
                                        <LessonControlButtons />
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}
