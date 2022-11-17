import { Button, Grid, Link, Typography } from '@material-ui/core';
import { ArrowForward } from '@material-ui/icons';
import { useParams } from 'react-router-dom';

import NormalAvatar from '../../components/avatars/normalAvatar';
import { LanguageProps } from '../../interfaces/languageProps';
import styles from './styles';


const Presentation = () => {
    
    const params = useParams();
    const language = params.language;
    const classes = styles();

    return (
        <Grid className={classes.paper} container justifyContent="center" alignItems="center">
            <Grid item xl={5} lg={5} md={6} sm={6} xs={12} style={{ marginTop: -50 }}>
                <NormalAvatar />
            </Grid>
            <Grid item xl={7} lg={7} md={6} sm={6} xs={9}>
                <Grid className={classes.content} container direction='row' alignItems="center" spacing={1}>
                    <Grid className={classes.principalText} item xl={8} lg={9} md={10} sm={10} xs={12}>
                        {language === 'portuguese' ? (
                            <Typography className={classes.hello} variant='h6' color='secondary' align='left'>
                                Olá, eu sou
                            </Typography>
                        ) : (
                            <Typography className={classes.hello} variant='h6' color='secondary' align='left'>
                                Hello, I'm
                            </Typography>
                        )}
                        <Typography variant='h2' color='secondary'>
                            Vanessa Fontes
                        </Typography>
                    </Grid>
                    <Grid item xl={8} lg={7} md={9} sm={12} xs={12}>
                        <Grid container className={classes.justify} direction='row' spacing={1}>
                            <Grid item xl={6} lg={7} md={7} sm={10} xs={11}>
                                <Link href='https://bit.ly/curriculovxfontes' style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button className={classes.typo} variant="outlined" color='secondary' fullWidth>
                                        {language === 'portuguese' ? (
                                            <Typography variant='h6'>
                                                Baixar currículo
                                            </Typography>
                                        ) : (
                                            <Typography variant='h6'>
                                                Download Resume
                                            </Typography>
                                        )}
                                        <ArrowForward style={{ marginLeft: '1vw' }} />
                                    </Button>
                                </Link>
                            </Grid>
                            <Grid item xl={4} lg={4} md={4} sm={10} xs={11}>
                                <Link href='https://api.whatsapp.com/send?phone=5575988389894' style={{ textDecoration: 'none', color: 'white' }}>
                                    <Button className={classes.typo} variant="contained" color="primary" fullWidth>
                                        {language === 'portuguese' ? (
                                            <Typography variant='h6'>
                                                Me Contate
                                            </Typography>
                                        ) : (
                                            <Typography variant='h6'>
                                                Contact Me
                                            </Typography>
                                        )}
                                    </Button>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Presentation;