import React from 'react';
import { makeStyles} from '@material-ui/core';

type Props = {
  left?: boolean;
  text: string;
};
const useStyles = makeStyles((theme) => {
  return {
    leftRoot: {
      width: '300px',
      height: '200px',
      background: `#FFFFFF;`,
      borderRadius: '36px 36px 36px 0px',
      padding: '24px',
      boxShadow: '-10px 10px 4px rgba(0, 0, 0, 0.25)',
      overflowY: 'scroll',
    },
    rightRoot: {
      width: '300px',
      height: '200px',
      background: `#FFFFFF;`,
      borderRadius: '36px 36px 0px 36px',
      padding: '24px',
      boxShadow: '-10px 10px 4px rgba(0, 0, 0, 0.25)',
      overflowY: 'scroll',
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