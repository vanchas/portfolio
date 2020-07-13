import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { connect } from 'react-redux';

function Copyright({ language }) {
  return (
    <Typography variant="body2" color="textSecondary">
      {`${language.substring} © `}
      <Link color="inherit" href="#">
        {language.name}
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function StickyFooter({ language }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <div className={classes.footer}>
        <Container maxWidth="sm">
          <Copyright language={language} />
        </Container>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  language: state.app.language.footer
})

export default connect(mapStateToProps, null)(StickyFooter)
