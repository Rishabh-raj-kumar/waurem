import React, { useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, Timestamp, FieldValue } from "firebase/firestore";
import { Editor } from "@tinymce/tinymce-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Loading from '../Home/Loading'

function Create() {
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [body, setBody] = useState("");
  const [cover, setCover] = useState(null);
  const [loading, setLoading] = useState(false);
  const storage = getStorage();

  const handleCoverChange = (e) => {
    if (e.target.files[0]) {
      setCover(e.target.files[0]);
    }
  };
  const sub = (e) => {
    e.preventDefault();
    setLoading((loading) => !loading);
    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "images/" + cover.name);
    const uploadTask = uploadBytesResumable(storageRef, cover, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        switch (error.code) {
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            break;
          case "storage/canceled":
            // User canceled the upload
            break;

          // ...

          case "storage/unknown":
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      },
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          addDoc(collection(db, "blogs"), {
            Title: title,
            Body: body,
            Tag: tag.toLowerCase(),
            publish: false,
            coverImg: downloadURL,
          })
            .then((docRef) => {
              setLoading((loading) => !loading);
              alert("data added successfully ....");
            })
            .catch((err) => {
              alert("There is some error...", err);
              console.log(err);
            });
        });
      }
    );
  };
  return (
    <>
      { loading ? <Loading/> :
        <div>
          <form
            onSubmit={(event) => {
              sub(event);
            }}
          >
            <input
              className=" border-2 rounded-sm m-3 outline-none text-gray-700 p-2 text-xl"
              type="text"
              placeholder="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              required
            />
            <input
              className=" border-2 rounded-sm m-3 outline-none text-gray-700 p-2 text-xl"
              type="text"
              placeholder="Tag"
              onChange={(e) => {
                setTag(e.target.value);
              }}
              required
            />
            <div className=" text-gray-700 space-x-5 border-2 m-2 p-2">
              <label>Select Cover Image</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleCoverChange}
              />
            </div>

            <Editor
              apiKey="yxo39oibjoyjkehvumalh3aoq2bp37nf8yw2sdq94yiywmxk"
              init={{
                height: 400,
                menubar: false,
                plugins:
                  "anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",
                toolbar:
                  "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                tinycomments_mode: "embedded",
                tinycomments_author: "Author name",
                mergetags_list: [
                  { value: "First.Name", title: "First Name" },
                  { value: "Email", title: "Email" },
                ],
                ai_request: (request, respondWith) =>
                  respondWith.string(() =>
                    Promise.reject("See docs to implement AI Assistant")
                  ),
              }}
              initialValue="Hey edit some text...."
              onEditorChange={(newText) => setBody(newText)}
            />

            <button
              className="bg-black px-5 py-2 tracking-wide uppercase m-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      }
    </>
  );
}

export default Create;
