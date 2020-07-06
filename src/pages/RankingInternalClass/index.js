import Cinema from 'assets/cinema.png';
import TrofeuBronze from 'assets/avatarBronze.png';
import TrofeuOuro from 'assets/avatarOuro.png';
import TrofeuPrata from 'assets/avatarPrata.png';
import React, { useEffect, useState } from 'react';

import { Box, Container, ButtonGroup, Button } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListIcon from '@material-ui/icons/List';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import TimelineIcon from '@material-ui/icons/Timeline';
import api from 'services/api';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 2,
    textAlign: 'center',
    backgroundColor: 'rgba(5, 5, 5, 0.6)',
    margin: 5,
  },
  title: {
    fontSize: 22,
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
  menu: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  lista: {
    width: '100%',
    listStyleType: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#6FBF8B',
    borderRadius: 5,
    padding: 0,
  },
  listaCabecalho: {
    backgroundColor: '#6FBF8B',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    padding: 10,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  listaItem: {
    color: '#6FBF8B',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    paddingLeft: 8,
  },
  box: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
  },
  gift: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(5, 5, 5, 0.5)',
    borderRadius: 10,
    marginTop: 20,
    borderSize: 2,
    borderStyle: 'solid',
    borderColor: '#050505',
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
  textCard: {
    fontSize: 14,
    color: '#ffffff',
    margin: 20,
  },
}));

function RankingTops() {
  const classes = useStyles();
  const access_id = localStorage.getItem('accessId') || '0123654';
  const [ranking, setRanking] = useState([{}, {}, {}]);

  useEffect(() => {
    api.get('rankingDaTurma', {headers: {access_id}})
      .then(response => {
        console.log(response.data);
        setRanking(response.data);
      });
  }, []);

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
        <Tab label="Sua Turma" icon={<SupervisedUserCircleIcon />} />
        <Tab label="Tops" icon={<CheckCircleIcon />} />
        <Tab label="Estatísticas" icon={<TimelineIcon />} />
      </Tabs>
      <div className={classes.box}>
        <Grid container spacing={3}>
          <Grid item md={4} lg={4} sm={12} xs={12} >
            <Container className={classes.gift}>
              <Box
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                className={classes.menu}
              >
                <ButtonGroup
                  orientation="vertical"
                  color="primary"
                  aria-label="vertical outlined primary button group"
                  className={classes.lista}
                >
                  <Button>
                    <ListIcon />
                    <span>Turmas</span>
                  </Button>
                  <Button variant="contained">
                    <SupervisedUserCircleIcon />
                    <span style={{ paddingLeft: 10 }}>Sua turma</span>
                  </Button>
                  <Button>
                    <SupervisedUserCircleIcon/>
                    <span style={{ paddingLeft: 10 }}>Top 3 da escola</span>
                  </Button>
                </ButtonGroup>
              </Box>
              <Box
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                style={{ display: 'flex' }}
              >
                <Paper className={classes.card}>
                  <img src={Cinema} className={classes.imageCard} style={{ width: '100%' }} />
                  <div>
                    <div className={classes.cardBottom}>
                      Prêmio: 1 ingresso para o cinema por aluno.
                      <div
                        style={{
                          color: '#F28A2E',
                          marginTop: 5,
                          fontWeight: 'bold',
                        }}
                      >
                        Resultado em: 24/07/2020
                      </div>
                    </div>
                  </div>
                </Paper>
              </Box>
            </Container>
          </Grid>
          <Grid item md={8} lg={8} sm={12} xs={12}>
            <Grid container spacing={1}>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Paper
                  className={classes.paper}
                  style={{
                    height: 230,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={TrofeuOuro} alt="" />
                  <div style={{ textTransform: 'uppercase', color: '#6FBF8B' }}>
                    <b className={classes.title}>CAMPEÃO</b>
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    {ranking[0].name}
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>{ranking[0].points}</span>{' '}
                    <span style={{ color: '#6FBF8B' }}>pontos</span>
                  </div>
                </Paper>
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Paper
                  className={classes.paper}
                  style={{
                    height: 230,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={TrofeuPrata} alt="" />
                  <div style={{ textTransform: 'uppercase', color: '#6FBF8B' }}>
                    <b className={classes.title}>VICE-CAMPEÃO</b>
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    {ranking[1].name}
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>{ranking[1].points}</span>{' '}
                    <span style={{ color: '#6FBF8B' }}>pontos</span>
                  </div>
                </Paper>
              </Grid>
              <Grid item md={6} lg={6} sm={12} xs={12}>
                <Paper
                  className={classes.paper}
                  style={{
                    height: 230,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={TrofeuBronze} alt="" />
                  <div style={{ textTransform: 'uppercase', color: '#6FBF8B' }}>
                    <b className={classes.title}>TERCEIRO LUGAR</b>
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    {ranking[2].name}
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>{ranking[2].points}</span>{' '}
                    <span style={{ color: '#6FBF8B' }}>pontos</span>
                  </div>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default RankingTops;
