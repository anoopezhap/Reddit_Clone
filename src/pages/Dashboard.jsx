import Button from "../ui/Button";

function Dashboard() {
  return (
    <div>
      <Button type="primary" to="posts">
        Get all posts
      </Button>
      <Button type="primary" to="myposts">
        Get my posts
      </Button>
      <Button type="primary" to="createpost">
        Create Post
      </Button>
    </div>
  );
}

export default Dashboard;
