import ModuleList from "../Modules/List";
import Status from "../status";
import './styles.css'


function Home() {
  return (
    <div>
      <div className="content">
        <div className="home">
          <h2>Home</h2>
          <ModuleList />
        </div>
        <div className="status">
          <h2>Status</h2>
          <Status />
        </div>
        
      </div>
    </div>
  );
}
export default Home;