import { Button, Grid, Paper, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { LanguageProps } from "../../interfaces/languageProps";
import styles from "./styles";

const Projects = (get: LanguageProps) => {
    const language = get.language;
    const classes = styles();

    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]

    function Item(props: any) {
        return (
            <Paper>
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Paper>
        )
    }


    return (
        <>
            {/* {language === 'english' ? (
                <h1>ok</h1>
            ) : (
                <h1>ok</h1>
            )}; */}

            <Grid className={classes.paper} container direction='row' justifyContent='center' alignItems="center" spacing={1}>
                <Typography variant='h2' color='secondary'>Projetos</Typography>
                <br />
                <Carousel>
                    {
                        items.map((item, i) => <Item key={i} item={item} />)
                    }
                </Carousel>
            </Grid>
        </>
    )
}

export default Projects;