import courses from "./courses.json";
import { Course } from "./types";  // Assuming types.ts or types.d.ts is in the same directory
import modules from "./modules.json";
import assignments from "./assignments.json";
import users from "./users.json";
import enrollments from "./enrollments.json";

const typedCourses: Course[] = courses;

export { typedCourses as courses, modules, assignments, users, enrollments };
