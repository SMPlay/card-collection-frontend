import React, { ChangeEvent } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    margin: "15px 0"
  },
}));

export interface CardsPaginationProps {
  count: number,
  onChange: (event: ChangeEvent<unknown>, value: number) => void
}

export const CardsPagination: React.FC<CardsPaginationProps> = ({count, onChange}) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={count} color="primary" showFirstButton showLastButton onChange={onChange}/>
    </div>
  );
};