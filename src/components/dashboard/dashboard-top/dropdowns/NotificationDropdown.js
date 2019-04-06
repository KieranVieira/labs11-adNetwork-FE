import React from 'react';

import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";

const styles = theme => ({
    root: {
      display: "flex"
    },
    menu: {
      width: 200,
      zIndex: 999999999999999999
    },
    paper: {
      marginRight: theme.spacing.unit * 2
    }
});

class NotificationDropdown extends React.Component{
    render(){
        const { 
            classes, 
            notificationsMenuOpen, 
            handleToggle,
            handleClose,
            userNotifications
        } = this.props;

        return(
            <div className={classes.root}>
                <div>
                <button
                    buttonRef={node => {
                    this.anchorEl = node;
                    }}
                    aria-owns={
                        notificationsMenuOpen ? "menu-list-grow" : undefined
                    }
                    aria-haspopup="true"
                    onClick={handleToggle}
                >
                    <Badge
                        badgeContent={userNotifications.length}
                        color="primary"
                    >
                    <i className="fas fa-bell" />
                    </Badge>
                </button>
                <Popper
                    open={notificationsMenuOpen}
                    anchorEl={this.anchorEl}
                    transition
                    disablePortal
                    className={classes.menu}
                >
                    {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        id="menu-list-grow"
                        style={{
                        transformOrigin:
                            placement === "bottom"
                            ? "center top"
                            : "center bottom"
                        }}
                    >
                        <Paper>
                        <ClickAwayListener
                            onClickAway={handleClose}
                        >
                            <MenuList>
                            {userNotifications &&
                                userNotifications.map(n => (
                                    <MenuItem key={n.id}>{n.msg_body}</MenuItem>
                                ))}
                            </MenuList>
                        </ClickAwayListener>
                        </Paper>
                    </Grow>
                    )}
                </Popper>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(NotificationDropdown);