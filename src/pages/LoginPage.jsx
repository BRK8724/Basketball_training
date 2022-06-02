import React, { useState, useEffect } from 'react'
import BackgroundImage from '../assets/images/bg.png'
import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
// material
import { Stack, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// component
import Iconify from '../components/Iconify';
import { auth } from '../services';

import '../App.css'

export default function SignInPage() {
  
    const [showPassword, setShowPassword] = useState(false);
    const [response, setResponse] = useState({});
  
    const LoginSchema = Yup.object().shape({
      email: Yup.string().email('И-Мейлээ ахин шалгана уу').required('Заавал бөглөнө үү'),
      password: Yup.string().min(8, 'Доод тал нь 8 оронтой байна').required('Нууц үгээ оруулна уу'),
    });
  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: LoginSchema,
      onSubmit: (loginFormData) => {
        // navigate('/dashboard', { replace: true });
        const { email, password } = loginFormData;
        
        setResponse(auth.login({ email, password }));
      },
    });
  
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;
  
    const handleShowPassword = () => {
      setShowPassword((show) => !show);
    };
  
    return (
        <div style={ HeaderStyle } className="text-center p-5-auto">
            <FormikProvider value={formik}>
                <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
                <Stack spacing={3}>
                    <TextField
                    fullWidth
                    autoComplete="email"
                    type="email"
                    label="Цахим шуудан"
                    {...getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                    />
        
                    <TextField
                    fullWidth
                    autoComplete="current-password"
                    type={showPassword ? 'text' : 'password'}
                    label="Нууц үг"
                    {...getFieldProps('password')}
                    InputProps={{
                        endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword} edge="end">
                            <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                            </IconButton>
                        </InputAdornment>
                        ),
                    }}
                    error={Boolean(touched.password && errors.password)}
                    helperText={touched.password && errors.password}
                    />
                </Stack>
                <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} style={{marginTop: 40}}>
                    Нэвтрэх
                </LoadingButton>
                </Form>
            </FormikProvider>
        </div>
    );
    // return (
    //     <div style={ HeaderStyle }>
    //         <div className="text-center p-5-auto">
    //             <h2>Нэвтрэх</h2>
    //             <form action="/home">
    //                 <p>
    //                     <label>И-Мэйл</label><br/>
    //                     <input type="text" name="first_name" required />
    //                 </p>
    //                 <p>
    //                     <label>Нууц үг</label>
    //                     <Link to="/forget-password"><label className="right-label">Нууц үг мартсан?</label></Link>
    //                     <br/>
    //                     <input type="password" name="password" required />
    //                 </p>
    //                 <p>
    //                     <button id="sub_btn" type="submit">Нэвтрэх</button>
    //                 </p>
    //             </form>
    //             <footer>
    //                 <p><Link to="/register">Бүртгүүлэх</Link></p>
    //             </footer>
    //         </div>
    //     </div>
    // )
}

const HeaderStyle = {
    width: "100%",
    height: "110vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
