import React, { useState } from "react";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, Timestamp, FieldValue } from "firebase/firestore";
import { Editor } from "@tinymce/tinymce-react";
import { getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage';

function Create() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [cover,setCover] = useState(null);
  const storage = getStorage();

  const handleCoverChange = (e) =>{
    if(e.target.files[0]){
      setCover(e.target.files[0])
    }
  }
  const sub = (e) => {
    e.preventDefault();
    const metadata = {
      contentType: 'image/jpeg'
    };
    
    const storageRef = ref(storage, 'images/' + cover.name);
    const uploadTask = uploadBytesResumable(storageRef, cover, metadata);
    
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {

        switch (error.code) {
          case 'storage/unauthorized':
            // User doesn't have permission to access the object
            break;
          case 'storage/canceled':
            // User canceled the upload
            break;
    
          // ...
    
          case 'storage/unknown':
            // Unknown error occurred, inspect error.serverResponse
            break;
        }
      }, 
      () => {
      
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          addDoc(collection(db, "blogs"), {
            Title: title,
            Body: body,
            publish: false,
            coverImg : downloadURL
          })
            .then((docRef) => {
              alert("data added successfully ....");
            })
            .catch((err) => {
              alert("There is some error...", err);
              console.log(err)
            });
        });
      }
    );
  
  };
  return (
    <div>
      <form
        onSubmit={(event) => {
          sub(event);
        }}
      >
        <input
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          required
        />
        <input type="file" accept="image/*" onChange={handleCoverChange} />

<Editor
      apiKey='bhsxsod5es6p13a7rthahghutole9fgqw19hyhyzxh5526fx'
      init={{
        height: 500,
        menubar: false,
        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Hey edit some text...."
      onEditorChange={(newText) => setBody(newText)}
    />

        <button className="bg-black" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Create;
