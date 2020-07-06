/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import Logo from 'assets/Devore.png';
import Pages from 'pages';
import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  bottomBar: {
    backgroundColor: '#050505',
    position: 'fixed',
    bottom: 0,
    width: '100%',
  },
  logo: {
    marginRight: theme.spacing(2),
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: '#6FBF8B',
    width: '100%',
  },
  bottomIcon: { 
    color: '#FFF',
  },
  content: {
    backgroundColor: '#141414',
    height: '100%',
    minHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    paddingTop: 80,
    paddingBottom: 60,
  },
}));

function Content() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.content}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <div className={classes.logo}>
            <img src={Logo} alt="Logo Devore" />
          </div>

          <Button color="inherit" onClick={() => history.push('/sair')}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container className={classes.container}>
        <Pages />
      </Container>

      <BottomNavigation showLabels className={classes.bottomBar}>
        <BottomNavigationAction
          label="Biblioteca"
          className={classes.bottomIcon}
          icon={<CollectionsBookmarkIcon />}
        />
        <BottomNavigationAction
          label="Gêneros"
          className={classes.bottomIcon}
          icon={<CollectionsBookmarkIcon />}
        />
        <BottomNavigationAction
          label="Home"
          className={classes.bottomIcon}
          icon={<HomeIcon />}
        />
        <BottomNavigationAction
          label="Buscar"
          className={classes.bottomIcon}
          icon={<SearchIcon />}
        />
        <BottomNavigationAction
          onClick={() => { history.push('/rankingDaEscola') }}
          label="Ranking"
          className={classes.bottomIcon}
          icon={<SearchIcon />}
        />
      </BottomNavigation>
    </div>
  );
}

export default Content;
