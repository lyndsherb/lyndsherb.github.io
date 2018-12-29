/**
 * Components - Footer
 */

import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import Colours from '../constants/colours';
import Container from './styled/container';

const StyledFooter = styled.footer`
    background-color: ${Colours.footerBg};
    padding: 0.5rem 0;
    color: ${Colours.footerText};

    a {
        color: inherit;
    }
`;

const Footer = () => (
    <StyledFooter>
        <Container>
            &copy; 2018, Built with <Link href="https://www.gatsbyjs.org">Gatsby</Link>
        </Container>
    </StyledFooter>
);

export default Footer;
