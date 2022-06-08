import styled from "@emotion/styled";
import { Grid, List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import image from '../../../assets/animal.png'


export default function Events() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    return (
        <>

            <Grid item xs={10} sx={{ margin: '30px auto' }}>
                <Item>
                    <Typography variant="h3">
                        Vos événements
                    </Typography>
                    <Typography variant="h4">
                        Récapitulatif des événements de l'organisateur
                    </Typography>
                    <Typography variant="h6">
                        Bouton d'ajout
                    </Typography>
                    <List>
                        <Typography variant="h6">formulaire d'ajout</Typography>
                        <ListItem>
                            <ListItemText primary="titre de l'événement" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="range date ou single date" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="catégorie" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="cover / image" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="organisateur" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="adresse" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="reglement" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="épreuves" />
                        </ListItem>
                    </List>
                    <img src={image} alt="animal" width={250}/>
                </Item>
            </Grid>

        </>
    )
}
