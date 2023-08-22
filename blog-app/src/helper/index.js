import axios from "axios";
const localBaseURL = "http://localhost:4001";

export const registerUser = async (data) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
      data: data,
    };
    const result = await axios.post(`${localBaseURL}/register`, data, config);

    console.log("result:", result);
  } catch (error) {
    console.log("register error", error);
  }
};

export const loginUser = async (data) => {
  try {
    const config = {
      // method:"POST",
      // url:`http://localhost:4001/login`,
      headers: {
        Accept: "application/json",
      },
      // withCredentials: true,
      data: data,
    };
    // const result = await axios(config);
    const result = await axios.post(`${localBaseURL}/login`, data, config);
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log("login error", error);
  }
};

export const createBlog = async (data) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
      data: data,
    };
    const result = await axios.post(`${localBaseURL}/newblog`, data, config);
    console.log("result", result.data);
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log("blog error", error);
  }
};

// export const uploadFile=async(file)=>{
//     try {
//         const config={
//             // method:"POST",
//             // url:`http://localhost:4001/newblog`,
//             headers:{
//                 Accept: 'application/json',
//               },
//             file:file,
//         }
//         const result = await axios.post(`${localBaseURL}/newblog`,data,config);
//         console.log("result", result.data)
//         if(result && result.data){
//             return result.data
//         }
//     } catch (error) {
//         console.log("blog error",error)
//     }
// }

export const getBlog = async (data) => {
  try {
    const config = {
      // method:"GET",
      // url:`http://localhost:4001/newblog`,
      headers: {
        Accept: "application/json",
      },
      // data:data,
    };
    const result = await axios.get(`${localBaseURL}/getallBlog`, config);
    // axios.get(`${localBaseURL}`,config)
    // axios.post(`${localBaseURL}/`,body,config)
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log("blog error", error);
  }
};

export const getSingleBlog = async (id) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const result = await axios.get(`${localBaseURL}/blog?id=${id}`, config);
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log("blog error", error);
  }
};

export const updateBlog = async (id, data) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    // debugger
    const result = await axios.put(
      `${localBaseURL}/update?id=${id}`,
      data,
      config
    );
    if (result && result.data) {
      return result.data;
    }
  } catch (error) {
    console.log("blog error", error);
  }
};

export const deleteBlog = async (id) => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
      body: JSON.stringify({
        userid: id,
      }),
    };
    // debugger
    const result = await axios.delete(
      `${localBaseURL}/deleteblog?id=${id}`,
      config
    );
    console.log("idddd", id);
    // if(result && result.data){
    //     return ""
    // }
  } catch (error) {
    console.log("deletion error", error);
  }
};
