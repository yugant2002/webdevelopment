import React from "react";

function Contact(){
    return(

        <>
        <div className="text-center">
            <h1>Contact Us</h1>
            <div className="container">
            <form >
                <div>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text"
                    name="fullName"
                    id="fullName"
                    value={contact.Data}    



                    />
                </div>
            </form>
            </div>
             </div>
        
        </>
    );
};