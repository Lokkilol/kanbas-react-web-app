import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  return (
    <div>
      <h1>
        <HiMiniBars3 /> 
        Course {course?.name}</h1>
    
        <CourseNavigation />
        <div>
            <div
                className="overflow-y-scroll position-fixed bottom-0 end-0"
                style={{ left: "320px", top: "50px" }} >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Piazza" element={<h1>Piazza</h1>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                    <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                    <Route path="People" element={<h1>People</h1>} />
                    <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                    <Route path="Credentials" element={<h1>Credentials</h1>} />
                    <Route path="Progress Reports (EAB Navigate)" element={<h1>Progress Reports</h1>} />
                    <Route path="Grades" element={<h1>Grades</h1>} />
                </Routes>
            </div>
        </div>
      </div>

  );
}
export default Courses;