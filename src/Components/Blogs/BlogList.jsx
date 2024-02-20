import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import Loading from '../Home/Loading';

const Blogs = collection(db, "blogs");

const Bloglist = () => {
  const [blogslist, setblogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
    await deleteDoc(doc(db, "blogs", id))
      .then(() => {
        alert("Document successfully deleted!");
      })
      .catch((error) => {
        console.error("Error removing document: ", error);
      });
  }
  return (
    <>
      {loading ? (
        <Loading/>
      ) : (
        <div className=" text-black">
          <h2 className="w-full text-center font-bold text-xl">
            All blogs List
          </h2>

          <div className=" flex flex-wrap gap-2">
            {blogslist.map((blog) => (
              <div key={blog.id} className=" border-2 ">
                <img className=" w-64 h-40 object-cover" src={blog.coverImg} />
                <p>Title : {blog.Title}</p>
                <Link
                  to={"/blog/" + blog.id}
                  class="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded"
                >
                  View
                </Link>
                <Link
                  to={"/blog/edit/" + blog.id}
                  class="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 border border-blue-500 rounded"
                >
                  Edit
                </Link>
                <button
                  className=" bg-red-600 text-white p-1 rounded-md"
                  onClick={() => deleteBlog(blog.id)}
                >
                  delete
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Bloglist;
