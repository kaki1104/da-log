import React from 'react';
import { makeStyles} from '@material-ui/core';

type Props = {
  left?: boolean;
  text: string;
};
const useStyles = makeStyles((theme) => {
  return {
    leftRoot: {
      width: '330px',
      height: '200px',
      background: `#FFFFFF;`,
      borderRadius: '24px 24px 24px 0px',
      padding: '24px',
    },
    rightRoot: {
      width: '330px',
      height: '200px',
      background: `#FFFFFF;`,
      borderRadius: '24px 24px 0px 24px',
      padding: '24px',
    }
  };
});

const Entry: React.FC<Props> = ({ left=false, text }: Props) => {
  const classes = useStyles();
  return (
    <div className={left ? classes.leftRoot : classes.rightRoot}>
      {text}
    </div>
  );
};

export default Entry;