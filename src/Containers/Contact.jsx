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
                <ReactModal isOpen={modalDisplay}
                            contentLabel="Contact Modal"
                            ariaHideApp={false}>
                    <button onClick={handleCloseModal}
                            className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                        Close
                    </button>

                    <form action="mailto:witkowski.antoine@gmail.com" method="post" className="w-full max-w-sm">

                        <div className="md:flex md:items-center mb-6">

                            <div className="md:w-2/3">
                                <label htmlFor="name"
                                       className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                    Enter your name:
                                </label>
                            </div>

                            <div className="md:w-2/3">
                                <input type="text"
                                       name="name"
                                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                       required/>
                            </div>

                        </div>

                        <div className="md:flex md:items-center mb-6">

                            <div className="md:w-2/3">
                                <label htmlFor="grade"
                                       className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                    Enter your grade:
                                </label>
                            </div>

                            <div className="md:w-2/3">
                                <input type="number"
                                       min="12"
                                       max="20"
                                       name="grade"
                                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                       required/>
                            </div>

                        </div>

                        <div className="md:flex md:items-center mb-6">

                            <div className="md:w-2/3">
                                <label htmlFor="message"
                                       className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                                    Enter your message:
                                </label>
                            </div>

                            <div className="md:w-2/3">
                                <input type="textarea"
                                       name="message"
                                       className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                       required/>
                            </div>

                        </div>

                        <div className="md:flex md:items-center">

                            <div className="md:w-2/3"></div>

                            <div className="md:w-2/3">
                                <button
                                    className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded">
                                    Send
                                </button>
                            </div>
                        </div>

                    </form>

                </ReactModal>
            </div>
        </>
    )

}

export default Contact;
