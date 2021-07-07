import React from 'react';

import classes from './Toolbar.module.css';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToogle clicked={props.drawerToogleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;