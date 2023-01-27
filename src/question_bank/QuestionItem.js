import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import MoreVertIcon from '@mui/icons-material/MoreVert';


export default function QuestionItem({tags,questions, answer, createdAt,views,}) {


    return (
        <Card sx={{ marginBottom: 2,border:'1px solid rgba(0,0,0,0.2)',padding:3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'blue' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    {questions}
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ alignItems: 'center' }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    {tags.map(t=>
                    <Button>{t}</Button>
                    )}

                </ButtonGroup>
            </CardActions>
            <CardActions disableSpacing style={{ alignItems: 'center' }}>
                <IconButton aria-label="add to favorites">
                    <ThumbUpIcon />
                </IconButton>
                <h6 style={{marginTop:10}}>{answer} answer</h6>
                <IconButton aria-label="share">
                    <VisibilityIcon />
                </IconButton>
                <h6 style={{marginTop:10}}>{views} views</h6>

            </CardActions>

        </Card>
    );
}