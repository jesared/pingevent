import styled from "@emotion/styled";
import { Grid, Paper, Typography } from "@mui/material";
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

            <Grid item xs={12} sm={12} md={4} lg={6} xl={6} sx={{ margin: '30px auto' }}>
                <Item>
                    <Typography variant="h3">
                        Vos événements
                    </Typography>
                    <img src={image} alt="image" width={250}/>
                </Item>
            </Grid>

        </>
    )
}
