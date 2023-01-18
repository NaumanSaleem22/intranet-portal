import React, { Fragment } from "react";
import PropTypes from 'prop-types';

import { FaChevronRight } from 'react-icons/fa';

function BreadcrumbSection({ title, navSteps }) {
    return (
        <section>
            <div className="breadcrumb">
                <div className="c-container">
                    <h1>{title}</h1>
                    <ul>
                        {navSteps.map((each, index) => (
                            <Fragment key={index}>
                                <li className={index === (navSteps.length - 1) ? 'text-white' : ''}>
                                    {each}
                                </li>
                                {index !== (navSteps.length - 1) && <li><FaChevronRight /></li>}
                            </Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

BreadcrumbSection.propTypes = {
    title: PropTypes.string.isRequired,
    navSteps: PropTypes.array.isRequired,
}

export default BreadcrumbSection;