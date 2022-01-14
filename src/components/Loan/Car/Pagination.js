import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

import { useDispatch } from "react-redux";
import * as autoActions from "../../../redux/autosCard/auto-actions";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function PaginationControlled() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
    dispatch(autoActions.getPage(page));
  };

  return (
    <div className={classes.root}>
      <Typography>Page: {page}</Typography>
      <Pagination count={10} page={page} onChange={handleChange} />
    </div>
  );
}
