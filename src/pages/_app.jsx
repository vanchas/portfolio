import App from 'next/app'
import React from 'react'
import Layout from '../components/layout/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../components/theme/theme'
import './global.scss'
import withRedux from 'next-redux-wrapper'
import { Provider } from 'react-redux'
import { store } from '../redux/store'

class CustomApp extends App {

  static async getInitialProps(props) {
    const pageProps = props.Component.getInitialProps ? await props.Component.getInitialProps(props.ctx) : {}
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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Provider>
    )
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store

//withRedux wrapper that passes the store to the App Component
export default withRedux(makeStore)(CustomApp)
