import React,{useState} from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import AddBlog from './AddBlog';
import { FiEdit } from "react-icons/fi";
  import { useSelector } from "react-redux";
  
const ModalBtn = () => {
    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    const { user } = useSelector((state) => ({ ...state.auth }));
    return (
        <div>
               {/* //modal start */}
    {user?.result?._id && ( <div className='container d-flex justify-content-end my-2'>
      <button onClick={onOpenModal} className="btn btn-outline-success"><FiEdit/>Add New</button>
      <Modal open={open} onClose={onCloseModal} center>
       <AddBlog></AddBlog>
      </Modal>
    </div>)}
   
        </div>
    );
};

export default ModalBtn;