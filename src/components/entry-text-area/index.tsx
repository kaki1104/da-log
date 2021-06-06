import React, { useState } from 'react';
import {
  makeStyles,
  Box,
  TextField,
  IconButton,
  withStyles,
} from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';

type Props = {
  ownEntry?: boolean;
  content: string;
};

const useStyles = makeStyles(() => {
  return {
    root: {
      // position: 'absolute',
      dispaly: 'flex',
      width: '350px',
      height: '250px',
      padding: '5px',
    },
    textfield: {
      height: '225px',
      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(102, 102, 102, 0.12)',
      fontSize: '16px',
      lineHeight: '20px',
      color: 'black',
      padding: '24px',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      background: `#FFFFFF;`,
      borderRadius: '36px 36px 36px 0px',
      boxShadow: '-10px 10px 4px rgba(0, 0, 0, 0.25)',
      overflowY: 'scroll',
    },
    ownTextfield: {
      height: '225px',
      backgroundColor: '#FFFFFF',
      border: '1px solid rgba(102, 102, 102, 0.12)',
      fontSize: '16px',
      lineHeight: '20px',
      color: 'black',
      padding: '24px',
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      background: `#FFFFFF;`,
      borderRadius: '36px 36px 0px 36px',
      boxShadow: '-10px 10px 4px rgba(0, 0, 0, 0.25)',
      overflowY: 'scroll',
    },
    textfieldFocused: {
      outline: 'none',
      border: `2px solid #D8C3A5`,
      caretColor: '#D8C3A5',
    },
    editButton: {
      position: 'relative',
      bottom: '50px',
      left: '80%',
    }
  };
});

const EntryTextArea: React.FC<Props> = ({
  ownEntry,
  content
}: Props) => {
  const classes = useStyles();
  const [text, setText] = useState(content);
  const [mouseOver, setMouseOver] = useState(false);
  const [disabled, setDisabled] = useState(true);
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

  const handleEditClick = () => {
    setDisabled(false);
  }

  const handleMouseEnter = () => {
    setMouseOver(true);
  }

  const handleMouseLeave = () => {
    setMouseOver(false);
  }

  const ownInputProps = {
    disableUnderline: true,
    classes: {
      root: `${classes.ownTextfield}`,
      focused: `${classes.textfieldFocused}`,
    },
  };

  return (
    <Box className={classes.root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
      <CustomTextField
          value={text}
          onChange={onChangeValue}
          placeholder= "what happened today?"
          InputProps={ownEntry ? ownInputProps : inputProps}
          multiline
          rows={8}
          fullWidth
          disabled={disabled}
      />
      {ownEntry && mouseOver ? 
        <IconButton className={classes.editButton} onClick={handleEditClick}>
          <CreateIcon/>
        </IconButton>
        : null}
    </Box>
  );
};

export default EntryTextArea;


const CustomTextField = withStyles({
  root: {
    marginRight: 8,
    "& .MuiInputBase-root.Mui-disabled": {
      color: "rgba(0, 0, 0, 0.6)" // (default alpha is 0.38)
    }
  }
})(TextField);