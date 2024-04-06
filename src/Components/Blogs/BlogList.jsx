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
    setLoading(true);
    await deleteDoc(doc(db, "blogs", id))
      .then(() => {
        setLoading(false);
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
        <div className=" text-black p-3 font-openSans my-5">
          <h2 className="w-full text-center font-bold text-4xl text-green-600 ">
            BLOGS
          </h2>

          <div className=" flex flex-wrap gap-6 mt-5 mb-5">
            {blogslist.map((blog) => (
              <div
                key={blog.id}
                className=" border-2 rounded-md p-3 flex flex-col items-center shadow hover:shadow-xl text-green-600 "
                style={{ width: "calc(33% - 1rem)" }}
              >
                <div className="w-full h-56 object-cover rounded-md overflow-hidden">
                  <img
                    className=" hover:scale-125 transition-all delay-150"
                    src={blog.coverImg}
                  />
                </div>
                <h1 className=" text-md font-Poppins font-medium my-2 ">
                  Title : {blog.Title}
                </h1>
                <span className="bg-gray-200 p-1 px-2 uppercase text-sm rounded-full text-gray-700 mb-3">
                  {blog.Tag}
                </span>
                <div className=" flex gap-1">
                  <Link
                    to={"/blog/" + blog.id}
                    class=" font-georgia mr-2 bg-blue-600 hover:bg-blue-800 text-white font-medium py-1 px-4 border border-indigo-500 rounded"
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

      <footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="https://flowbite.com/" class="hover:underline">
              WAUREM
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline me-4 md:me-6">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Bloglist;
