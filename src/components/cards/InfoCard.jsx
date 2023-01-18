import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { commonImages } from '../common/images';


function InfoCard({ img, name, link, desc }) {
  const navigate = useNavigate();

  const mainDiv = (
    <div className="infocard-card">
      <div className="infocard-img-div">
        <img src={img} alt="service-name" />
      </div>
      <div className="infocard-name">{name}</div>
      <div className="info-icon-div">
        <img src={commonImages.InfoNew}/>
      </div>
    </div>
  );

  if (link) {
    return (
      <div className="no-link">
        <Link to={link}>{mainDiv}</Link>
      </div>
    );
  }

  // work here IBAD
  if (name === 'HARD BACK') {
    return (
      <div className="bg-hrBackCard" onClick={() => navigate(-1)}>
        <div>
          <img src={commonImages.backToGuide} alt=''/>
        </div>
      <div> <h4> Back to <br />{desc}</h4></div>
      </div>
    )
  }

  return mainDiv;
}

InfoCard.propTypes = {
  img: PropTypes.any,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  desc: PropTypes.string,
};

export default InfoCard;
