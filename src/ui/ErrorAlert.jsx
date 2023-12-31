function ErrorAlert() {
  return (
    <div
      className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
      role="alert"
    >
      <strong className="font-bold">Holy smokes!</strong>
      <span className="block sm:inline">Wrong user name or password</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
    </div>
  );
}

export default ErrorAlert;
