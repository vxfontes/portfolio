import { Box, Button, Chip, Dialog, DialogContent, DialogContentText, Grid, Link, Slide, Typography, useMediaQuery } from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import MyAppBar from "../../../components/appBar";
import data from '../../../data/projects.json';
import { ProjectProps } from '../../../interface/ProjectProps';
import theme from "../../../theme";
import styles from "./style";
import { TransitionProps } from "@material-ui/core/transitions/transition";

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});


const Project = () => {
    const params = useParams();
    const language = params.language;
    const id = Number(params.project);

    const classes = styles();
    const showBig = useMediaQuery(theme.breakpoints.up('lg'));
    const mobileVersion = useMediaQuery(theme.breakpoints.down('sm'));

    const [open, setOpen] = React.useState(false);
    const [imgTemp, setImgTemp] = useState<string>('');


    const handleClose = () => {
        setOpen(false);
    };

    const imgOpen = (img: string) => {
        setImgTemp(img)
        setOpen(true);
    }

    return (
        <>
            <Dialog className={classes.dialog} open={open} TransitionComponent={Transition} keepMounted onClose={handleClose}>
                <img className={classes.picsDialog} src={imgTemp} />
            </Dialog>

            {data.map((proj: ProjectProps) => {
                if (proj.id === id) {
                    return (
                        <>
                            <MyAppBar />

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
                                        <Typography style={{ textAlign: 'justify' }} align="left" variant="h6" color='secondary'>
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
                                <Grid className={classes.paper} container direction='row' justifyContent='space-around' alignItems="flex-start" spacing={1}>
                                    <Grid item xl={11} lg={11} md={11} sm={11} xs={11}>
                                        <Typography className={classes.typoPrinc} align="left" variant="h4" color='secondary'>
                                            {proj.title}
                                        </Typography>
                                    </Grid>

                                    <Grid className={classes.principal} item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        {proj.id === 7 ? (
                                            <img className={classes.imgPrincipalMobile} src={proj.imgPrincipal} alt="imagem principal" />
                                        ) : (
                                            <img className={classes.imgPrincipal} src={proj.imgPrincipal} alt="imagem principal" />
                                        )}
                                    </Grid>

                                    <Grid item xl={5} lg={5} md={5} sm={12} xs={12}>
                                        <Typography className={classes.typo} align="right" variant="h6" color='secondary'>
                                            {language === 'portuguese' ? (
                                                proj.details[0]
                                            ) : (
                                                proj.details[1]
                                            )}
                                        </Typography>
                                        <Typography className={classes.typo} style={{ fontWeight: 'bold' }} align="right" variant="h6" color='secondary'>
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
                                </Grid>
                            )}

                            <Grid className={classes.paperColor} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                                <Grid className={classes.alignGrid} item xl={12} lg={12} md={12} sm={12} xs={12}>
                                    {proj.imgMobile.length !== 0 ? (
                                        <Typography className={classes.typo} align="center" variant="h5" color='secondary'>Imagens da versão desktop e mobile da aplicação</Typography>
                                    ) : (
                                        <Typography className={classes.typo} align="center" variant="h5" color='secondary'>Imagens da versão desktop da aplicação</Typography>
                                    )}
                                </Grid>

                                {mobileVersion ? (
                                    <>
                                        <Box className={classes.desktop}>
                                            <Carousel fullHeightHover={false}>
                                                {proj.imgDesktop.map((item, i) => (
                                                    <>
                                                        {proj.id !== 7 ? (
                                                            <img className={classes.pics} key={i} src={item} alt={proj.title} onClick={() => imgOpen(item)} />
                                                        ) : (
                                                            <img className={classes.picsMobile} key={i} src={item} alt={proj.title} onClick={() => imgOpen(item)} />
                                                        )}
                                                    </>
                                                ))}
                                            </Carousel>
                                        </Box>
                                        <Box className={classes.mob}>
                                            {proj.imgMobile.length !== 0 && (
                                                <Carousel fullHeightHover={false}>
                                                    {proj.imgMobile.map((item, i) => (
                                                        <img className={classes.picsMob} key={i} src={item} alt={proj.title} onClick={() => imgOpen(item)} />
                                                    ))}
                                                </Carousel>
                                            )}
                                        </Box>
                                    </>
                                ) : (
                                    <Grid item className={classes.carousel} xl={10} lg={12} md={12} sm={12} xs={12}>
                                        {/* desktop */}
                                        <Box className={classes.desktop}>
                                            <Carousel fullHeightHover={false}>
                                                {proj.imgDesktop.map((item, i) => (
                                                    <>
                                                        {proj.id !== 7 ? (
                                                            <img className={classes.pics} key={i} src={item} alt={proj.title} onClick={() => imgOpen(item)} />
                                                        ) : (
                                                            <img className={classes.picsMobile} key={i} src={item} alt={proj.title} onClick={() => imgOpen(item)} />
                                                        )}
                                                    </>
                                                ))}
                                            </Carousel>
                                        </Box>
                                        <Box className={classes.mob}>
                                            {proj.imgMobile.length !== 0 && (
                                                <Carousel fullHeightHover={false}>
                                                    {proj.imgMobile.map((item, i) => (
                                                        <img className={classes.pics} key={i} src={item} alt={proj.title} onClick={() => imgOpen(item)} />
                                                    ))}
                                                </Carousel>
                                            )}
                                        </Box>
                                    </Grid>
                                )}
                            </Grid>

                            {proj.another.length !== 0 && (
                                <Grid className={classes.paperShadow} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                                    {language === 'portuguese' ? (
                                        <Typography className={classes.typoDet} align="center" variant="h5" color='secondary'>{proj.anotherDescription[0]}</Typography>
                                    ) : (
                                        <Typography className={classes.typoDet} align="center" variant="h5" color='secondary'>{proj.anotherDescription[1]}</Typography>
                                    )}

                                    <Box style={{ minWidth: '90%', width: '90%', marginTop: 10 }}>
                                        <Carousel fullHeightHover={false}>
                                            {proj.another.map((image, item) => (
                                                <img width={'100%'} key={item} src={image} alt={proj.title} onClick={() => imgOpen(image)} />
                                            ))}
                                        </Carousel>
                                    </Box>
                                </Grid>
                            )}
                        </>
                    )
                }
            })}
        </>
    );
}

export default Project;