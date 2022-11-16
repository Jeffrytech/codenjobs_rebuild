import React from 'react';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import { makeStyles } from '@material-ui/core';
import { white, black } from '../../../../../design/colors';

type Props = {}

interface ListProps{
  text : string,
  blured?: boolean,
  mouseEnter: boolean,
}

const ListItem:React.FC<ListProps> = ({text, blured, mouseEnter})=> {
  const chosenColor = blured ? "#74747451": mouseEnter ? white : black;

  const useStyles = makeStyles((theme)=>({
    listWrapper:{
      display: "flex",
      alignItems: "center", 
      justifyItems: "center",
    },
    text:{
      fontWeight: 300,
      fontSize:".8rem", 
      padding: 0,
      margin: ".3rem 0",
      marginLeft: ".5rem",
      color: white,
     
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.listWrapper}><CheckCircleRoundedIcon sx = {{ color: chosenColor, fontSize:"1rem"}} /> <h3 color={chosenColor} className={classes.text}>{text}</h3></div>
  );
};

export default ListItem;