import React from "react";
import { Link } from "react-router-dom";

import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Button from "@material-ui/core/Button";
import Fade from "@material-ui/core/Fade";

const styles = theme => ({
  root: {
    display: "flex"
  },
  menu: {
    zIndex: 9999
  }
});

class UserDropdown extends React.Component {
  state = {
    open: false
  };

  handleToggle = () => {
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { classes, currentUser, auth } = this.props;

    return (
      <div className={classes.root}>
        <div data-btn="user_menu-button">
          <Button
            buttonRef={node => {
              this.anchorEl = node;
            }}
            aria-owns={this.state.open ? "menu-list-grow" : undefined}
            aria-haspopup="true"
            onClick={this.handleToggle}
            style={{ textTransform: "none", marginLeft: "0" }}
          >
            <img src={currentUser.image_url} alt="" />
            <h2>{currentUser.name}</h2>
          </Button>
          <Popper
            id={1}
            open={this.state.open}
            anchorEl={this.anchorEl}
            transition
            position="left"
            className={classes.menu}
          >
            {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
                <Paper>
                  <ClickAwayListener onClickAway={this.handleClose}>
                    <MenuList>
                      <MenuItem
                        onClick={e => {
                          this.handleClose(e);
                        }}
                        component={Link}
                        to="/dashboard/settings"
                      >
                        Profile
                      </MenuItem>
                      <MenuItem
                        onClick={e => {
                          this.handleClose(e);
                          auth.logout();
                        }}
                        component={Link}
                      >
                        Logout
                      </MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Fade>
            )}
          </Popper>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(UserDropdown);
