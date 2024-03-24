import React from "react";
import Jumbotron from "../../Components/Jumbotron/Jumbotron";
const Contact = () => {
  return (
    <>
      <Jumbotron title="Contact Us" />
      <main class="bg-white">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="mapouter">
                <div class="gmap_canvas">
                  <iframe
                    width="600"
                    height="500"
                    id="gmap_canvas"
                    src="https://maps.google.com/maps?q=Bangalore&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                  ></iframe>
                  <a href="https://www.whatismyip-address.com"></a>
                  <br />
                  <a href="https://www.embedgooglemap.net">
                    how to add google map to website
                  </a>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <form class="p-4 p-md-5 rounded-3">
                <h5 class="text-center mb-3">Reach Us</h5>
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Name"
                  />
                  <label for="floatingInput">Name</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Email Address"
                  />
                  <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="Mobile No."
                  />
                  <label for="floatingInput">Mobile Address</label>
                </div>
                <div class="form-floating mb-3">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="15"
                    class="form-control"
                    placeholder="Message"
                  ></textarea>
                  <label for="floatingInput">Message</label>
                </div>
                <button class="w-100 btn btn-lg btn-primary" type="submit">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
