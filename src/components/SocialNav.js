import React from 'react';
import PropTypes from 'prop-types';

import '../styles/02-components/_social-nav.scss';

const SocialNav = ({ modifier, contactInfo }) => (
    <div className={`nav ${modifier}`}>
        <ul className="h-list h-list--to-tablet" aria-labelledby="social">
            {contactInfo.map(item => {
                const Icon = require(`../images/icons/${item.icon}.svg`);

                return (
                    <li key={item.icon} className="h-list__item">
                        <a
                            href={item.href}
                            rel="noopener noreferrer"
                            target="_blank">
                            <Icon
                                className={`icon icon--${item.icon}`}
                                alt={item.title} />
                            <span className="visually-hidden--from-tablet">
                                {item.title}
                            </span>
                        </a>
                    </li>
                )
            })}
        </ul>
    </div>
);

SocialNav.propTypes = {
    modifier: PropTypes.string,
    contactInfo: PropTypes.array,
};

SocialNav.defaultProps = {
    modifier: '',
    contactInfo: [],
};

export default SocialNav;
