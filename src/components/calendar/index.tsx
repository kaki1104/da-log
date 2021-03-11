import React, { useRef, useEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';

type Props = {
  text: string;
};
const useStyles = makeStyles((theme) => {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '140px',
      height:'140px',
      margin: '0px 24px 8px 24px',
      padding: '3px 5px 12px 5px',
      background: '#FFFFFF',
      borderRadius: '75px',
      boxShadow: '-5px 8px 1px rgba(0, 0, 0, 0.25)',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
    },
    monthContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80px',
      height:'30px',
      background: '#EB5757',
      borderRadius: '15px 15px 0px 0px',
      color: '#FFFFFF',
      fontSize: '18px',
      letterSpacing: '3px',
      fontWeight: 'bold',
    },
    dayContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: '80px',
      height:'50px',
      background: '#FDFBF4',
      borderRadius: '0px 0px 15px 15px',
      boxShadow: '-5px 8px 1px rgba(0, 0, 0, 0.25)',
      color: '#000000',
      fontSize: '35px',
      letterSpacing: '1px',
    },
    clipContainer: {
      position: 'relative',
      top: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90px',
      //margin: '0px 24px 8px 24px',
      // padding: '0px 20px 10px 20px',
    },
    calendarClip1: {
      // position: 'absolute',
      width: '7px',
      height:'15px',
      background: '#C4C4C4',
      borderRadius: '5px 5px 5px 5px',
      //boxShadow: '-5px 8px 1px rgba(0, 0, 0, 0.25)',
    },
    calendarClip2: {
      // position: 'absolute',
      width: '7px',
      height:'15px',
      background: '#C4C4C4',
      borderRadius: '5px 5px 5px 5px',
      //boxShadow: '-5px 8px 1px rgba(0, 0, 0, 0.25)',
    },
  };
});

const Calendar: React.FC = () => {
  const classes = useStyles();
  const messagesEndRef = useRef<HTMLDivElement>(document.createElement("div"));
  const scrollToBottom = () => {
    if (messagesEndRef === null) return;
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
  };
  useEffect(() => {
    scrollToBottom()
  });
  return (
    <div className={classes.root}>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito');
    </style>
      <Box className={classes.container}>
        <Box className={classes.clipContainer}>
          <Box className={classes.calendarClip1} />
          <Box className={classes.calendarClip2} />
        </Box>

        <Box className={classes.monthContainer}>
          aug
        </Box>
        <Box className={classes.dayContainer}>
          20
        </Box>
      </Box>
    </div>
  );
};

export default Calendar;