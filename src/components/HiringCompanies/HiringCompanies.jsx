import React from "react";
import "./hiringCompanies.css";

const HiringCompanies = () => {
  return (
    <div className="companies">
      <h1>
        800+ Companies have hired <br />
        Geekster Learners
      </h1>
      <div className="all-companies">
      <div className="company-wrapper right">
        <div className="company">
          <img src="/logos/paypal-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/ola-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/oracle-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/cognizant-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/rakuten-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/bosch-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/amzon-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/google.png" />
        </div>
      </div>

      <div className="company-wrapper left">
        <div className="company">
          <img src="/logos/accenture-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/rakuten-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/google.png" />
        </div>
        <div className="company">
          <img src="/logos/goldman-sachs-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/hcl-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/cognizant-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/amzon-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/bosch-logo.png" />
        </div>
      </div>

      <div className="company-wrapper right">
        <div className="company">
          <img src="/logos/cognizant-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/hcl-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/google.png" />
        </div>
        <div className="company">
          <img src="/logos/accenture-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/bosch-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/rakuten-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/goldman-sachs-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/amzon-logo.png" />
        </div>
      </div>
      <div className="company-wrapper left">
        <div className="company">
          <img src="/logos/accenture-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/cognizant-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/rakuten-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/google.png" />
        </div>
        <div className="company">
          <img src="/logos/hcl-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/amzon-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/bosch-logo.png" />
        </div>
        <div className="company">
          <img src="/logos/goldman-sachs-logo.png" />
        </div>
      </div>
      </div>

      <div className="metrics-wrapper">
        <div className="metrics">
          <h1>33 LPA</h1>
          <p>Highest salary</p>
        </div>
        <div className="metrics">
          <h1>8 LPA</h1>
          <p>average salary</p>
        </div>
        <div className="metrics">
          <h1>800+ </h1>
          <p>Hiring partners</p>
        </div>
      </div>

      <div>
        <button>View all companies</button>
        <button className="counsellor">Talk to Counsellor</button>
        <div className="glow"></div>
        <div className="glow2"></div>
      </div>
    </div>
  );
};

export default HiringCompanies;
