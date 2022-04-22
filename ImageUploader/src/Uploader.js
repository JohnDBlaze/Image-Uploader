import React, {useState} from 'react';
import "./Uploader.css";
import FileBase64 from 'react-file-base64';
import { useNavigate } from "react-router";
import axios from 'axios';

function Uploader() {

  const [images, setImage] = useState({
    img: null,
  });

const navigate = useNavigate();

// const updateForm = (e) => {
//     setImage(e.target.files);
// };

  const onSubmit = ((e) => {
    e.preventDefault();

    const url = "http://localhost:9000/pic/add";

    axios.post(url, images).then((response) => {
        setImage(response.data)
        window.alert("Upload Successfully")
      })
      .catch(error => {
        window.alert(error);
        return;
      });
      navigate("/display");
  })

  return (
    <div class="container">
        <h1>Image Uploader</h1>
        <form onSubmit={onSubmit}>
            <h3>Upload a PNG Image</h3>
            {/* <input type="file" name="img" id="img" accept='.png' onChange={updateForm}/><br/><br/> */}
            <FileBase64
multiple={false}
onDone={({ base64 }) => setImage({ ...images, img: base64 })} max-size="2000"
/><br/><br/>
            <button type="submit" class="btns">Upload</button>
        </form>
    </div>
  )
}

export default Uploader