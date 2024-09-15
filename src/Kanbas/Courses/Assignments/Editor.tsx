export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

      <textarea id="wd-description">
        The assignment is available online. Submit a link to the landing page of
      </textarea>
      <br />

      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Group Assignment</label>
          </td>
          <td>
            <input id="wd-group" type="checkbox" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade As</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="percentage">Percentage</option>
              <option value="points">Points</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
              <option value="online">Online</option>
              <option value="paper">Paper</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-text-entry">Text Entry</label>
          </td>
          <td>
            <input id="wd-text-entry" type="checkbox" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-website-url">Website URL</label>
          </td>
          <td>
            <input id="wd-website-url" type="checkbox" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </td>
          <td>
            <input id="wd-media-recordings" type="checkbox" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-file-upload">File Upload</label>
          </td>
          <td>
            <input id="wd-file-upload" type="checkbox" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign To</label>
          </td>
          <td>
            <input id="wd-assign-to" type="text" placeholder="Enter group or student" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-due-date">Due Date</label>
          </td>
          <td>
            <input id="wd-due-date" type="date" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-from">Available From</label>
          </td>
          <td>
            <input id="wd-available-from" type="date" />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-available-until">Available Until</label>
          </td>
          <td>
            <input id="wd-available-until" type="date" />
          </td>
        </tr>
      </table>
    </div>
  );
}
