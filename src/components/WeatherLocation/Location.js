import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Location = ({ city }) =>  (
            <div className= "LocationCont">
                <h3>
                    {city}
                </h3>
            </div>);

Location.propTypes = {
    city: PropTypes.string.isRequired,
}
export default Location;