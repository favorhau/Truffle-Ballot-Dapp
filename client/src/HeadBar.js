import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeIcon from '@material-ui/icons/Home';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 2,
    color: 50
  },
  homeButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  inputRoot: {
    color: 'inherit',
  }
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
  return (
    
    <AppBar position="static" className={classes.grow}>
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.homeButton}
          color="inherit"
          aria-label="open drawer"
          href="./"
        >
          <HomeIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" noWrap>
          Ballot Dapp
        </Typography>
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          <IconButton color="inherit" href="https://github.com/favorhau/Truffle-Ballot-Dapp">
            <Badge color="secondary">
              <GitHubIcon />
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>


  );
}