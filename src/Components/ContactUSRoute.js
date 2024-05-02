import React from "react";
import "./ContactUSRoute.css";

const ContactUSRoute = () => {
  return (
    <div className="contact-form-container ">
      <h1 className="Start-conversation-text">Start a conversation</h1>
      <div className="row justify-content-center">
        {/* Input field 1 */}
        <div className="mb-4 mt-4 col-sm-5"> {/* Added mb-4 class for margin-bottom */}
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Full Name"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Input field 2 */}
        <div className="mb-4 col-sm-5"> {/* Added mb-4 class for margin-bottom */}
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput2"
            placeholder="Email"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Input field 3 */}
        <div className="mb-4 col-sm-5"> {/* Added mb-4 class for margin-bottom */}
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput3"
            placeholder="Mobile No"
          />
        </div>
      </div>
      <div className="row justify-content-center">
        {/* Textarea */}
        <div className="mb-4 col-sm-5"> {/* Added mb-4 class for margin-bottom */}
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default ContactUSRoute;
