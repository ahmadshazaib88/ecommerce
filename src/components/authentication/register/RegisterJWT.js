import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Checkbox,
  FormHelperText,
  TextField,
  Typography,
  Link
} from '@material-ui/core';
import useAuth from '../../../hooks/useAuth';
import useMounted from '../../../hooks/useMounted';

const RegisterJWT = (props) => {
  const mounted = useMounted();
  const { register } = useAuth();

  return (
    <Formik
      initialValues={{
        email: '',
        name: '',
        password: '',
        policy: false,
        submit: null
      }}
      validationSchema={Yup
        .object()
        .shape({
          email: Yup
            .string()
            .email('Must be a valid email')
            .max(255)
            .required('Email is required'),
          password: Yup
            .string()
            .min(7)
            .max(255)
            .required('Password is required'),
        })}
      onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
        try {
          await register(values.email, values.name, values.password);

          if (mounted.current) {
            setStatus({ success: true });
            setSubmitting(false);
          }
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
        }
      }}
    >
      {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
        <form
          noValidate
          onSubmit={handleSubmit}
          {...props}
        >
          <TextField
            error={Boolean(touched.email && errors.email)}
            fullWidth
            helperText={touched.email && errors.email}
            label="Email Address"
            margin="normal"
            name="email"
            onBlur={handleBlur}
            onChange={handleChange}
            type="email"
            value={values.email}
            variant="outlined"
          />
          <TextField
            error={Boolean(touched.password && errors.password)}
            fullWidth
            helperText={touched.password && errors.password}
            label="Password"
            margin="normal"
            name="password"
            onBlur={handleBlur}
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          {Boolean(touched.policy && errors.policy) && (
            <FormHelperText error>
              {errors.policy}
            </FormHelperText>
          )}
          {errors.submit && (
            <Box sx={{ mt: 3 }}>
              <FormHelperText error>
                {errors.submit}
              </FormHelperText>
            </Box>
          )}
          <Box sx={{ mt: 2 }}>
            <Button
              color="primary"
              disabled={isSubmitting}
              fullWidth
              size="large"
              type="submit"
              variant="contained"
            >
              Register
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default RegisterJWT;
