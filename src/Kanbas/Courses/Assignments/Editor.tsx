import { useParams, Link } from "react-router-dom";
import assignments from '../../Database/assignments.json'; // Import assignments data

export default function AssignmentEditor() {
    const { cid, aid } = useParams(); // Extract courseId (cid) and assignmentId (aid) from URL

    // Find the assignment by its ID
    const assignment = assignments.find(a => a._id === aid);

    // If no assignment is found, return a message
    if (!assignment) {
        return <div>Assignment not found.</div>;
    }

    return (
        <div id="wd-assignments-editor" className="container-fluid p-4">
            <h2>Editing Assignment: {assignment.title} for Course: {cid}</h2>

            {/* Assignment editor UI */}
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input id="wd-name" className="form-control" value={assignment.title} readOnly />
                </div>
            </div>

            {/* Assignment Description */}
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="wd-description" className="form-label">Assignment Description</label>
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        defaultValue={assignment.description || "No description available."}
                    />
                </div>
            </div>

            {/* Points */}
            <div className="row mb-4">
                <div className="col-4 text-end">
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-8">
                    <input id="wd-points" className="form-control border" value={100} readOnly />
                </div>
            </div>

            {/* Assignment Group */}
            <div className="row mb-4">
                <div className="col-4 text-end">
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-8">
                    <select id="wd-group" className="form-control border">
                        <option value="assignments">Assignments</option>
                    </select>
                </div>
            </div>

            {/* Submission Type and Online Entry Options */}
            <div className="row mb-4">
                <div className="col-4 text-end">
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-8">
                    <div className="border p-3 rounded">
                        <select id="wd-submission-type" className="form-control mb-3">
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                        </select>

                        <div className="mb-3">
                            <label className="form-label">Online Entry Options</label>
                            <div className="form-check">
                                <input id="wd-text-entry" type="checkbox" className="form-check-input" />
                                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                            </div>
                            <div className="form-check">
                                <input id="wd-website-url" type="checkbox" className="form-check-input" defaultChecked />
                                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                            </div>
                            <div className="form-check">
                                <input id="wd-media-recordings" type="checkbox" className="form-check-input" />
                                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                            </div>
                            <div className="form-check">
                                <input id="wd-file-upload" type="checkbox" className="form-check-input" />
                                <label htmlFor="wd-file-upload" className="form-check-label">File Upload</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Assign Section */}
            <div className="row mb-4">
                <div className="col-4 text-end">
                    <label className="form-label">Assign</label>
                </div>
                <div className="col-8">
                    <div className="border p-3 rounded">
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                            <input id="wd-assign-to" type="text" className="form-control" value="Everyone" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label">Due</label>
                            <input id="wd-due-date" type="datetime-local" className="form-control" value="2024-05-13T23:59" />
                        </div>

                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                <input id="wd-available-from" type="datetime-local" className="form-control" value="2024-05-06T00:00" />
                            </div>
                            <div className="col-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input id="wd-available-until" type="datetime-local" className="form-control" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="row mt-4">
                <div className="col-12 text-end">
                    {/* Cancel button - Navigates back to the Assignments list */}
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-light me-2">
                        Cancel
                    </Link>
                    {/* Save button - For now, it also navigates back to the Assignments list */}
                    <Link to={`/Kanbas/Courses/${cid}/Assignments`} className="btn btn-danger">
                        Save
                    </Link>
                </div>
            </div>
        </div>
    );
}
