import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import { useStyles } from './style'
import WhatsAppForm from './WhatsAppForm'

interface ModalWhatsAppProps {
  isOpen: boolean
  setIsOpen: (state: boolean) => void
}

const ModalWhatsApp = ({ isOpen, setIsOpen }: ModalWhatsAppProps) => {
  const classes = useStyles()

  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500
      }}
    >
      <WhatsAppForm setIsOpen={setIsOpen} />
    </Modal>
  )
}

export default ModalWhatsApp
