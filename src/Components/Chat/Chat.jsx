import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../../firebaseConfig";
import { BiCommentDetail } from "react-icons/bi";
function Chat() {
  const navigate = useNavigate();
  // const q = query(collection(db, "queries"));
  const [datas, setData] = useState(null);

  useEffect(() => {
    try {
      async function getData() {
        // const querySnapshot = await getDocs(collection(db,'queries'));
        await getDocs(collection(db, "queries")).then((querySnapshot) => {
          const newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setData(newData);
          console.log(newData);
        });
      }
      getData();
    } catch (errr) {
      console.log(errr);
    }
  }, []);
  return (
    <div>
      <div className=" bg-gray-300 text-3xl font-Poppins flex gap-4 w-4/5 mx-auto p-3 justify-center items-center my-3 rounded-md">
        <h1>Ask a Question?</h1>
        <button
          onClick={() => navigate("/community/create")}
          className=" bg-blue-500 p-2 text-white rounded"
        >
          Create
        </button>
      </div>
      <div className=" flex flex-col gap-3">
        {datas?.map((data) => (
          <div className="bg-slate-100 p-2 rounded w-11/12 mx-auto flex flex-col gap-2">
            <div className=" font-Poppins">
              <h4 className=" text-sm "> Asked By : {data?.name}</h4>
              <h3 className=" text-xl">{data?.title}</h3>
              <div className="bg-gray-200 p-2 rounded-md">
                <code>{data?.description}</code>
              </div>
            </div>
            <hr className=" bg-black border"></hr>
            <div>
              <BiCommentDetail />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Chat;
