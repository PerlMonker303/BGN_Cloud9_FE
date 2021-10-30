import { useStyles } from "./styles";
import { Modal, Paper } from "@mui/material";

const CustomModal = ({
    isOpen,
    setIsOpen,
    children,
    resizeAsChild = false
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <Modal onClose={handleClose} open={isOpen} className={classes.modal}>
            <Paper className={resizeAsChild ? classes.paperAsChild : classes.paper}>
                {children}
            </Paper>
        </Modal>
    );
};

export default CustomModal;
