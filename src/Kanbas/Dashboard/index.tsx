import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "../Database";
import "./index.css"
function Dashboard() {
  const lenOfCourses = courses.length
  const [listOfCourses, setListOfCourses] = useState(courses);
  const updateCourse = () => {
    setListOfCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };

  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "react.png"
  });
  const addNewCourse = () => {
    const newCourse = { ...course,
                        _id: new Date().getTime().toString() };
    setListOfCourses([...courses, { ...course, ...newCourse }]);
  };
   const deleteCourse = (courseId: string) => {
    setListOfCourses(courses.filter((course) => course._id !== courseId));
  };


  return (
    <div className="p-4">
      <h1>Dashboard</h1>              <hr />
      
      <div className="add-update-div"> 
        <h5>Add or Update Course</h5>
        <input value={course.name} className="form-control"
              onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
        <input value={course.number} className="form-control"
              onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
        <input value={course.startDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
        <input value={course.endDate} className="form-control" type="date"
              onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
              <div className="button-div">
        <button className="btn btn-primary" style={{backgroundColor:"green", borderColor:"green", marginRight: "10px"}} onClick={addNewCourse} >

          Add
        </button>
        <button className="btn btn-primary" style={{backgroundColor:"blue", borderColor:"blue"}} onClick={updateCourse} >
          Update
        </button>
      </div>

      </div>
      

      <h2>Published Courses ({lenOfCourses})</h2> <hr />
      <div className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {listOfCourses.map((course) => (
            <div key={course._id} className="col" style={{ width: 300}}>
              <div className="card">
                <img src={`${course.image}`} className="card-img-top"
                     style={{ height: 150 }} alt=""/>
                <div className="card-body">
                  <Link className="card-title" to={`/Kanbas/Courses/${course._id}/Home`}
                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                    {course.name} </Link>
                    <br />
                    <button className="btn btn-primary" style={{backgroundColor: "green", marginRight: "10px"}} onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}>
                    Edit
                  </button>
                  <button className="btn btn-primary" style={{backgroundColor:"red", borderColor:"red"}} onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}>
                    Delete
                  </button>
                  <p className="card-text">{course.name}</p>
                  <Link to={`/Kanbas/Courses/${course._id}/Home`} className="btn btn-primary">
                    Go </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;