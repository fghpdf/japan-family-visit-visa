'use client'

import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from "react";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const ExampleCard = () => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="QXX"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Wuhan Hubei
                </Typography>
                <Typography variant="h5" component="div">
                    +8613333332333
                </Typography>
            </CardContent>
            <CardActions>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <DeleteIcon />
                    </IconButton>
                </CardActions>
            </CardActions>
        </Card>
    )
}

export default function Cards() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid xs={4}>
                    <ExampleCard/>
                </Grid>
                <Grid xs={4}>
                    <ExampleCard/>
                </Grid>
                <Grid xs={4}>
                    <ExampleCard/>
                </Grid>
            </Grid>
        </Box>
    )
}