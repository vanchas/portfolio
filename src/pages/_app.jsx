import App from 'next/app'
import React from 'react'
import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../components/theme/theme'
import './global.scss'

class CustomApp extends App {

  static async getInitialProps(props) {
    const pageProps = props.Component.getInitialProps ? await props.Component.getInitialProps(props.ctx) : {};
    return {
      pageProps: pageProps
    };
  }

  componentDidMount = () => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    )
  }
}

export default CustomApp


