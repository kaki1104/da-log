import React, { useRef, useEffect } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import Entry from '../entry';
import EntryTextArea from '../entry-text-area';
import Calendar from '../calendar';

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
      position: 'absolute',
      top: '120px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80vw',
      height:'75vh',
      margin: '0px 24px 8px 24px',
      padding: '10px',
      background: '#FDFBF4',
      borderRadius: '20px',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      overflowY: 'scroll',
      // filter: 'drop-shadow(-10px 10px 10px rgba(0, 0, 0, 0.25))',
    },
    widgetContainer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      width: '900px',
    },
    logField:{
      display: 'flex',
      flexDirection: 'column',
      width: '900px',
    },
    date:{
      margin: '20px'
    },
    scrollField:{
      width: '50px',
    },
    logContainer:{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: '20px',
    },
    newEntryContainer:{
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
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
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
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
            <Box className={classes.date}>date</Box>
            <Entry left text="seba is da cool"/>
            <Entry text="kaki loves seba mucho mucho"/>
          </Box>
          <Box className={classes.logContainer}>
            <Box className={classes.date}>date</Box>
            <Entry left text="seba is da cool"/>
            <Entry text="kaki loves seba mucho mucho"/>
          </Box>
          <Box className={classes.newEntryContainer}>
            <Box className={classes.date}>date</Box>
            <EntryTextArea />
            <EntryTextArea />
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