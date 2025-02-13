import React from "react";

const Items = ({ projectItems }) => {
  return (
    <>
      {projectItems.map((project) => {
        const { id, img, title, description,url } = project;
        return (
          <div className="portfolio-item card-two" key={id}>
            <div className="portfolio-img-wrapper">
              <img src={img} className="portfolio-img" alt={title} />
            </div>

            <div className="portfolio-content">
              <h3 className="portfolio-title">{title}</h3>
              <p className="portfolio-description">{description}</p>
              <a href={url} target="blank">
              <button>
              <span>View</span>
              </button>
              </a>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Items;
