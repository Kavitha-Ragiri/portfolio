import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-grid">

        <div className="project-card">
          <h3>E-Commerce Website</h3>
          <p>Complete e-commerce UI...</p>
          <button onClick={() => navigate("/projectDetails/ecommerce")}>View Project</button>
        </div>

        <div className="project-card">
          <h3>Expense Tracker System</h3>
          <p>Track your expenses easily.</p>
          <button onClick={() => navigate("/projectDetails/expenseTrackerSystem")}>View Project</button>
        </div>

        <div className="project-card">
          <h3>Todo App</h3>
          <p>Task manager with CRUD features</p>
          <button onClick={() => navigate("/projectDetails/todo")}>View Project</button>
        </div>

        <div className="project-card">
          <h3>Student Records App</h3>
          <p>Student Details CRUD features</p>
          <button onClick={() => navigate("/projectDetails/studentRecords")}>View Project</button>
        </div>

      </div>
    </section>
  );
}
export default Projects