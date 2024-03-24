import React from "react";

const ProjectItem = () => {
  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card w-100">
        <span className="bk-review-bar-wrap">
          <span className="bk-review-score">4.3</span>
        </span>
        <img
          className="card-img-top"
          src="https://vishalraj.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Febc9bf08-47de-470f-8bc6-ee3c33e27df9%2FUntitled.png?table=block&id=f863859e-3b3a-4b11-b7ad-5309bc31a50d&spaceId=50bd5b25-f9f6-4394-a402-c308e6994297&width=3840&userId=&cache=v2"
          alt="Card image cap"
        />
        <div className="card-body">
          <div className="row">
            <div className="col-9">
              <h5 className="card-title">Technical Documentation Page</h5>
              <p className="card-text">
                Category{" "}
                <a href="javascript:void(0);" className="category-link">
                  CMS
                </a>{" "}
                <a href="javascript:void(0);" className="category-link">
                  Website
                </a>
              </p>
              <a href="project-view.html" className="card-link">
                View More
              </a>
            </div>
            <div className="col-3">
              <img
                src="images/users/avatar1.png"
                alt=""
                className="profile-image"
              />
              <p>
                {" "}
                <a href="user-profile.html" className="profile-name">
                  Satham Ussain
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
