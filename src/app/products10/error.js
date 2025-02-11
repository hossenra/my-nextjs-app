"use client";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-center text-red-500 my-5 text-xl">
        Something Went Wrong!!!
      </h1>
      <p>{error.message}</p>
      <button>Try Again</button>
    </div>
  );
};

export default ErrorPage;
