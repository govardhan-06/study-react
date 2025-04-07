import TaskManager from "./TaskManager";
import Reports from "./Reports";

const Dashboard = () => {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <TaskManager />
      <Reports />
    </div>
  );
};

export default Dashboard;
