import React, { useState } from 'react'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { Box, Typography } from '@material-ui/core'
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
import MenuItem from '@material-ui/core/MenuItem'
import {
  DepartmentOption,
  getOptionsByLocale,
  getTitle
} from './departmentOptions'

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY_CAPTCHA_FRONT_END
  ? process.env.NEXT_PUBLIC_GOOGLE_API_KEY_CAPTCHA_FRONT_END
  : ''
const API_URL_TO_SEND_CONTACT_WHATSAPP = `${
  process.env.NEXT_PUBLIC_API_BACKEND ? process.env.NEXT_PUBLIC_API_BACKEND : ''
}/whatsapp-forms`

interface WhatsAppForm {
  setIsOpen: (state: boolean) => void
}

const WhatsAppForm = ({ setIsOpen }: WhatsAppForm) => {
  const [startFillForm, setStartFillForm] = useState(false)
  const router = useRouter()
  const { locale = 'pt' } = router
  const recaptchaRef = React.useRef<ReCAPTCHA>(null)
  const CATEGORY_GA = 'WhatsAppForm'

  useEffect(() => {
    gaEvent({
      category: CATEGORY_GA,
      action: 'TouchForm'
    })
  }, [startFillForm])

  const departmentsOptions = getOptionsByLocale(locale)

  const classes = useStyles()
  const { t } = useTranslation('common')

  const validationSchema = yup.object({
    name: yup.string().required(t('whatsApp_modal.form_required.name')),
    email: yup
      .string()
      .email(t('whatsApp_modal.email_is_invalid'))
      .required(t('whatsApp_modal.form_required.email')),
    department: yup
      .string()
      .required(t('whatsApp_modal.form_required.department')),
    recaptcha: yup
      .string()
      .required(t('whatsApp_modal.form_required.recaptcha'))
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      department: '',
      recaptcha: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const [departamentSelected] = departmentsOptions.filter(
        (item: DepartmentOption) => item.name === values.department
      )
      axios
        .post(API_URL_TO_SEND_CONTACT_WHATSAPP, {
          name: values.name,
          email: values.email,
          department: departamentSelected.name,
          verifyToken: values.recaptcha,
          browser: window.navigator.appVersion,
          userDateTime: new Date().toString()
        })
        .then(() => {
          formik.resetForm()
          window
            .open(`https://wa.me/${departamentSelected.phone}`, '_blank')
            .focus()

          gaEvent({
            category: CATEGORY_GA,
            action: 'ContactSuccess'
          })
          recaptchaRef.current?.reset()
          setIsOpen(false)
        })
        .catch(() => {
          gaEvent({
            category: CATEGORY_GA,
            action: 'ContactFail'
          })
        })
    }
  })

  return (
    <div className={classes.paper}>
      <form
        onSubmit={formik.handleSubmit}
        onChange={() => setStartFillForm(true)}
      >
        <Typography variant="h2">
          <Box fontWeight="fontWeightMedium" pt={1}>
            {getTitle(locale)}
          </Box>
        </Typography>
        <TextFieldCustom
          fullWidth
          id="name"
          name="name"
          label={t('whatsApp_modal.form_labels.name')}
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
          label={t('whatsApp_modal.form_labels.email')}
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
          id="department"
          name="department"
          label={t('whatsApp_modal.form_labels.department')}
          className={clsx(classes.margin, classes.textField)}
          variant="filled"
          color="secondary"
          value={formik.values.department}
          onChange={formik.handleChange}
          error={formik.touched.department && Boolean(formik.errors.department)}
          helperText={formik.touched.department && formik.errors.department}
          select
        >
          {departmentsOptions.map((option) => (
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          ))}
        </TextFieldCustom>

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
            className={classes.button}
            color="secondary"
            variant="contained"
            size="small"
            type="submit"
            fullWidth
            disableElevation
          >
            {t('whatsApp_modal.form_labels.submit')}
          </ButtonColorWhite>
        </Box>
      </form>
    </div>
  )
}

export default WhatsAppForm
