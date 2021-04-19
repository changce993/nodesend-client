import { useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import authContext from '../../../context/auth/authContext'
import { motion } from 'framer-motion';
import { Input, Button, Div, Text } from '../../Atoms';
import { container, item } from './framer';

const Index = () => {

  const { registerUser, message } = useContext(authContext);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('El nombre es obligatorio'),
      email: Yup.string().email('Email no valido').required('El email es obligatorio'),
      password: Yup.string().required('La contraseña es obligatoria').min(6, 'La contraseña debe tener al menos 6 caracteres'),
    }),
    onSubmit: values => {
      registerUser(values)
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
          name="name"
          type="text"
          value={values.name}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Nombre de usuario"
          width="100%"
        />
        {formik.touched.name && formik.errors.name && (
          <Text variants={item} size="caption" color="error">{formik.errors.name}</Text>
        )}
      </Div>

      <Div variants={item}>
        <Input
          name="email"
          type="email"
          value={values.email}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Correo electronico"
          width="100%"
        />
        {formik.touched.email && formik.errors.email && (
          <Text variants={item} size="caption" color="error">{formik.errors.email}</Text>
        )}
      </Div>

      <Div variants={item}>
        <Input
          name="password"
          type="password"
          value={values.password}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder="Contraseña"
          width="100%"
        />
        {formik.touched.password && formik.errors.password && (
          <Text variants={item} size="caption" color="error">{formik.errors.password}</Text>
        )}
      </Div>

      <Div variants={item}>
        <Button width="100%">Registrarme</Button>
      </Div>
      {message && <Text variants={item} size="caption" textAlign="center">{message}</Text>}
    </Div>
  )
}

export default Index
