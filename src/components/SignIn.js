import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ConditionalLink from './ConditionalLink';

// import SignUp from './SignUp';

//JSON
// import pass from './pass.JSON'



const defaultTheme = createTheme();


export default function SignIn() {
    const creds = [
      {
        email: "amaanbaig189@gmail.com",
        password: "123"
      },
      {
        email: "b@g.com",
        password: "132"
      },
      {
        email: "c@g.com",
        password: "213"
      }
    ]
    const navigate = useNavigate()
    const [addCred, setAddCred] = useState({email:"",password:""})
    const [formErrors, setFormErrors] = useState({})
    const [submit, setSubmit] = useState(false)
    
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const newObj = {
      email: data.get('email'),
      password: data.get('password'),
    };
    if (creds.find(e => JSON.stringify(e) === JSON.stringify(newObj))){
        navigate('/mainpage')
    }else {
      console.log(addCred )
      console.log('wrong pass')
    }
    setFormErrors(validate(addCred))
    setSubmit(true)
  };
  const validate = (values) => {
    const errors = {}
    if(!addCred.email){
      errors.email = "email is required"
    }
    if(!addCred.password){
      errors.password = "password is required"
    }

    return errors
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <pre>{JSON.stringify(addCred)}</pre>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              // onChange={(e) => {
              //   console.log(e.target.value)
              // }}
            />
            <p>{formErrors.email}</p>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"

            />
            <p>{formErrors.password}</p>

            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
            //   onClick={()=> navigate("/mainpage")}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }
            }
            >
            Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link href="./SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}