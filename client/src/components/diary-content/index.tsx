import React, { useRef, useEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Entry from '../entry';
import Calendar from '../calendar';
import pageLines from './pagelines.png';

// type Props = {
//   id: number;
// };
const useStyles = makeStyles(() => {
  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '95vw',
      height:'85vh',
      margin: '0px 24px 8px 24px',
      background: '#FDFBF4',
      backgroundImage:`url(${pageLines})`,
      backgroundRepeat: 'repeat-x',
      backgroundPosition: '0px 100px, center',
      borderRadius: '20px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    widgetContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
    },
    logField:{
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      width: '80%',
      overflowY: 'scroll',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
    },
    scrollField:{
      width: '50px',
    },
    logContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      margin: '20px',
    },
    innerMargin: {
      minWidth: '30px',
      maxWidth: '30px',
    },
    newEntryContainer:{
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      bottom: '40px',
      height: '100px',
      margin: '40px 20px',
    },
  };
});

const DiaryContent: React.FC = () => {
  const classes = useStyles();
  const messagesEndRef = useRef<HTMLDivElement>(document.createElement("div"));
  const scrollToBottom = () => {
    if (messagesEndRef === null) return;
    messagesEndRef.current.scrollIntoView({ behavior: "auto" }) //change the smooth if we want scrolling effect
  };
  useEffect(() => {
    scrollToBottom()
  });
  return (
    <div className={classes.root}>
      <Box className={classes.container}>
        <Box className={classes.widgetContainer}>
          <Calendar />
        </Box>
        <Box className={classes.logField}>
          <Box className={classes.logContainer}>
            <Entry content="今日はこういうことがありました"/>
            <div className={classes.innerMargin}/>
            <Entry ownEntry content="I did some work on my project."/>
          </Box>
          <Box className={classes.logContainer}>
            <Entry content="today was fine"/>
            <div className={classes.innerMargin}/>
            <Entry ownEntry content=""/>
          </Box>
          <Box className={classes.newEntryContainer}>
            <Entry content="today was fine"/>
            <div className={classes.innerMargin}/>
            <Entry ownEntry content="this is my own entry"/>
          </Box>
          <div ref={messagesEndRef} />
        </Box>
        <Box className={classes.scrollField}>
        </Box>
      </Box>
    </div>
  );
};

export default DiaryContent;