import { Box, Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogContentText, Slide, Theme } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { createStyles, makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { dataBaseApp } from "../../firebase";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import axios from "axios";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const current = new Date();
const date = `${current.getMonth() + 1}/${current.getFullYear()}`;

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
    const [language, setLanguage] = useState<string>('english');
    const [IP, setIP] = useState<string>('');
    const [IPArray, setIPArray] = useState<object>({});
    const [IPPlace, setIPPlace] = useState<string>(''); 
    const [open, setOpen] = React.useState(true);
    const [loading, setLoading] = React.useState(false);
    const [count, setCount] = useState<number>(0);
    let ip;

    const docRef = collection(dataBaseApp, "acessos");
    getDocs(docRef).then((res) => {
        let data = (res.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        console.log(data);

        data.map((d: any) => {
            let valor = 0;
            if (Number(d.acesso) === NaN) {
                valor = 0;
            } else {
                valor = Number(d.acesso)
            }
            setCount(valor + 1);
        })
    });

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/');
        setIPArray(res.data);
        setIP(res.data.IPv4);
        setIPPlace(res.data.city+'-'+res.data.country_code)
    }

    useEffect(() => {
        getData()
    }, []);


    async function enviandoValores(res: any) {
        
        try {
            await setDoc(doc(dataBaseApp, "acessos", "acesso"), {
                acesso: count,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }

        try {
            await setDoc(doc(dataBaseApp, "IPs", res.data.IPv4), {
                IP: res.data.IPv4,
                place: res.data.city+'-'+res.data.country_code,
                detalhes: res.data,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
    
    const setLanguageDefault = (e: string) => {
        const res = axios.get('https://geolocation-db.com/json/');
        setLanguage(e);
        setOpen(false);
        setTimeout(() => {
            enviandoValores(res);
            setLoading(true);
        }, 1000);
    }

    return (
        <>
            <Dialog style={{ border: 'none' }} open={open} TransitionComponent={Transition} keepMounted>
                <Box className={classes.dialog}>
                    <DialogContent>
                        <DialogContentText color="secondary">
                            Escolha a sua linguagem <br />
                            Choose your language
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => setLanguageDefault('portuguese')} color="secondary" variant="text">
                            Português
                        </Button>
                        <Button onClick={() => setLanguageDefault('english')} color="secondary" variant="text">
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