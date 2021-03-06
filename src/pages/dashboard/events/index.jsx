import styled from "@emotion/styled";
import { Box, Button, Fab, FormControl, FormHelperText, Grid, IconButton, Input, InputLabel, List, ListItem, ListItemText, MenuItem, Modal, Paper, Select, Stack, TextField, Typography } from "@mui/material";
import image from '../../../assets/animal.png'

import AddIcon from '@mui/icons-material/Add';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import BlockIcon from '@mui/icons-material/Block';
import React from "react";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { PhotoCamera } from "@mui/icons-material";



export default function Events() {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body1,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
    const fabStyle = {
        position: 'absolute',
        bottom: 64,
        right: 64,
        backgroundColor: 'rgb(23, 193, 85)',
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [dateStart, setDateStart] = React.useState(new Date());
    const [dateEnd, setDateEnd] = React.useState(new Date());

    const handleChangeStart = (newDateStart) => {
        setDateStart(newDateStart);
    };
    const handleChangeEnd = (newDateEnd) => {
        setDateEnd(newDateEnd);
    };
    const [cat, setCat] = React.useState('');

    const handleChangeSelect = (event) => {
        setCat(event.target.value);
    };

    return (
        <>


            <Grid item xs={10} sx={{ margin: '30px auto' }}>
                <Item>
                    <Typography variant="h3">
                        Vos ??v??nements
                    </Typography>
                    <Typography variant="h4">
                        R??capitulatif des ??v??nements de l'organisateur
                    </Typography>
                    <Typography variant="h6">
                        Bouton d'ajout
                    </Typography>
                    <List>
                        <Typography variant="h6">formulaire d'ajout</Typography>
                        <ListItem>
                            <ListItemText primary="titre de l'??v??nement" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="range date ou single date" />
                        </ListItem>
                        <ListItem>
                            <ListItemText primary="cat??gorie" />
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
                            <ListItemText primary="??preuves" />
                        </ListItem>
                    </List>
                    <img src={image} alt="animal" width={250} />
                </Item>
            </Grid>
            <div>

                <Box sx={{ '& > :not(style)': { m: 1 } }}>

                    <Fab onClick={handleOpen} sx={fabStyle} color="secondary" aria-label="add">
                        <AddIcon />
                    </Fab>
                </Box>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Cr??ation d'un ??v??nement
                        </Typography>
                        <Box
                            component="form"
                            sx={{
                                '& .MuiTextField-root': { m: 1, width: '25ch' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="standard-text-input"
                                label="Titre de l'??v??nement"
                                type="text"
                                autoComplete="current-text"
                                variant="standard"
                            />
                            <TextField
                                id="standard-organisateur-input"
                                label="Nom de l'organisateur"
                                type="text"
                                autoComplete="current-text"
                                variant="standard"
                            />
                            <Stack direction="row" alignItems="center" spacing={2}>
                                {/* <label htmlFor="contained-button-file">
          <Typography sx={{m:2}} variant="span">ajouter un cover</Typography>
          <Input  sx={{display:'none'}} accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label> */}
                                <label htmlFor="icon-button-file">
                                    <Typography sx={{ m: 2 }} variant="span">ajouter un cover</Typography>
                                    <Input sx={{ display: 'none' }} accept="image/*" id="icon-button-file" type="file" />
                                    <IconButton color="primary" aria-label="upload picture" component="span">
                                        <PhotoCamera />
                                    </IconButton>
                                </label>
                            </Stack>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <Stack sx={{ m: 2 }} spacing={3}>
                                    <DesktopDatePicker
                                        label="Date de d??but"
                                        inputFormat="dd/MM/yyyy"
                                        value={dateStart}
                                        onChange={handleChangeStart}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <DesktopDatePicker
                                        label="Date de fin"
                                        inputFormat="dd/MM/yyyy"
                                        value={dateEnd}
                                        onChange={handleChangeEnd}
                                        renderInput={(params) => <TextField {...params} />}
                                    />

                                </Stack>
                            </LocalizationProvider>
                            <div>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Cat??gorie</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        value={cat}
                                        label="Cat??gorie"
                                        onChange={handleChangeSelect}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value='Tournoi'>Tournoi</MenuItem>
                                        <MenuItem value='Stage'>Stage</MenuItem>
                                        <MenuItem value='Formation'>Formation</MenuItem>
                                    </Select>
                                    <FormHelperText>Int??ressant ce form helper</FormHelperText>
                                </FormControl>
                            </div>
                            <Stack sx={{ m: 2 }} direction="row" spacing={2}>
                                <Button variant="outlined" startIcon={<BlockIcon />}>
                                    Annuler
                                </Button>
                                <Button variant="contained" endIcon={<AddCircleOutlineIcon />}>
                                    Envoyer
                                </Button>
                            </Stack>

                        </Box>
                    </Box>
                </Modal>
            </div>

        </>
    )
}
