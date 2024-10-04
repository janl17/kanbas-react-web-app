export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="container-fluid p-4">

            {/* Assignment Name */}
            <div className="row mb-4">
                <div className="col-12">
                    <label htmlFor="wd-name" className="form-label">Assignment Name</label>
                    <input
                        id="wd-name"
                        className="form-control"
                        value="A1 - ENV + HTML"
                    />
                </div>
            </div>

            {/* Assignment Description */}
            <div className="row mb-4">
                <div className="col-12">
                    {/*<label htmlFor="wd-description" className="form-label">Description</label>*/}
                    <textarea
                        id="wd-description"
                        className="form-control"
                        rows={4}
                        defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Netlify."
                    />
                </div>
            </div>

            {/* Points, Assignment Group, and Display Grade */}
            <div className="row mb-4">
                <div className="col-4 text-end"> {/* Added text-end */}
                    <label htmlFor="wd-points" className="form-label">Points</label>
                </div>
                <div className="col-8">
                    <input id="wd-points" className="form-control border" value={100} />
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-4 text-end"> {/* Added text-end */}
                    <label htmlFor="wd-group" className="form-label">Assignment Group</label>
                </div>
                <div className="col-8">
                    <select id="wd-group" className="form-control border">
                        <option value="assignments">Assignments</option>
                    </select>
                </div>
            </div>

            <div className="row mb-4">
                <div className="col-4 text-end"> {/* Added text-end */}
                    <label htmlFor="wd-display-grade-as" className="form-label">Display Grade As</label>
                </div>
                <div className="col-8">
                    <select id="wd-display-grade-as" className="form-control border">
                        <option value="percentage">Percentage</option>
                        <option value="points">Points</option>
                    </select>
                </div>
            </div>

            {/* Submission Type and Online Entry Options in one box */}
            <div className="row mb-4">
                <div className="col-4 text-end"> {/* Added text-end */}
                    <label htmlFor="wd-submission-type" className="form-label">Submission Type</label>
                </div>
                <div className="col-8">
                    <div className="border p-3 rounded">
                        {/* Submission Type Dropdown */}
                        <select id="wd-submission-type" className="form-control mb-3">
                            <option value="online">Online</option>
                            <option value="paper">Paper</option>
                        </select>

                        {/* Online Entry Options */}
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
                <div className="col-4 text-end"> {/* Added text-end */}
                    <label className="form-label">Assign</label>
                </div>
                <div className="col-8">
                    <div className="border p-3 rounded">
                        {/* Assign To */}
                        <div className="mb-3">
                            <label htmlFor="wd-assign-to" className="form-label">Assign to</label>
                            <input
                                id="wd-assign-to"
                                type="text"
                                className="form-control"
                                value="Everyone"
                            />
                        </div>

                        {/* Due Date */}
                        <div className="mb-3">
                            <label htmlFor="wd-due-date" className="form-label">Due</label>
                            <input
                                id="wd-due-date"
                                type="datetime-local"
                                className="form-control"
                                value="2024-05-13T23:59"
                            />
                        </div>

                        {/* Available From and Until */}
                        <div className="row">
                            <div className="col-6">
                                <label htmlFor="wd-available-from" className="form-label">Available from</label>
                                <input
                                    id="wd-available-from"
                                    type="datetime-local"
                                    className="form-control"
                                    value="2024-05-06T00:00"
                                />
                            </div>
                            <div className="col-6">
                                <label htmlFor="wd-available-until" className="form-label">Until</label>
                                <input
                                    id="wd-available-until"
                                    type="datetime-local"
                                    className="form-control"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save and Cancel Buttons */}
            <div className="row mt-4">
                <div className="col-12 text-end">
                    <button className="btn btn-light me-2">Cancel</button>
                    <button className="btn btn-danger">Save</button>
                </div>
            </div>
        </div>
    );
}
