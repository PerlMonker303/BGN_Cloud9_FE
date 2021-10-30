import { useStyles } from "./styles";
import { Modal, Paper } from "@mui/material";
import { CircularProgress } from "@material-ui/core";

const CustomModal = ({
    isOpen,
    setIsOpen,
    children,
    resizeAsChild = false,
    isLoading = false
}) => {
    const classes = useStyles();

    const handleClose = () => {
        setIsOpen(false);
    };

    const renderLoader = () => {
        return <CircularProgress className={classes.progress} />
    }

    return (
        <Modal onClose={handleClose} open={isOpen} className={classes.modal}>
            <Paper className={resizeAsChild ? classes.paperAsChild : classes.paper}>
                {isLoading && renderLoader()}
                {children}
            </Paper>
        </Modal>
    );
};

export default CustomModal;
