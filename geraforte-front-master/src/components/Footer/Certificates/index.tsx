import useStyles from './styles'

const Certificates = () => {
  const classes = useStyles()
  return (
    <div className={classes.certificates}>
      <div>
        <img
          src={'/img/iso_9001.png'}
          alt="ISO 9001"
          className={classes.image}
        />
      </div>
    </div>
  )
}

export default Certificates
