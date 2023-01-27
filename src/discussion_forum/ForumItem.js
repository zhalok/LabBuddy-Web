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
import { red } from '@mui/material/colors';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';


export default function ForumItem() {


    return (
        <Card sx={{ marginBottom: 2, border: '1px solid rgba(0,0,0,0.2)',padding:3 }}>
            <CardContent>
                <Typography variant="h6" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing style={{ alignItems: 'center' }}>
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>Hall Effect</Button>
                    <Button>Motion</Button>
                    <Button>Periodic Time</Button>
                </ButtonGroup>
            </CardActions>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <CardActions disableSpacing style={{ alignItems: 'center' }}>
                        <IconButton aria-label="share">
                            <VisibilityIcon />
                        </IconButton>
                        <h6 style={{marginTop:10}}>234 views</h6>
                        <IconButton aria-label="add to favorites">
                            <ChatBubbleIcon />
                        </IconButton>
                        <h6 style={{marginTop:10}}>145 answers</h6>

                    </CardActions>
                }
                title="posted by Shrimp and Chorizo Paella"
                subheader="12hr ago"
            />


        </Card>
    );
}