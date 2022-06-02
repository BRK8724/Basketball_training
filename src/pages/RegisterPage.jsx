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

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [response, setResponse] = useState({});
  
    const LoginSchema = Yup.object().shape({
      email: Yup.string().email('И-Мейлээ ахин шалгана уу').required('Заавал бөглөнө үү'),
      password: Yup.string().min(8, 'Доод тал нь 8 оронтой байна').required('Нууц үгээ оруулна уу'),
      firstname: Yup.string().required('Хоосон байж болохгүй'),
      lastname: Yup.string().required('Хоосон байж болохгүй'),
      age: Yup.string().min(2, 'Доод тал нь 8 оронтой байна').required('Насаа оруулна уу'),
      phone: Yup.string().min(8, 'Доод тал нь 8 оронтой байна').required('Утасны дугаараа оруулна уу'),
    });
  
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        age: '',
        phone: '',
      },
      validationSchema: LoginSchema,
      onSubmit: (loginFormData) => {
        // navigate('/dashboard', { replace: true });
        const { email, password, firstname, lastname, age, phone } = loginFormData;
        
        setResponse(auth.register({ email, password, firstname, lastname, age, phone }));
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
                        autoComplete="lastname"
                        type="lastname"
                        label="Овог"
                        {...getFieldProps('lastname')}
                        error={Boolean(touched.lastname && errors.lastname)}
                        helperText={touched.lastname && errors.lastname}
                    />

                    <TextField
                        fullWidth
                        autoComplete="firstname"
                        type="firstname"
                        label="Нэр"
                        {...getFieldProps('firstname')}
                        error={Boolean(touched.firstname && errors.firstname)}
                        helperText={touched.firstname && errors.firstname}
                    />

                    <TextField
                        fullWidth
                        autoComplete="age"
                        type="age"
                        label="Нас"
                        {...getFieldProps('age')}
                        error={Boolean(touched.age && errors.age)}
                        helperText={touched.age && errors.age}
                    />

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
                        autoComplete="phone"
                        type="phone"
                        label="Утасны дугаар"
                        {...getFieldProps('phone')}
                        error={Boolean(touched.phone && errors.phone)}
                        helperText={touched.phone && errors.phone}
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
                    Бүртгүүлэх
                </LoadingButton>
                </Form>
            </FormikProvider>
        </div>
    );

    // return (
    //     <header style={ HeaderStyle }>
    //         <div className="text-center p-5-auto">
    //             <h2>Бүртгэл үүсгэх</h2>
    //             <form action="/home">
    //                 <p>
    //                     <label>Овог</label><br/>
    //                     <input type="text" name="first_name" required />
    //                 </p>
    //                 <p>
    //                     <label>Нэр</label><br/>
    //                     <input type="text" name="first_name" required />
    //                 </p>
    //                 <p>
    //                     <label>И-Мэйл</label><br/>
    //                     <input type="email" name="email" required />
    //                 </p>
    //                 <p>
    //                     <label>Нууц үг</label><br/>
    //                     <input type="password" name="password" requiredc />
    //                 </p>
    //                 <p>
    //                     <label>Нууц үг</label><br/>
    //                     <input type="password" name="password" requiredc />
    //                 </p>
    //                 <p>
    //                     <button id="sub_btn" type="submit">Бүртгүүлэх</button>
    //                 </p>
    //             </form>
    //         </div>
    //     </header>
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