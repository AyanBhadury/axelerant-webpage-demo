import React from 'react'

function Contact() {

    const submitHandler = (e) => {
            e.preventDefault();
    }
    return (
        <>
            <main className="connect-with-us-container">
                <h2>Convinced To Work With Us?</h2>
                <h3>Company has helped agencies keep their promises to clients since 2005.</h3>
                <form onSubmit={submitHandler}>
                    <input type="text" name="" id="" className="small-input" placeholder="Fullname" />
                    <input type="text" name="" id="" className="small-input" placeholder="Email Address" />
                    <input type="text" name="" id="" className="small-input" placeholder="Phone Number" />
                    <textarea className="large-input" name="" id="" rows="7" placeholder="Message in brief" ></textarea>

                    <button className="primary-buttton submit-button">
                        submit
        </button>
                </form>
            </main>
        </>
    )
}

export default Contact
