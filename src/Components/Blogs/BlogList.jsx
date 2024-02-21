import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import Loading from "../Home/Loading";
import AuthContext from "../Auth/LoginContainer";

const Blogs = collection(db, "blogs");

const Bloglist = () => {
  const [blogslist, setblogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);

  useEffect(() => {
    // Subscribe to query with onSnapshot
    const unsubscribe = onSnapshot(collection(db, "blogs"), (querySnapshot) => {
      // Get all documents from collection - with IDs
      const data = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      // Update state
      setLoading(false);
      setblogs(data);
    });

    // Detach listener
    return unsubscribe;
  }, []);

  async function deleteBlog(id) {
    setLoading(true)
    await deleteDoc(doc(db, "blogs", id))
      .then(() => {
        setLoading(false)
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className=" text-black p-3 font-openSans">
          <h2 className="w-full text-center font-bold text-xl  underline">
            All blogs List
          </h2>

          <div className=" flex flex-wrap gap-2 mt-3">
            {blogslist.map((blog) => (
              <div key={blog.id} className=" border-2 rounded-md p-3 flex flex-col items-center shadow-xl">
                <img className=" w-64 h-40 object-cover rounded-md" src={blog.coverImg} />
                <h1 className=" text-md font-Poppins font-medium">Title : {blog.Title}</h1>
                <span className="bg-purple-200 p-1 px-2 uppercase text-sm rounded-full text-purple-700 mb-3">{blog.Tag}</span>
                <div className=" flex gap-1">
                <Link
                  to={"/blog/" + blog.id}
                  class=" font-Poppins mr-2 bg-blue-600 hover:bg-blue-800 text-white font-medium py-1 px-4 border border-indigo-500 rounded"
                >
                  View
                </Link>
                {user ? (
                  <>
                    <Link
                      to={"/blog/edit/" + blog.id}
                      class="mr-2 px-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 border border-blue-500 rounded"
                    >
                      Edit
                    </Link>
                    <button
                      className=" capitalize px-3 font-medium bg-red-600 text-white p-1 rounded-md"
                      onClick={() => deleteBlog(blog.id)}
                    >
                      delete
                    </button>
                  </>
                ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Bloglist;
