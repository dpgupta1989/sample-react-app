import React from 'react';
import List from '@material-ui/core/List';
import InfoIcon from '@material-ui/icons/Info'
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ViewListIcon from '@material-ui/icons/ViewList';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {Link} from 'react-router-dom';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';

import routes from "./routes";

export const sideList = (classes, handleDrawerClose, props) => (
    <div
      role="presentation"
    >
    <div className={classes.drawerHeader}>
      <IconButton onClick={handleDrawerClose}>
        {useTheme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </IconButton>
    </div>&nbsp;
    <Divider />
      <List>
            {['School Management Platform'].map((text, index) => (
          <Link to="/" key={text}>
            <ListItem button style={{fontSize: 15}}>
            <p style={{fontSize: 15, marginTop: 12}}>{text}</p>
          </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
      <List>
        {props.map((text, index) => (
          <Link to={text.layout + text.path} key={index}>
          <ListItem button style={{fontSize: 15}}>
            <i className={text.icon}></i>&nbsp;&nbsp;&nbsp;
            <p style={{marginTop: 12}}>{text.name}</p>
          </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
