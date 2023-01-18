import React from 'react';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';

function BTCLeadershipCard({teamProfile, title, destination, description, companyLogo}) {
  return (
    <div className='teamCard'>BTCLeadershipCard</div>
  )
}

BTCLeadershipCard.prototype = {
    teamProfile: propTypes.string,
    title: propTypes.string,
    destination: propTypes.string,
    description: propTypes.string,
    companyLogo: propTypes.string,
}

export default BTCLeadershipCard