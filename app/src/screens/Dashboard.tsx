import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { useFirebase } from 'react-redux-firebase';

export default function Dashboard() {
  const classes = useStyles();
  const firebase = useFirebase();

  const signOut = async () => {
    await firebase
      .logout()
      .then(result => {
        console.log('result' + JSON.stringify(result));
      })
      .catch(error => {
        console.log('error' + JSON.stringify(error));
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>PRIVATE CONTENT</div>
      <button onClick={signOut}>Sign Out</button>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
}));
