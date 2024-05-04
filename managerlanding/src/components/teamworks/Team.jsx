import React from "react";
import "./team.css";

const Team = () => {
  return (
    <div>
      <section className=" bg-accent-400 text-neutral-100">
        <div className="container">
          <div className="even-columns">
            <div>
              <p className="fs-secondary-heading fw-bold">
              Simplify how your teams work today
              </p>
            </div>
            <div>
              <button className="buttonteam" data-type="inverted">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
