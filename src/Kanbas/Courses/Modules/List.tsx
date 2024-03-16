import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { KanbasState } from "../../store";
import { addModule, deleteModule, setModule, updateModule } from "./reducer";
function ModuleList() {
  const { courseId } = useParams();
  
  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
  // const [moduleList, setModuleList] = useState(modules);
  // const modulesList = moduleList.filter((module) => module.course === courseId);
  // const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  // const [module, setModule] = useState({
  //   name: "New Module",
  //   description: "New Description",
  //   course: courseId,
  // });

  // const addModule = (module: any) => {
  //   const newModule = { ...module,
  //     _id: new Date().getTime().toString() };
  //   const newModuleList = [newModule, ...moduleList];
  //   setModuleList(newModuleList);
  // };

  // const deleteModule = (moduleId: string) => {
  //   const newModuleList = moduleList.filter(
  //     (module) => module._id !== moduleId );
  //   setModuleList(newModuleList);
  // };

  // const updateModule = (moduleId: string, moduleName: string) => {
  //   const newModuleList = moduleList.map((m) => {
  //     if (m._id === moduleId) {
  //       const newModule = { ...m,
  //       name: moduleName };
  //       return newModule
  //     } else {
  //       return m;
  //     }
  //   });
  //   setModuleList(newModuleList);
  // }

  

  return (
    <>
      {/* <!-- Add buttons here --> */}
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <div className="modules-op">
            {/* <input className="module-op-text" value={module.name}
                onChange={(e) => setModule({
                  ...module, name: e.target.value })}
            /> */}
            <input className="module-op-text" value={module.name}
                onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
              <div style={{float:"right"}}>
                {/* <button className="button-op" onClick={() => { addModule(module) }}>Add</button>  */}
                <button className="button-op" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add</button> 
                {/* <button className="button-op" onClick={() => updateModule(selectedModule._id, module.name)}>
                        Update
                </button> */}
                <button className="button-op" onClick={() => dispatch(updateModule(module))}>
                        Update
                </button>
              </div>
              
              
          </div>
          {/* <textarea className="module-op-text" value={module.description}
                onChange={(e) => setModule({
                  ...module, description: e.target.value })}
              /> */}
            <textarea className="module-op-text" value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            />

      </li>

        {moduleList.filter((module) => module.course === courseId).map((module) => (
          <li
            className="list-group-item"
            onClick={() => dispatch(setModule(module))}>

            <div>
               
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <button className="button-op" style={{ backgroundColor: 'red' }}
                  onClick={() => dispatch(deleteModule(module._id))}>

                  Delete
                </button>
                <button className="button-op"
                  onClick={() => { setModule(module); }}>
                  Edit
                </button>

                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {/* {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )} */}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ModuleList;