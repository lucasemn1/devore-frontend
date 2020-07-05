import Cinema from 'assets/cinema.png';
import TrofeuBronze from 'assets/trofeuBronze.png';
import TrofeuOuro from 'assets/trofeuOuro.png';
import TrofeuPrata from 'assets/trofeuPrata.png';
import React from 'react';

import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ListIcon from '@material-ui/icons/List';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import TimelineIcon from '@material-ui/icons/Timeline';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 2,
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
  menu: {
    display: 'flex',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  lista: {
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
}));

function Ranking() {
  const classes = useStyles();
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
          <Grid item md={4} lg={4} sm={12} xs={12}>
            <Grid container>
              <Grid
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                className={classes.menu}
              >
                <ul className={classes.lista}>
                  <li className={classes.listaCabecalho}>
                    <ListIcon />
                    <span>Turmas</span>
                  </li>
                  <li className={classes.listaItem}>
                    <SupervisedUserCircleIcon />
                    <span style={{ paddingLeft: 10 }}>Sua turma</span>
                  </li>
                  <li
                    className={classes.listaItem}
                    style={{
                      borderColor: '#6FBF8B',
                      borderWidth: 1,
                      borderTopStyle: 'solid',
                      borderBottomStyle: 'solid',
                    }}
                  >
                    <CheckCircleIcon />
                    <span
                      style={{
                        paddingLeft: 10,
                      }}
                    >
                      Tops leitores da escola
                    </span>
                  </li>
                  <li className={classes.listaItem}>
                    <TimelineIcon />
                    <span style={{ paddingLeft: 10 }}>Estatísticas</span>
                  </li>
                </ul>
              </Grid>
              <Grid
                item
                md={12}
                lg={12}
                sm={12}
                xs={12}
                style={{ display: 'flex' }}
              >
                <Paper className={classes.paper}>
                  <img src={Cinema} alt="" style={{ width: '100%' }} />
                  <div>
                    <div style={{ color: '#6FBF8B' }}>
                      Prêmio: 1 ingresso para o cinema por aluno.
                    </div>
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
                </Paper>
              </Grid>
            </Grid>
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
                    Campeão
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    8º ANO A
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>3654025</span>{' '}
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
                    VICE-CAMPEÃO
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    6º ANO A
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>365454</span>{' '}
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
                    TERCEIRO LUGAR
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    9º ANO A
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>95758</span>{' '}
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
                  <div
                    style={{
                      fontSize: 26,
                      textTransform: 'uppercase',
                      color: '#6FBF8B',
                      paddingBottom: 20,
                    }}
                  >
                    4º lugar
                  </div>
                  <div style={{ textTransform: 'uppercase', color: '#FFF' }}>
                    4º ANO A
                  </div>
                  <div>
                    <span style={{ color: '#FFF' }}>78525</span>{' '}
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

export default Ranking;
