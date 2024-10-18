import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Assignments from "./index";
import AssignmentEditor from "./Editor";

export default function App() {
    return (
        <Router>
            <Routes>
                {/* Route for viewing assignments of a specific course */}
                <Route path="/courses/:courseId/assignments" element={<Assignments />} />

                {/* Route for editing a specific assignment */}
                <Route path="/courses/:courseId/assignments/:assignmentId" element={<AssignmentEditor />} />
            </Routes>
        </Router>
    );
}
