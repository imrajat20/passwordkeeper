import React, { useContext, useState } from "react";
import Modal from "../UI/Modal";
import PasswordContext from "../../context/PasswordContext";

const Backdrop = props => {

    const passCtx = useContext(PasswordContext);

    const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

    const addPasswordHabdler = event => {
        event.preventDefault();
        const newPassword = { input1, input2 };
        passCtx.addItem(newPassword);
        setInput1('');
        setInput2('');
    }

    return (
        <Modal onClose={props.onClose} className='modal'>
            <form onSubmit={addPasswordHabdler}>
            <div>
            <label htmlFor="title">Title</label>
            <input type="text" id="title"  value={input1} onChange={(e) => setInput1(e.target.value)} />
            </div>
            <div>
            <label htmlFor="desc">Desc.</label>
            <input type="text" id="desc" value={input2} onChange={(e) => setInput2(e.target.value)} />
            </div>
            <button onClick={props.onClose}>Close</button>
            <button type="submit" >Add Password</button>
            </form>
        </Modal>
    );
};

export default Backdrop;