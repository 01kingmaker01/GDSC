import React, { useState } from "react";

import Modal from "react-modal";



export function NewsletterModal(props) {




    // Newsletter Modal

    const customStyles = {

        content: {

            top: "50%",

            left: "50%",

            right: "auto",

            bottom: "auto",

            marginRight: "-50%",

            transform: "translate(-50%, -50%)",

            "border-radius": "25px",

        },

    };



    function closeModal() {

        props.setIsOpen(false);

    }



    return (

        <Modal

            isOpen={props.modalIsOpen}

            onRequestClose={closeModal}

            style={customStyles}

            contentLabel="Example Modal"

        >

            <h1 className="text-xl text-redc font-bold py-4">

                Congratulations! 🎉

            </h1>

            <h3 className="text-lg ">

                You are part of{" "}

                <span className="text-greenc font-bold"> GDSC-VIT </span> team now

                🤩

            </h3>

            <p className="text-lg">

                You will soon receive a mail confirming your subscription.

            </p>

            <br />

            <button

                className="font-bold xl:p-1 lg:p-1 w-14 xl:w-20 xl:rounded-lg lg:rounded-lg rounded-md bg-blue-500 text-white xl:text-lg lg:text-md text-join cursor-pointer"

                onClick={closeModal}

            >

                Close

            </button>

        </Modal>

    )

}