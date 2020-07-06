import Livro from 'assets/Frame18.png';
import React, { useEffect, useState } from 'react';

import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import StarIcon from '@material-ui/icons/Star';
import StarHalfIcon from '@material-ui/icons/StarHalf';
import { useHistory } from 'react-router';
import api from 'services/api';

const useStyles = makeStyles((theme) => ({
  livro: {
    padding: 2,
    textAlign: 'center',
    backgroundColor: '#CCC',
    marginBottom: 20,
    width: '60%',
  },
  paper: {
    padding: 2,
    textAlign: 'center',
    backgroundColor: '#000',
    marginBottom: 20,
    width: '90%',
    height: 200,
  },
  textColorPrimary: {
    color: '#6FBF8B',
  },
  textColorWhite: {
    color: '#FFF',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  box: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
}));

function Book(props) {
  const classes = useStyles();
  const [bookInfo, setBookInfo] = useState({});
  const access_id = localStorage.getItem('accessId') || '0123654';
  const history = useHistory();

  const bookId = props.location.state.bookId;

  useEffect(() => {
    api.get(`livro/${bookId}`, {headers: {access_id}}).then(response => {
      console.log(response.data);
      setBookInfo(response.data);
    });
  }, []);

  return (
    <div className={classes.box}>
      <Grid container spacing={3} style={{ marginBottom: 30, marginTop: 50 }}>
        <Grid item>
          <Grid container>
            <Grid
              item
              md={4}
              lg={4}
              sm={12}
              xs={12}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <img src={`https://devore.herokuapp.com/public/images/${bookInfo.imageName}`} className={classes.livro} alt="Livro" />
            </Grid>
            <Grid item md={5} lg={5} sm={12} xs={12}>
              <div className={classes.textColorWhite} style={{ fontSize: 26 }}>
                {bookInfo.name}
              </div>
              <div
                className={classes.textColorWhite}
                style={{ textAlign: 'center' }}
              >
                {bookInfo.description}
              </div>
            </Grid>
            <Grid
              item
              md={3}
              lg={3}
              sm={12}
              xs={12}
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <Grid
                container
                style={{
                  width: '95%',
                }}
              >
                <Grid
                  item
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  style={{
                    marginTop: 20,
                    marginRight: 20,
                    marginBottom: 10,
                    marginLeft: 20,
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#6FBF8B',
                    }}
                    fullWidth
                  >
                    Adicionar na bib.
                  </Button>
                </Grid>
                <Grid
                  item
                  md={12}
                  lg={12}
                  sm={12}
                  xs={12}
                  style={{
                    marginTop: 10,
                    marginRight: 20,
                    marginBottom: 20,
                    marginLeft: 20,
                  }}
                >
                  <Button
                    variant="contained"
                    style={{
                      backgroundColor: '#6FBF8B',
                    }}
                    fullWidth
                  >
                    Quero ler
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <Tabs
            aria-label="simple tabs example"
            style={{
              backgroundColor: '#141414',
              color: '#6FBF8B',
              borderTopColor: '#6FBF8B',
              borderTopWidth: 2,
              borderTopStyle: 'solid',
            }}
            variant="fullWidth"
          >
            <Tab label="Comentários" />
            <Tab label="Me vê" />
            <Tab label="Resenhas dos leitores" />
          </Tabs>
        </Grid>
        <Grid
          item
          md={12}
          lg={12}
          sm={12}
          xs={12}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            variant="contained"
            style={{
              backgroundColor: '#F28A2E',
              width: '30%',
              height: 50,
            }}
          >
            <AddPhotoAlternateIcon />
            <CloudUploadIcon />
          </Button>
        </Grid>
        <Grid item md={12} lg={12} sm={12} xs={12}>
          <Grid container md={12} lg={12} sm={12} xs={12}>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>a</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>b</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>c</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>d</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>e</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>f</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>g</Paper>
            </Grid>
            <Grid item md={3} lg={3} sm={12} xs={12}>
              <Paper className={classes.paper}>h</Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Book;
