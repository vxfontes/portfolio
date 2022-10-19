import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Dialog, useMediaQuery, Box, Slide } from '@material-ui/core';
import { Menu, Close } from '@material-ui/icons';
import styles from './styles';
import theme from "../../theme";
import ColorButtonBlue from '../buttons/Blue';
import { TransitionProps } from '@material-ui/core/transitions/transition';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MyAppBar = () => {

    const classes = styles();
    const [open, setOpen] = useState(false);
    const showMenu = useMediaQuery(theme.breakpoints.down('sm'));
    const showOptions = useMediaQuery(theme.breakpoints.up('sm'));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar color='transparent' position="fixed" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h5" className={classes.name}>Port
                        <span className={classes.span}>folio.</span>
                    </Typography>

                    {/* opções */}
                    {showOptions &&
                        <Box className={classes.options}>
                            <Typography variant="h6" color='secondary'>
                                FALTA ESTILIZAR VERSAO DESKTOP /
                            </Typography>
                            <Typography variant="h6" color='secondary'>
                                About /
                            </Typography>
                            <Typography variant="h6" color='secondary'>
                                Projects /
                            </Typography>
                            <Typography variant="h6" color='secondary'>
                                Contact/
                            </Typography>
                        </Box>
                    }

                    {/* menu */}
                    {showMenu && <>
                        <IconButton edge='end' aria-label="menu" color="secondary" onClick={handleOpen}>
                            <Menu />
                        </IconButton>
                    </>}


                    {/* Dialog */}
                    <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition} keepMounted>
                        <Box className={classes.dialog}>
                            <IconButton edge='end' aria-label="menu" color="secondary" onClick={handleClose}>
                                <Close />
                            </IconButton>
                        </Box>
                    </Dialog>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default MyAppBar;