import React from "react";
import PropTypes from "prop-types";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
});

const Header = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position={"static"}>
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color={"inherit"}
            aria-label="Open drawer"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
