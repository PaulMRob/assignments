import BookpostList from "./BookpostList";
import BookpostForm from "./BookpostForm";
import Bookpost from "./Bookpost";

const Public = (props) => {
  const { allBookposts, addBookpost, token } = props;

  return (
    <div className="public">
      {token && <BookpostForm addBookpost={addBookpost} />}
      <BookpostList bookposts={allBookposts.bookposts ? allBookposts.bookposts : []} />
    </div>
  );
};

export default Public;
