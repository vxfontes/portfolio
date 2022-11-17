import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, Slide, Theme } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import MyAppBar from "../../components/appBar"
import About from "../about";
import Presentation from "../presentation";
import Projects from "../projects";
import Skills from "../skills";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const styles = makeStyles((theme: Theme) =>
    createStyles({
        dialog: {
            backgroundColor: theme.palette.mybackgroundColor?.main,
            border: 'none'
        },

        carregar: {
            backgroundColor: theme.palette.mybackgroundColor?.main,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center'
        }
    })
)

const Home = () => {
    const classes = styles();
    const [language, setLanguage] = useState<string>('portuguese');
    const [open, setOpen] = React.useState(true);
    const [loading, setLoading] = React.useState(false);

    const handleClose = (e: string) => {
        setLanguage(e);
        setOpen(false);
        setTimeout(() => {
            setLoading(true);
        }, 1000);
    };

    return (
        <>
            <Dialog style={{ border: 'none' }} open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
                <Box className={classes.dialog}>
                    <DialogContent>
                        <DialogContentText color="secondary">
                            Escolha a sua linguagem <br />
                            Choose your language
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => handleClose('portuguese')} color="secondary" variant="text">
                            Português
                        </Button>
                        <Button onClick={() => handleClose('english')} color="secondary" variant="text">
                            English
                        </Button>
                    </DialogActions>
                </Box>
            </Dialog>

            {loading ? (
                <>
                    <Navigate to={`/${language}`} />
                </>
            ) : (
                <Box className={classes.carregar}>
                    <CircularProgress color="secondary" />
                </Box>
            )}
        </>
    );
}

export default Home;