import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

const DiscussionForm = (props) => {
  const [discussionForm, setDiscussionForm] = useState({ discussion: "" });

  const { postID, setDiscussion } = props;
  const { userAxios } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setDiscussion((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    addDiscussion(postID, discussionForm);
    setDiscussionForm({ discussion: "" });
  }

  function addDiscussion(id, newDiscussion) {
    userAxios
      .post(`api/discussion/${id}`, newDiscussion)
      .then((res) => {
        setDiscussion((prev) => [...prev, res.data]);
      })
      .catch((err) => console.log(err.resposne.data.errMsg));
  }
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
      <input
        type="text"
        value={discussionForm.discussion}
        name="discussion"
        onChange={handleChange}
        placeholder="Write your thoughts here..."
      />
    </form>
  );
};

export default DiscussionForm;
