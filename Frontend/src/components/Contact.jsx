import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px] ">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Contact us</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your fullname "
                  className="w-full px-3 py-1 border rounded-md outline-none"
                />
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="w-full px-3 py-1 border rounded-md outline-none"
                />
              </div>
              {/* message */}
              <div className="mt-4 space-y-2">
                <span>Message</span>
                <br />
                <input
                  type="text"
                  placeholder="Type your message"
                  className="w-full px-3 pt-0 pb-20 py-10  border rounded-md outline-none  "
                />
              </div>
              {/* Button */}
              <div className="flex justify-start mt-6">
                <button className="bg-blue-500 text-white rounded-md px-3 py-1 hover:bg-blue-700 duration-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
