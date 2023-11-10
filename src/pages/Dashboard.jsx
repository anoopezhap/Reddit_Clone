import Button from "../ui/Button";

function Dashboard() {
  return (
    <div>
      <Button type="primary" to="posts">
        Get all posts
      </Button>
      <Button type="primary" to="1234/posts">
        Get my posts
      </Button>
      <Button type="primary" to="1234/createpost">
        Create Post
      </Button>
    </div>
  );
}

export default Dashboard;
