import { Box, Button, Chip, Dialog, DialogContent, Grid, ImageList, ImageListItem, Link, Typography, useMediaQuery } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyAppBar from "../../components/appBar";
import data from '../../data/projects.json';
import { ProjectProps } from '../../interface/ProjectProps';
import theme from "../../theme";
import styles from "./styles";


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

    function colunasDesktop(proj: ProjectProps) {
        const quant = proj.imgDesktop.length;

        if (quant == 1) return 1
        else if (quant == 2) return 2
        else if (quant == 3) return 3
        else if (quant == 4) return 2
        else if (quant > 4 && quant <= 6) return 3
        else if (quant > 6 && quant <= 8) return 4
        else if (quant == 9) return 3
        else if (quant > 9 && quant <= 12) return 4
        else if (quant == 13) return 5
        else return 4
    }

    function colunasMobile(proj: ProjectProps) {
        const quant = proj.imgDesktop.length;

        if (quant == 1) return 1
        else if (quant == 2) return 2
        else if (quant == 3) return 3
        else if (quant == 4) return 4
        else if (quant == 5) return 5
        else if (quant == 6) return 3
        else if (quant > 6 && quant <= 8) return 4
        else if (quant == 9) return 3
        else if (quant > 9 && quant <= 12) return 4
        else if (quant == 13) return 5
        else return 4
    }

    const imgOpen = (img: string) => {
        setImgTemp(img)
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

                                    <Grid style={{ height: '50vh' }} item xl={5} lg={5} md={5} sm={12} xs={12}>
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
                                        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                                            <Typography className={classes.typo} align="left" variant="h5" color='secondary'>Imagens da versão desktop da aplicação: </Typography>
                                        </Grid>
                                        <Grid item className={classes.alignGrid} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            {/* desktop */}
                                            <ImageList rowHeight={300} className={classes.imageList} cols={1.75}>
                                                {proj.imgDesktop.map((item) => (
                                                    <ImageListItem key={item} cols={1}>
                                                        <img src={item} alt={proj.title} />
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>
                                        </Grid>
                                    </Box>
                                )}

                                {proj.imgMobile.length !== 0 && (
                                    <Box style={{ marginTop: 40 }}>
                                        <Grid item xl={10} lg={10} md={10} sm={10} xs={10}>
                                            <Typography className={classes.typo} align="left" variant="h5" color='secondary'>Imagens da versão mobile da aplicação: </Typography>
                                        </Grid>

                                        <Grid item className={classes.alignGrid} xl={12} lg={12} md={12} sm={12} xs={12}>
                                            {/* mobile */}
                                            <ImageList rowHeight={400} className={classes.imageList} cols={colunasMobile(proj)}>
                                                {proj.imgMobile.map((item) => (
                                                    <ImageListItem key={item} cols={1}>
                                                        <img src={item} alt={proj.title} />
                                                    </ImageListItem>
                                                ))}
                                            </ImageList>
                                        </Grid>
                                    </Box>
                                )}
                            </Grid>
                        </>
                    )
                }
            })}
        </>
    );
}

export default Infos;