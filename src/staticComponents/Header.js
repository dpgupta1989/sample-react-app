import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import * as SideBar from './SideBar.js';
import * as HeaderStyle from './HeaderStyle.js';
import routes from "./routes";

  export default function Header() {
    
    const classes = HeaderStyle.useStyles();
    const props = routes;
    const [open, setOpen] = React.useState(false);
   
    const handleDrawerOpen = () => {
      setOpen(true);
    };
    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
        position="fixed"
        className={clsx(classes.appBar)}
        >
          <Toolbar className={classes.toolbar}>
          <Grid direction="row" justify="space-between" alignItems="center" container spacing={1}> 
            <Grid xs={1} item>
              <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              >                
                <MenuIcon fontSize="large"/>
              </IconButton>
            </Grid>
            <Grid xs={10} item>
              <Typography variant="h6" className={classes.title} style={{marginLeft:400, fontSize: 20}}>
                                School Management Platform
              </Typography>
            </Grid>
            <Grid xs={1} item>
              <Typography variant="h6" className={classes.user}>
                  {/* <User.showUser 
                  /> */}
                  School Admin &nbsp;
                  Logout
              </Typography>
            </Grid>
          </Grid>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >                
        {SideBar.sideList(classes, handleDrawerClose, props)}
        </Drawer>
      </div>
    );
  }