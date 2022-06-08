import styled from '@emotion/styled';
import { Grid, Paper, Typography } from '@mui/material';
import BasicTimeline from './BasicTimeline'

function DashBoardAccueil() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>
            <Grid item xs={12} sm={12} md={4} lg={6} xl={6} sx={{ margin: '30px auto' }}>
                <Item>
                    <Typography variant="h3">
                        Résumé
                    </Typography>
                    <BasicTimeline />
                </Item>
            </Grid>

            <Grid item xs={12} sm={12} md={4} lg={4} xl={4} sx={{ margin: '30px auto' }}>
                <Item>
                    <Typography variant="h4">
                        Joueurs
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="h4">
                        Liste
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="h4">
                        Epreuves
                    </Typography>
                </Item>
                <Item>
                    <Typography variant="h4">
                        Evenements
                    </Typography>
                </Item>
            </Grid>
        </>

    )
}

export default DashBoardAccueil