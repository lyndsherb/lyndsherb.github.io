/**
 * Components - Footer
 */

import React from 'react';
import styled from 'styled-components';
import { DateTime } from 'luxon';

import Colours from '../constants/colours';
import Container from './Container';

const StyledFooter = styled.footer`
    background-color: ${Colours.footerBg};
    padding: 0.5rem 0;
    color: ${Colours.footerText};
`;

const Footer = () => (
    <StyledFooter>
        <Container>
            &copy; {DateTime.local().toFormat('yyyy')}. Built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">Gatsby</a>.
        </Container>
    </StyledFooter>
);

export default Footer;
