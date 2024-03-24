import React from "react";
import { Link } from "react-router-dom";
const Callback = () => {
  return (
    <section id="callback">
      <h1 class="text-white">Create your Dev Account</h1>
      <p class="text-white">
        Create account today and make yourself hireable. This will help
        recruiter to reach you
      </p>
      <p>
        {" "}
        <Link to="/register" class="btn btn-success">
          Register
        </Link>
      </p>
    </section>
  );
};

export default Callback;
