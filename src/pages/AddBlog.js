import React ,{useState,useEffect}from 'react';
import { toast } from "react-toastify";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { createBlog } from "../redux/features/blogSlice";
const initialState = {
    title: "",
    content: "",
  };
const AddBlog = () => {
  const [blogData, setBlogData] = useState(initialState);
    const { title,content} = blogData;
    const { id } = useParams();
    const { user } = useSelector((state) => ({ ...state.auth }));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error } = useSelector((state) => ({
        ...state.blog,
      }));
      useEffect(() => {
        error && toast.error(error);
      }, [error]);
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title && content) {
            const updatedBlogData = { ...blogData, name: user?.result?.name };
            dispatch( createBlog({updatedBlogData, toast, navigate}));
            handleClear();
          }
          window.location.reload()
      };
    const onInputChange = (e) => {
        const { name, value } = e.target;
        setBlogData({ ...blogData, [name]: value });
      };
      const handleClear = () => {
        setBlogData({ title: "", content: "" });
      };
      
    return (

			<>
<h4> Add New Blog</h4>
              <form className=' p-3' onSubmit={handleSubmit} >
              <div className="mb-3">
              <input type="text"
              placeholder="Enter Title"

              value={title || ""}
              name="title"
              onChange={onInputChange}
              required
              className="form-control" id="exampleFormControlInput1" />
              </div>
              <div className="mb-3">
              <textarea
              placeholder="Enter Description"
              type="text"
              value={content}
              name="content"
              onChange={onInputChange}
              required
              className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
             
              <div className="mb-3 p-2 rounded-2" style={{border:'1px solid grey'}}>
              <FileBase
                type="file"
                multiple={false}
                onDone={({ base64 }) =>
                  setBlogData({ ...blogData, imageFile: base64 })
                }
              />
              </div>
              <div className="mb-3">
              <input
              type="date"
              name="content"
              className="form-control"/>
              </div>
              <button type="submit" style={{ width: "30%" }} className=" btn btn-outline-secondary mx-2">
                 Submit
                </button>
                <button
                type="reset"
                  style={{ width: "30%" }}
                  className="btn btn-outline-danger"
                  onClick={handleClear}
                >
                  Clear
                </button>
              </form>
</>
    );
};

export default AddBlog;