import React, { Fragment, useState } from "react";

import "./EditUser.css"

const EditUser = ({ user }) => {
  const [userId, setUser] = useState(user);

  //edit user function

  const updateUser = async e => {
    e.preventDefault();
    try {
      const body = { user };
      const response = await fetch(
        `https://video-game-987654321.herokuapp.com/users`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
      >
        Edit
      </button>
    </Fragment>
  );
};

export default EditUser;