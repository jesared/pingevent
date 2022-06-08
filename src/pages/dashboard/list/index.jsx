import styled from '@emotion/styled';
import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import image from '../../../assets/animal.png'

function List() {
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
                        Liste pour le pointage des joueurs
                    </Typography>
                    <Typography variant="h4">
                        administrer un tournoi
                    </Typography>
                    <Typography variant="h6">
                        recap de l'événement
                    </Typography>
            
                    
                    <img src={image} alt="animal" width={250}/>
                </Item>
            </Grid>

        </>
    )
}

export default List