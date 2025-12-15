import { useNavigate, useParams } from "react-router-dom";


function ProjectDetails() {
  const { projectName } = useParams();
  const navigate = useNavigate();

  function projectLinks(){
    
    if(projectName === "ecommerce"){
     return window.open("https://e-commerce-website-dusky-zeta.vercel.app/","_blank")
    }
     if(projectName === "todo"){
     return window.open("https://github.com/Kavitha-Ragiri/Todo-List","_blank")
    }
    if(projectName === "studentRecords"){
     return window.open("https://github.com/Kavitha-Ragiri/Students_Records","_blank")
    }
     if(projectName === "expenseTrackerSystem"){
     return window.open("https://github.com/Kavitha-Ragiri/Expense_manager","_blank")
    }

  }
    

  return (
    <div className="project-details-container">
      <h1> {projectName}</h1>

      {projectName === "ecommerce" && (
        <div>
        <p>

            Developed a full-featured e-commerce platform with React.js for frontend and REST APIs for product data.

            Implemented user authentication with Login and Register functionality.

            Designed category-based product display and advanced filtering by price and category.

            Integrated search functionality to allow users to quickly find products.

            Built a cart page with add/remove items and dynamic total calculation.

            Ensured responsive design for seamless experience across desktop, tablet, and mobile devices.

            Focused on UI/UX best practices, resulting in a user-friendly shopping experience.
        </p>
          <p>Tech Stack: <span className="tech-stack">HTML, CSS, BootStrap, ReactJs</span></p>
        </div>
      )}

      {projectName === "todo" && (
        <div>
          <p>Built a feature-rich task management application with
            
             add, edit, and delete functionality using HTML5 & ReactJs.</p>
          <p>Tech Stack: <span className="tech-stack">HTML, CSS, ReactJs</span></p>
        </div>
      )}

      {projectName === "studentRecords" && (
        <div>
          <p>Developed a React-based CRUD application to manage 
            
            student details with a global JSON Server as a data source.</p>
          <p>Tech Stack: <span className="tech-stack">HTML, CSS, ReactJs</span></p>
        </div>
      )}

      {projectName === "expenseTrackerSystem" && (
        <div>
          <p>
            Expense Tracker is a comprehensive financial management system designed to help users efficiently track, 
            manage,and analyze their daily expenses. With an intuitive dashboard, detailed expense categorization, 
            and robust user management, it ensures seamless financial tracking. Key features include expense logging, 
            advanced filtering, budget management, customizable themes, and secure authentication. The system 
            enhances user experience through
            interactive visualizations, real-time updates, and personalized settings, making expense tracking effortless 
            and insightful. User-Friendly Interface: Built with React Js, the application offers a responsive and intuitive 
            user experience.
          </p>
          <p>Tech Stack: <span className="tech-stack">HTML, CSS, ReactJs</span></p>
        </div>
      )}


      <button className="back-btn" onClick={() => navigate("/")}>Back To Home</button>
      <button className="back-btn" onClick={() => projectLinks("www.google.com")}>
        Go To Live</button>
    </div>
  );
}

export default ProjectDetails;
