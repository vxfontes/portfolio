import { Box, Button, Chip, Dialog, DialogContent, Grid, ImageList, ImageListItem, Link, Typography, useMediaQuery } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyAppBar from "../../components/appBar";
import data from '../../data/projects.json';
import { ProjectProps } from '../../interface/ProjectProps';
import theme from "../../theme";
import styles from "./styles";
import TestProj from "./testProj";

interface BannerProps {
    proj: ProjectProps,
    item: string,
    length?: number,
}

const Infos = () => {
    let navigate = useNavigate();
    const params = useParams();
    const language = params.language;
    const classes = styles();
    const showBig = useMediaQuery(theme.breakpoints.up('lg'));
    const mobileVersion = useMediaQuery(theme.breakpoints.down('sm'));
    const id = Number(params.project);

    const [open, setOpen] = useState(false);
    const [imgTemp, setImgTemp] = useState<string>('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const imgOpen = (img: string) => {
        setImgTemp(img)
    }


    const Banner = (props: BannerProps) => {
        const totalItems: number = props.length ? props.length : 3;
        const mediaLength = totalItems;
        const total: number = props.proj.imgMobile.length;
        let items = [];
        let count = [];

        for (let i = 0; i < total; i++) {
            count.push(props.proj.imgMobile[i])
        }
        console.log(count);
        

        for (let i = 0; i < mediaLength; i++) {
            const item = count[i];
    
            const media = (
                <img className={classes.picsMobile} key={i} src={item} alt={props.proj.title} />
            )
    
            items.push(media);
        }

        return (
            <Grid container spacing={0} className="BannerGrid">
                {items}
            </Grid>
        )
    }

    return (
        <>
            {data.map((proj: ProjectProps) => {
                if (proj.id === id) {
                    return (
                        <>
                            <MyAppBar />

                            <Dialog open={open} onClose={handleClose}>
                                <DialogContent>
                                    {/* <img src={}/> */}
                                </DialogContent>
                            </Dialog>

                            {mobileVersion ? (
                                <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                                    <Grid item sm={12} xs={12}>
                                        <Typography style={{ marginTop: 40 }} align="left" variant="h4" color='secondary'>
                                            {proj.title}
                                        </Typography>
                                    </Grid>

                                    <Grid className={classes.alignGrid} item sm={12} xs={12}>
                                        <img className={classes.imgPrincipal} src={proj.imgPrincipal} alt="imagem principal" />
                                    </Grid>

                                    <Grid item sm={12} xs={12}>
                                        <Typography align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                proj.details[0]
                                            ) : (
                                                proj.details[1]
                                            )}
                                        </Typography>
                                        <br />
                                        <Typography style={{ fontWeight: 'bold' }} align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                <>Tecnologias</>
                                            ) : (
                                                <>Technologies</>
                                            )}
                                        </Typography>
                                        <Box className={classes.chips}>
                                            {proj.tecnologies.map((tec: string) => (
                                                <Chip className={classes.chip} size="small" label={tec} variant='outlined' color='secondary' />
                                            ))}
                                        </Box>
                                    </Grid>

                                    {proj.link !== "" && (
                                        <Button className={classes.repoButton} fullWidth variant='outlined' color='secondary'>
                                            <Link style={{ width: '100%', textDecoration: 'none' }} href={proj.link}>
                                                <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6" color='secondary'>Repo</Typography>
                                            </Link>
                                        </Button>
                                    )}
                                </Grid>

                            ) : (
                                <Grid className={classes.paperInfo} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                                    <Grid style={{ height: '20vh' }} item xl={10} lg={10} md={10} sm={10} xs={10}>
                                        <Typography className={classes.typoPrinc} style={{ marginTop: 45 }} align="left" variant="h4" color='secondary'>
                                            {proj.title}
                                        </Typography>
                                    </Grid>

                                    <Grid style={{ height: '60vh' }} item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        <Typography className={classes.typo} align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                proj.details[0]
                                            ) : (
                                                proj.details[1]
                                            )}
                                        </Typography>
                                        <br />
                                        <Typography className={classes.typo} style={{ fontWeight: 'bold' }} align="left" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                <>Tecnologias</>
                                            ) : (
                                                <>Technologies</>
                                            )}
                                        </Typography>

                                        <Box className={classes.chips}>
                                            {proj.tecnologies.map((tec: string) => (
                                                <>
                                                    {showBig ? (
                                                        <Chip className={classes.chip} label={tec} variant='outlined' color='secondary' />
                                                    ) : (
                                                        <Chip className={classes.chip} size="small" label={tec} variant='outlined' color='secondary' />
                                                    )}
                                                </>
                                            ))}
                                        </Box>
                                        {proj.link !== "" && (
                                            <Button className={classes.repoButton} fullWidth variant='outlined' color='secondary'>
                                                <Link style={{ width: '100%', textDecoration: 'none' }} href={proj.link}>
                                                    <Typography style={{ fontWeight: 'bold' }} align="center" variant="h6" color='secondary'>Repo</Typography>
                                                </Link>
                                            </Button>
                                        )}
                                    </Grid>

                                    <Grid style={{ height: '60vh' }} item xl={4} lg={4} md={4} sm={12} xs={12}>
                                        <Box className={classes.principal} >
                                            {proj.id === 7 ? (
                                                <img className={classes.imgPrincipalMobile} src={proj.imgPrincipal} alt="imagem principal" />
                                            ) : (
                                                <img className={classes.imgPrincipal} src={proj.imgPrincipal} alt="imagem principal" />
                                            )}
                                        </Box>
                                    </Grid>
                                </Grid>
                            )}

                            <Grid className={classes.paperColor} style={{ padding: 160 }} container direction='row' justifyContent='center' alignItems="flex-start" spacing={1}>

                                {proj.imgDesktop.length !== 0 && (
                                    <Box>
                                        <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                                            <Typography className={classes.typo} align="left" variant="h5" color='secondary'>Imagens da versão desktop da aplicação: </Typography>
                                        </Grid>
                                        <Grid item className={classes.alignGrid} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            {/* desktop */}
                                            <Carousel fullHeightHover={false}>
                                                {proj.imgDesktop.map((item, i) => (
                                                    <img className={classes.picsDesktop} key={i} src={item} alt={proj.title} />
                                                ))}
                                            </Carousel>
                                        </Grid>
                                    </Box>
                                )}


                                {proj.imgMobile.length !== 0 && (
                                    <Box style={{ marginTop: 40 }}>
                                        <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                                            <Typography className={classes.typo} align="left" variant="h5" color='secondary'>Imagens da versão mobile da aplicação: </Typography>
                                        </Grid>

                                        <Grid item className={classes.alignGrid} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            {/* mobile */}
                                            <Carousel fullHeightHover={false}>
                                                {proj.imgMobile.map((item, i) => {

                                                    return (
                                                        // <img className={classes.picsMobile} key={i} src={item} alt={proj.title} />
                                                        <Banner proj={proj} item={item} key={i} />
                                                    )
                                                })}
                                            </Carousel>
                                        </Grid>
                                    </Box>
                                )}
                            </Grid>
                            <TestProj />
                        </>
                    )
                }
            })}
        </>
    );
}

export default Infos;