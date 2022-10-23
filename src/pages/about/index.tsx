import { Button, Grid, Typography, Box, Avatar } from '@material-ui/core';
import styles from './styles';
import me from '../../assets/image/me.png';

interface Props {
    language: string,
}

const About = (get: Props) => {
    const language = get.language;
    const classes = styles();

    return (
        <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
            <Grid item xl={7} lg={5} md={5} sm={5} xs={10}>
                <img className={classes.image} height="500" src={me} />
            </Grid>
            <Grid item className={classes.about} xl={7} lg={5} md={5} sm={8} xs={10}>
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
        </Grid>
    );
}

export default About;