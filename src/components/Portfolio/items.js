import React from "react";

const items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((project) => {
        const { id, img, title, description } = project;
        return (
          <div className="portfolio-items card card-two" key={id}>
            <div className="portfolio-img-wrapper">
              <img src={img} className="portfolio-img"></img>
            </div>

            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
            <button>
  <span>View</span>
</button>
          </div>
        );
      })}
    </>
  );
};

export default items;
