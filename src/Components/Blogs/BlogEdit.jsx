import { Timestamp, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState }from 'react'
import { useParams } from "react-router-dom";
import { db } from '../../../firebaseConfig';
import { Editor } from "@tinymce/tinymce-react";

const BlogEdit = () => {
    const { id } = useParams();

    const [title , SetTitle] = useState("");
    const [body , SetBody] = useState("");

    useEffect(()=> {
        async function getData(){
            try {
              const docSnap = await getDoc(doc(db, "blogs", id));
        
              if (docSnap.exists()) {
                console.log(docSnap.data());
                const data = docSnap.data()
                SetTitle(data.Title);
                SetBody(data.Body);
              } else {
                // docSnap.data() will be undefined in this case
                console.log("No such document!");
              }
            } catch (err) {
              console.log(err);
            }
          }
          getData()
    },[]);

    const sub = (e) => {
        e.preventDefault();

        // Add data to the store
        updateDoc(doc(db, "blogs", id),{
            Title: title,
            Body: body,
            // last_Updated: new Timestamp(new Date())
        })
        .then((docRef) => {
            alert("Data Successfully Updated");
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }
    return (
        <div className='text-black'>

        <form onSubmit={(event) => {sub(event)}}>    
            <input 
            className=' border-2 px-4 py-2 m-2 border-gray-700 rounded bg-black shadow-xl text-white'
            type="text" placeholder="Title"  value={title}
            onChange={(e)=>{SetTitle(e.target.value)}} required />

{/* <Editor
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
              initialValue={body}
              onEditorChange={(e)=>{SetBody(e.target.value)}}
            /> */}
            <textarea
            className=' border-2 border-gray-700 rounded m-2 p-2'
              name="content" type="text" value={body}
            placeholder="write yoyr content here" 
            rows="10" cols="150" onChange={(e)=>{SetBody(e.target.value)}} required >
            </textarea>

            <button className=' px-4 py-2 bg-black text-white rounded m-2' type="submit">Submit</button>
        </form>
        </div>
    );
};

export default BlogEdit;