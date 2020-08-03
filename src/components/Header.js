import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import MenuList from '@material-ui/core/MenuList';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    backgroungColor: { backgroundColor: "grey" },
}));

function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.backgroungColor} position="static">
                <Toolbar className={classes.backgroungColor}>
                    <Typography className={classes.root} variant="h4">
                        Cassy Pearson
                    </Typography>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        <MenuIcon />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}>
                            <Button onClick={handleClose} color="inherit"><Link href="/">Home</Link></Button>
                            <Button onClick={handleClose} color="inherit"><Link href="/portfolio">Portfolio</Link></Button>
                            <Button onClick={handleClose} color="inherit"><Link href="/resume">Resume</Link></Button>
                            <Button onClick={handleClose} color="inherit"><Link href="/contact">Contact Me</Link></Button>
                        </Menu>

                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header
