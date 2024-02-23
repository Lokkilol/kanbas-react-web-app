import React, { useState } from "react";
import { FaArrowDown, FaArrowUp, FaCheckCircle, FaEllipsisV, FaHandPaper, FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
  const { courseId } = useParams();
  const assignmentList = assignments.filter(
    (assignment) => assignment.course === courseId);
  const [showAssignmentList, setShowAssignmentList] = useState(true)
  return (
    <>
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div>
            {!showAssignmentList && <FaArrowDown className="me-2" onClick={() => setShowAssignmentList(!showAssignmentList)}/>} 
            {showAssignmentList && <FaArrowUp className="me-2" onClick={() => setShowAssignmentList(!showAssignmentList)}/>} 
            
            ASSIGNMENTS (Click the Arrow!)
            <span className="float-end">
              <FaCheckCircle className="text-success" />
              <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
            </span>
          </div>
          
          {showAssignmentList && <ul className="list-group">
            {assignmentList.map((assignment) => (
              <li className="list-group-item">
                <FaHandPaper className="me-2" />
                <Link
                   to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>{assignment.title}</Link>
                   <br /> 
                   Due Date: {assignment.dueDate}
                <span className="float-end">
                  <FaCheckCircle className="text-success" /><FaEllipsisV className="ms-2" /></span>
              </li>))}
          </ul>}
        </li>
      </ul>
    </>
);}
export default Assignments;