import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import AdjustOutlinedIcon from '@material-ui/icons/AdjustOutlined';
import styles from './styles';
import me from '../../assets/image/me.png';
import theme from '../../theme';


const About = () => {
    
    const params = useParams();
    const language = params.language;
    const showData = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = styles();

    return (
        <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
            <Grid item xl={6} lg={5} md={5} sm={5} xs={10}>
                <img className={classes.image} height="500" src={me} alt='developer' />
            </Grid>
            <Grid item className={classes.about} xl={6} lg={5} md={5} sm={8} xs={10}>
                {language === 'portuguese' ? (
                    <>
                        <Typography className={classes.typoTitle} variant='h4' color='secondary'>
                            <span style={{ borderBottom: "3px solid #000000", marginRight: '0.22em' }}>Quem </span> sou eu?
                        </Typography>
                        <br />
                        <Typography className={classes.typoText} variant='h6' color='secondary'>
                            Cursando bacharelado em ciências exatas e tecnológicas com terminalidade em engenharia da computação.
                            Tenho facilidade em aprendizado e alto desempenho voltado a atingir ou superar metas. Oferecendo conhecimentos
                            em tecnologia, exatas e design, com experiência em elaboração de estratégias em equipe.
                        </Typography>
                    </>
                ) : (
                    <>
                        <Typography className={classes.typoTitle} variant='h4' color='secondary'>
                            <span style={{ borderBottom: "3px solid #000000", marginRight: '0.22em' }}>About</span> me
                        </Typography>
                        <Typography className={classes.typoText} variant='h6' color='secondary'>
                            Doing bachelor's degree in exact sciences and technology with terminality in computer engineering.
                            I have a high performance returned to achieve or exceed goals and ease of learning. Offering knowledge in
                            technology, exacts and design, with experience in team strategy development.
                        </Typography>
                    </>
                )}
            </Grid>

            {showData && (
                <Grid style={{ marginTop: '2vh' }} container direction='row' justifyContent='space-between' alignItems="center" xl={8} lg={8} md={8} sm={8} >
                    <Box>
                        <AdjustOutlinedIcon className={classes.icon} color='secondary' />
                        <Typography color='secondary' variant='h5'>name</Typography>
                        <Typography variant='body2' style={{ color: '#b8b8b89e' }}>Vanessa Ramos Fontes</Typography>
                    </Box>
                    <Box>
                        <AdjustOutlinedIcon className={classes.icon} color='secondary' />
                        <Typography color='secondary' variant='h5'>email</Typography>
                        <Typography variant='body2' style={{ color: '#b8b8b89e' }}>nessa1vane@icloud.com</Typography>
                    </Box>
                    <Box>
                        <AdjustOutlinedIcon className={classes.icon} color='secondary' />
                        <Typography color='secondary' variant='h5'>cellphone</Typography>
                        <Typography variant='body2' style={{ color: '#b8b8b89e' }}>+55 (75) 98838-9894</Typography>
                    </Box>
                    <Box>
                        <AdjustOutlinedIcon className={classes.icon} color='secondary' />
                        <Typography color='secondary' variant='h5'>github</Typography>
                        <Typography variant='body2' style={{ color: '#b8b8b89e' }}>
                            <a href='https://github.com/vxfontes' style={{ textDecoration: 'none', color: '#b8b8b89e' }} >vxfontes</a>
                        </Typography>
                    </Box>
                </Grid>
            )}
        </Grid>
    );
}

export default About;