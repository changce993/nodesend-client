import { useContext } from 'react';
import { useFormik } from 'formik';
import { useRouter } from 'next/router';
import * as Yup from 'yup';
import { motion } from 'framer-motion';
import { Input, Button, Div, Text } from '../../Atoms';
import { container, item } from './framer';
import authContext from '../../../context/auth/authContext'

const Index = () => {
  const { login, message } = useContext(authContext);
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Email no valido').required('El email es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria'),
    }),
    onSubmit: values => {
      login(values);
      setTimeout(() => {
        router.reload()
      }, 1000);
    }
  });

  const { handleSubmit, handleBlur, handleChange, values } = formik;

  return (
    <Div
      onSubmit={handleSubmit}
      as={motion.form}
      display="flex"
      flexDirection="column"
      gridGap="1rem"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Div variants={item}>
        <Input
          name="email"
          type="email"
          placeholder="Correo electronico"
          width="100%"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <Text variants={item} size="caption" color="error">{formik.errors.email}</Text>
        )}
      </Div>

      <Div variants={item}>
        <Input
          name="password"
          type="password"
          placeholder="Contraseña"
          width="100%"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {formik.touched.password && formik.errors.password && (
          <Text variants={item} size="caption" color="error">{formik.errors.password}</Text>
        )}
      </Div>

      <Div variants={item}>
        <Button width="100%">Iniciar sesion</Button>
      </Div>
      {message && <Text variants={item} size="caption" textAlign="center">{message}</Text>}
    </Div>
  )
}

export default Index
