import React from 'react';
import 'typeface-roboto-condensed';
import 'typeface-roboto-slab';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';

import Footer from './Footer';
import Navbar from '../components/Navbar';
import useSiteMetadata from './SiteMetadata';
import backgroundPattern from '../img/bg-pattern.png';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto Condensed', sans-serif;
    color: #1d3557;
    text-shadow: 1px 1px 0 #edf2f4;
  }

  * {
    box-sizing: border-box;
  }

  a {
    padding: 2px 3px;
    color: #1d3557;
  }

  a:hover {
    background: #1d3557;
    text-shadow: none;
    color: #edf2f4;
  }
`

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const MainContent = styled.div`
  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.1;
    z-index: -1;
    background: url(${backgroundPattern}) #edf2f4;
    background-repeat: repeat;
    background-size: 274px 233px;
    content: "";
  }

`;

const TemplateWrapper = ({ children, title = '·'}) => {
  const { siteName, description } = useSiteMetadata()
  return (
    <PageWrapper>
      <Helmet titleTemplate={`%s | ${siteName}`}>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#1d3557"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <GlobalStyle />

      <Navbar />
      <MainContent>{children}</MainContent>
      <Footer />
    </PageWrapper>
  )
}

export default TemplateWrapper
