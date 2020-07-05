import VideoFrame from 'assets/Frame17.png';
import React, { useEffect, useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ImageIcon from '@material-ui/icons/Image';
import ShortTextIcon from '@material-ui/icons/ShortText';
import VideocamIcon from '@material-ui/icons/Videocam';
import api from '../../services/api';
import { Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 2,
    paddingTop: 7,
    paddingBottom: 7,
    textAlign: 'center',
    backgroundColor: '#050505',
    marginBottom: 20,
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
  tabs: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
    },
  },
  video: {
    display: 'block',
  },
  text: {
    display: 'block',
  },
  image: {
    display: 'block',
  },
  box: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
    borderRadius: 10,
    marginBottom: 20,
    borderSize: 2,
    borderStyle: 'solid',
    borderColor: '#050505'
  },
  cardTitle: {
    color: '#6FBF8B',
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    fontSize: 20,
  },
  cardBottom: {
    paddingTop: 20,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 20,
    color: '#FFFFFF',
  },
  imageCard: {
    height: 225,
  },
}));

function Home() {
  const classes = useStyles();
  const [photos, setPhotos] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    api.get('/photos', { headers: { 'access_id': '0123654' } })
      .then(response => {
        setPhotos(response.data);
      });

    api.get('/videos', { headers: { 'access_id': '0123654' } })
      .then(response => {
        setVideos(response.data);
      });

  }, []);

  function handleToBook() {

  }

  return (
    <>
      <Tabs
        className={classes.tabs}
        aria-label="simple tabs example"
        style={{
          backgroundColor: '#000',
          color: '#6FBF8B',
        }}
        variant="fullWidth"
      >
        <Tab icon={<VideocamIcon />} />
        <Tab icon={<ImageIcon />} />
        <Tab icon={<ShortTextIcon />} />
      </Tabs>
      <div className={classes.box}>
        <Grid container spacing={3} style={{ marginBottom: 30 }}>
          <Grid
            item
            xs={12}
            md
            lg
            style={{ textAlign: 'center' }}
            className={classes.video}
          >
            <VideocamIcon className={classes.textColorPrimary} />

            {videos.map(video => {
              return (
                <Paper className={classes.card}>
                  <div className={classes.cardTitle} >
                    {video.bookname}
                  </div>
                  <div style={{ backgroundColor: '#4E4E4E' }}>
                    <iframe width="274" height="272" src="https://www.youtube.com/embed/NuYeD5ziJVU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                  </div>
                  <div
                    className={classes.cardBottom}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div className={classes.textColorWhite}>{video.username}</div>
                    <div className={classes.textColorWhite}>
                      204 <FavoriteBorderIcon style={{ marginLeft: 10 }} />
                    </div>
                  </div>
                </Paper>
              );
            })}

          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md
            lg
            style={{ textAlign: 'center' }}
            className={classes.image}
          >

            <ImageIcon className={classes.textColorPrimary} />

            {photos.map(photo => {
              return (
                <Paper className={classes.card}>
                  <div className={classes.cardTitle} >
                    {photo.bookname}
                  </div>
                  <div style={{ backgroundColor: '#4E4E4E', height: '225px' }}>
                    <img className={classes.imageCard} src={`https://devore.herokuapp.com/public/images/${photo.filename}`} />
                  </div>
                  <div
                    className={classes.cardBottom}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div className={classes.textColorWhite}>{photo.username}</div>
                    <div className={classes.textColorWhite}>
                      {photo.likes} <FavoriteBorderIcon style={{ marginLeft: 10 }} />
                    </div>
                  </div>
                </Paper>
              )
            })}


          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md
            lg
            style={{ textAlign: 'center' }}
            className={classes.text}
          >
            <ShortTextIcon className={classes.textColorPrimary} />
            <Paper className={classes.paper}>
              <div
                className={classes.textColorPrimary}
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                Superman - Entre a Foice e o Martelo
              </div>
              <div
                style={{ height: '250px' }}
                className={classes.textColorWhite}
              >
                Superman - Entre a foice e o martelo ou na original Superman -
                Red Son é uma obra onde vemos o Superman, o Homem de Aço, porém
                de uma maneira bem diferente da que já conhecemos. A história se
                inicia durante a Segunda Guerra Mundial, porém em uma realidade
                onde a nave do Kriptoniano, o Clark, demorou 12 horas a mais
                para cair na terra, então assim ao invés de cair nos EUA, acabou
                caindo na Rússia e o Clark viveu e cresceu sobre os costumes e
                culturas da população lá daquela época. ...
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className={classes.textColorWhite}>@lucasemn</div>
                <div className={classes.textColorWhite}>
                  204 <FavoriteBorderIcon />
                </div>
              </div>
            </Paper>
            <Paper className={classes.paper}>
              <div
                className={classes.textColorPrimary}
                style={{ paddingTop: 10, paddingBottom: 10 }}
              >
                Superman - Entre a Foice e o Martelo
              </div>
              <div
                style={{ height: '250px' }}
                className={classes.textColorWhite}
              >
                Superman - Entre a foice e o martelo ou na original Superman -
                Red Son é uma obra onde vemos o Superman, o Homem de Aço, porém
                de uma maneira bem diferente da que já conhecemos. A história se
                inicia durante a Segunda Guerra Mundial, porém em uma realidade
                onde a nave do Kriptoniano, o Clark, demorou 12 horas a mais
                para cair na terra, então assim ao invés de cair nos EUA, acabou
                caindo na Rússia e o Clark viveu e cresceu sobre os costumes e
                culturas da população lá daquela época. ...
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  paddingRight: 20,
                  paddingLeft: 20,
                }}
              >
                <div className={classes.textColorWhite}>@lucasemn</div>
                <div className={classes.textColorWhite}>
                  204 <FavoriteBorderIcon />
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Home;
