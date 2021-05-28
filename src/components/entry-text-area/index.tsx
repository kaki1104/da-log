import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  TextField,
} from '@material-ui/core';

type Props = {
  value?: string;
};

const useStyles = makeStyles((theme) => {
  return {
    root: {
      width: '350px',
      padding: '5px',
      backgroundColor: 'transparent',
    },
    textfield: {
      width: '100%',
      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(102, 102, 102, 0.12)',
      borderRadius: '20px',
      fontSize: '16px',
      lineHeight: '16px',
      color: 'black',
      padding: '24px',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
    },
    textfieldFocused: {
      outline: 'none',
      border: `1px solid pink`,
      caretColor: 'pink',
    },
  };
});

const EntryTextArea: React.FC<Props> = ({
  value,
}: Props) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const onChangeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setText(e.target.value);
  };

  const inputProps = {
    disableUnderline: true,
    classes: {
      root: `${classes.textfield}`,
      focused: `${classes.textfieldFocused}`,
    },
  };

  return (
    <Box className={classes.root}>
      <TextField
          value={text}
          onChange={onChangeValue}
          placeholder= "what happened today?"
          InputProps={inputProps}
          multiline
          rows={4}
          fullWidth
      />
    </Box>
  );
};

export default EntryTextArea;
