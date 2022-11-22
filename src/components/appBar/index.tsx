import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Dialog, useMediaQuery, Box, Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import { Menu, Close } from '@material-ui/icons';

// local
import styles from './styles';
import theme from "../../theme";
import { Link, useParams } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const MyAppBar = () => {
    const params = useParams();
    const language = params.language;

    const classes = styles();
    const [open, setOpen] = useState(false);
    const showMenu = useMediaQuery(theme.breakpoints.down('sm'));
    const showOptions = useMediaQuery(theme.breakpoints.up('md'));

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const data = {
        "english": [
            "About", "Skills", "Projects", "Contact"
        ],
        "portuguese": [
            "Sobre", "Habilidades", "Projetos", "Contato"
        ]
    }

    const MenuChildren = ({ children }: any) => {
        if (showMenu === true) {
            return (
                <>
                    <Dialog open={open} onClose={handleClose} fullScreen TransitionComponent={Transition} keepMounted>
                        <Box className={classes.dialog}>
                            <IconButton edge='end' aria-label="menu" color="secondary" onClick={handleClose}>
                                <Close />
                            </IconButton>
                            {children}
                        </Box>
                    </Dialog>
                </>
            )
        } else if (showOptions === true) {
            return (
                <>
                    {children}
                </>
            )
        } else {
            return (
                <></>
            )
        }
    }

    return (
        <>
            <AppBar color='transparent' position="fixed" elevation={0}>
                <Toolbar className={classes.toolbar}>
                    <Link className={classes.decoration} to={`/${language}`}>
                        <Typography variant="h5" className={classes.name}>
                            Port
                            <span className={classes.span}>folio.</span>
                        </Typography>
                    </Link>

                    {/* menu */}
                    {showMenu && <>
                        <IconButton edge='end' aria-label="menu" color="secondary" onClick={handleOpen}>
                            <Menu />
                        </IconButton>
                    </>}

                    <MenuChildren>
                        <Box className={classes.options}>
                            <Box className={classes.box}>
                                {language === 'english' ? (
                                    <>
                                        {data.english.map((type: string) => {
                                            return (
                                                <Link to={`/${type.toLowerCase()}/${language}`} style={{ textDecoration: 'none', color: 'white' }}>
                                                    <Typography className={classes.bar} variant="h6" color='secondary'>
                                                        {type}
                                                    </Typography>
                                                </Link>
                                            )
                                        })}
                                    </>
                                ) : (
                                    <>
                                        {data.portuguese.map((type: string) => {
                                            return (
                                                <Link to={`/${type.toLowerCase()}/${language}`} style={{ textDecoration: 'none', color: 'white' }}>
                                                    <Typography className={classes.bar} variant="h6" color='secondary'>
                                                        {type}
                                                    </Typography>
                                                </Link>
                                            )
                                        })}
                                    </>
                                )}
                            </Box>
                        </Box>
                    </MenuChildren>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default MyAppBar;