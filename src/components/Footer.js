/**
 * Components - Footer
 */

import React from 'react';
import { DateTime } from 'luxon';

import Container from './Container';

import '../styles/02-components/_footer.scss';

const Footer = () => (
    <footer className="footer">
        <Container>
            &copy; {DateTime.local().toFormat('yyyy')}. Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.
        </Container>
    </footer>
);

export default Footer;
