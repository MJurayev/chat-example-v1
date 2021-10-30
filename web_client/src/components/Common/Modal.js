import { DialogTitle, Dialog ,DialogActions, Button} from '@material-ui/core';

export default function Modal({isOpen, setIsOpen, callback}) {
    const handleClose =()=>{
        setIsOpen(false)
        callback()
    }
    const close=()=>{
        setIsOpen(false)
    }
    return (
        <Dialog
            open={isOpen}
            onClose={close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">{"Xabarni chindan O'chirmoqchimisiz?"}</DialogTitle>

            <DialogActions>
            <Button onClick={close} color="danger" autoFocus>
                Yo'q
            </Button>
            <Button onClick={handleClose} color="primary">
                Ha
            </Button>
            </DialogActions>
      </Dialog>
    )
}
