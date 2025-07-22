import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import clsx from 'clsx'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import { Box } from '@material-ui/core'
import { TextFieldCustom } from 'components/FormElements'
import { ButtonColorWhite } from 'components/ButtonCustom'
import * as yup from 'yup'
import { useFormik } from 'formik'
import { useStyles } from './styles'
import ReCAPTCHA from 'react-google-recaptcha'
import { Alert } from '@material-ui/lab'
import axios from 'axios'
import { gaEvent } from 'utils/ga'
import { useEffect } from 'react'

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY_CAPTCHA_FRONT_END
  ? process.env.NEXT_PUBLIC_GOOGLE_API_KEY_CAPTCHA_FRONT_END
  : ''
const API_URL_TO_SEND_CONTACT_FORM = `${
  process.env.NEXT_PUBLIC_API_BACKEND ? process.env.NEXT_PUBLIC_API_BACKEND : ''
}/customer-service-forms`

const CustomerServiceForm = () => {
  const [startFillForm, setStartFillForm] = useState(false)
  const [openModalReturn, setOpenModalReturn] = useState(false)
  const [isToSshowMessageSucess, setIsToSshowMessageSucess] = useState(false)
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)

  useEffect(() => {
    gaEvent({
      category: 'CustomerServiceForm',
      action: 'TouchForm'
    })
  }, [startFillForm])

  const handleClose = (
    event: React.SyntheticEvent | React.MouseEvent,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }

    setOpenModalReturn(false)
  }

  const classes = useStyles()
  const { t } = useTranslation('common')

  const validationSchema = yup.object({
    name: yup.string().required(t('customer_service_form.form_required.name')),
    email: yup
      .string()
      .email(t('customer_service_form.email_is_invalid'))
      .required(t('customer_service_form.form_required.email')),
    phone: yup
      .string()
      .required(t('customer_service_form.form_required.phone')),
    subject: yup
      .string()
      .required(t('customer_service_form.form_required.subject')),
    message: yup
      .string()
      .required(t('customer_service_form.form_required.message')),
    recaptcha: yup
      .string()
      .required(t('customer_service_form.form_required.recaptcha'))
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      recaptcha: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      axios
        .post(API_URL_TO_SEND_CONTACT_FORM, {
          name: values.name,
          email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
          verifyToken: values.recaptcha,
          browser: window.navigator.appVersion,
          userDateTime: new Date().toString()
        })
        .then(() => {
          formik.resetForm()
          setIsToSshowMessageSucess(true)
          gaEvent({
            category: 'CustomerServiceForm',
            action: 'ContactSuccess'
          })
          setOpenModalReturn(true)
          recaptchaRef.current?.reset()
        })
        .catch(() => {
          gaEvent({
            category: 'CustomerServiceForm',
            action: 'ContactFail'
          })
          setIsToSshowMessageSucess(false)
          setOpenModalReturn(true)
        })
    }
  })

  return (
    <div>
      <form
        onSubmit={formik.handleSubmit}
        onChange={() => setStartFillForm(true)}
      >
        <TextFieldCustom
          fullWidth
          id="name"
          name="name"
          label={t('customer_service_form.form_labels.name')}
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          color="secondary"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
        />
        <TextFieldCustom
          fullWidth
          id="email"
          name="email"
          label={t('customer_service_form.form_labels.email')}
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          color="secondary"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <TextFieldCustom
          fullWidth
          id="phone"
          name="phone"
          label={t('customer_service_form.form_labels.phone')}
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          color="secondary"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
        />
        <TextFieldCustom
          fullWidth
          id="subject"
          name="subject"
          label={t('customer_service_form.form_labels.subject')}
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          color="secondary"
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />
        <TextFieldCustom
          fullWidth
          id="message"
          name="message"
          label={t('customer_service_form.form_labels.message')}
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          color="secondary"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
        />

        <Box pt={2}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={GOOGLE_API_KEY}
            onChange={(value) => formik.setFieldValue('recaptcha', value)}
            onExpired={() => recaptchaRef.current?.reset()}
          />
          {formik.errors.recaptcha && formik.touched.recaptcha && (
            <Box pt={2}>
              <Alert variant="outlined" severity="error">
                {formik.errors.recaptcha}
              </Alert>
            </Box>
          )}
        </Box>
        <Box pt={2}>
          <ButtonColorWhite
            color="secondary"
            variant="contained"
            size="small"
            type="submit"
            disableElevation
          >
            {t('customer_service_form.form_labels.submit')}
          </ButtonColorWhite>
        </Box>
      </form>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={openModalReturn}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModalReturn}>
          <>
            {isToSshowMessageSucess && (
              <Alert severity="success">
                {t('customer_service_form.message_response.success')}
              </Alert>
            )}
            {!isToSshowMessageSucess && (
              <Alert severity="error">
                {' '}
                {t('customer_service_form.message_response.fail')}
              </Alert>
            )}
          </>
        </Fade>
      </Modal>
    </div>
  )
}

export default CustomerServiceForm
