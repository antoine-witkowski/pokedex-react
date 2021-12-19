import {useState} from "react";
import ReactModal from "react-modal";

const Contact = () => {

    const [modalDisplay, setModalStatus] = useState(false);

    const handleOpenModal = () => setModalStatus(true);
    const handleCloseModal = () => setModalStatus(false);

    return (
        <>
            <div>
                <button onClick={handleOpenModal}>Contact</button>
                <ReactModal
                    isOpen={modalDisplay}
                    //contentLabel="Minimal Modal Example"
                >
                    <button onClick={handleCloseModal}>X fermer</button>

                    <form action="" method="get" className="form-example">
                        <div className="form-example">
                            <label htmlFor="name">Enter your name: </label>
                            <input type="text" name="name" id="name" required/>
                        </div>
                        <div className="form-example">
                            <label htmlFor="email">Enter your email: </label>
                            <input type="email" name="email" id="email" required/>
                        </div>
                        <div className="form-example">
                            <input type="submit" value="Subscribe!"/>
                        </div>
                    </form>

                </ReactModal>
            </div>
        </>
    )

}

export default Contact;
