import Phone from 'assets/Phone.png';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import api from '../../services/api';

const useStyles = makeStyles((theme) => ({
  gridCelular: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));
const styles = () => ({
  input: {
    color: 'white',
  },
});
function Signin() {
  const classes = useStyles();

  function handleLogin(event) {
    
  }



  const [values, setValues] = React.useState({
    idAcesso: '',
    password: '',
    showPassword: false,
  });
  const history = useHistory();

  async function submit() {
    localStorage.setItem('acess_id', '0123654');
    history.push('/');
  }
  return (
    <Grid container style={{ height: '100%' }}>
      <Grid
        item
        className={classes.gridCelular}
        md={7}
        lg={7}
        style={{
          justifyContent: 'center',
          alignItems: 'flex-end',
        }}
      >
        <img
          src={Phone}
          style={{ height: '80%' }}
          alt="Celular com o mascote e o nome devore"
        />
      </Grid>
      <Grid
        item
        sm={12}
        md={3}
        lg={3}
        style={{
          height: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Grid container>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            style={{ color: '#6FBF8B', fontSize: 26, padding: 20 }}
          >
            Entrar
          </Grid>
          <Grid
            item
            sm={12}
            md={12}
            xs={12}
            style={{ color: '#FFF', padding: 20 }}
          >
            Leia, compartilhe , acompanhe e divirta-se no mundo incrível da
            leitura
          </Grid>
          <Grid
            item
            md={12}
            sm={12}
            xs={12}
            style={{ color: '#FFF', padding: 20 }}
          >
            <TextField
              id="outlined-basic"
              label="Id de acesso"
              variant="outlined"
              values={values.idAcesso}
              style={{ width: '100%' }}
              onChange={(event) =>
                setValues({ ...values, idAcesso: event.target.value })
              }
              InputProps={{
                className: styles.input,
              }}
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12} style={{ padding: 20 }}>
            <FormControl variant="outlined" style={{ width: '100%' }}>
              <InputLabel htmlFor="outlined-adornment-password">
                Senha
              </InputLabel>
              <OutlinedInput
                style={{ borderColor: '#FFF' }}
                id="outlined-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={(event) =>
                  setValues({ ...values, password: event.target.value })
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() =>
                        setValues({
                          ...values,
                          showPassword: !values.showPassword,
                        })
                      }
                      onMouseDown={(event) => event.preventDefault()}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item md={12} sm={12} xs={12} style={{ padding: 20 }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#6FBF8B',
              }}
              fullWidth
              onClick={submit}
            >
              Entrar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Signin;
