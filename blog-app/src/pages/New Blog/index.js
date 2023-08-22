import React, { useState } from "react";
import NewBlog from "../../component/NewBlog";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../../helper";
import { useCookies } from "react-cookie";

function NewBlogPage() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [file, setFile] = useState("");
  // const[content,setContent]=useState("");
  const navigate = useNavigate();
  let nameVal = cookies.name;
  const date = new Date();
  console.log("date", date);

  const handleBlog = async () => {
    const payload = {
      title: title,
      summary: summary,
      file: file,
      name: nameVal,
      date: date,
      // content:content
    };
    console.log("payload", payload);
    if (
      title !== "" &&
      title !== null &&
      summary !== "" &&
      summary !== null &&
      file !== "" &&
      file !== null
    ) {
      try {
        const result = await createBlog(payload);
        console.log("payloadResult", result);
        navigate("/");
      } catch (error) {
        console.log("handleblog error", error);
      }
    } else {
      console.log("Title and Summary must be filled");
      alert("Title and Summary must be filled");
    }
  };

  // const handleImage = (e) => {
  //   console.log(e.target.file);
  //   setFile(URL.createObjectURL(e.target.files[0]));
  // };

  //  const getBase64 = file => {
  //       return new Promise(resolve => {
  //         let fileInfo;
  //         let baseURL = "";
  //         let reader = new FileReader();

  //         reader.readAsDataURL(file);

  //         // on reader load somthing...
  //         reader.onload = () => {
  //           // Make a fileInfo Object
  //           console.log("Called", reader);
  //           baseURL = reader.result;
  //           console.log(baseURL);
  //           resolve(baseURL);
  //         };
  //         console.log(fileInfo);
  //       });
  //     };
  //   const handleImage =(e)=>{
  // const file = e.target.files[0]
  //       console.log(e.target.files[0])
  //       getBase64(file).then(result => {
  //           // file["base64"] = result;
  //           setFile({
  //             base64:result,
  //             name:file.name,
  //             size:file.size,
  //             type:file.type
  //           }

  //           );
  //         })

  //   }

  console.log("cookies", cookies);

  console.log("filesssss===>", file);
  return (
    <div className="newbolg">
      <NewBlog
        title={title}
        setTitle={setTitle}
        summary={summary}
        nameVal={nameVal}
        date={date}
        setSummary={setSummary}
        handleBlog={handleBlog}
        setFile={setFile}
        file={file}
        // handleImage={handleImage}
        // content={content}
        // setContent={setContent}
      />
    </div>
  );
}

export default NewBlogPage;
