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
                {isLoading && (
                    <div 
                        style={{
                            display: 'flex', 
                            alignItems: 'center', 
                            width: '100%', 
                            height: '100px'
                        }}
                    >
                        <CircularProgress className={classes.progress} />
                    </div>
                )}
                {children}
            </Paper>
        </Modal>
    );
};

export default CustomModal;
