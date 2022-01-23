import { useState } from "react";
import { Button, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';

const Hamburger = ({ styles }) => {

    const [state, setState] = useState({
        Hamburger: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            // sx={}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Home', 'Crypto Asset Evaluation', 'Offerings', 'Positions', 'Contact'].map((text, index) => (
                    text === "Home" ?
                        <ListItem button key={text}>
                            <a href={`/#home-section`}><ListItemText primary={text} href={`/`} key={text} /></a>
                        </ListItem> :
                        text === "Positions" ?
                            <ListItem button key={text}>
                                <a href={`/positions`}><ListItemText primary={text} href={`/`} key={text} /></a>
                            </ListItem> :
                            text === 'Crypto Asset Evaluation' ?
                                <ListItem button key={text}>
                                    <a href={`/CEF`}><ListItemText primary={text} href={`/${text}`} key={text} /></a>
                                </ListItem>
                                :
                                <ListItem button key={text}>
                                    <a href={`/#${text.toLowerCase().split(" ").join("")}-section`}><ListItemText primary={text} key={text} href={`/${text}`} /></a>
                                </ListItem>
                ))}
            </List>
        </Box >
    );
    return (
        (['right']).map((anchor, index) => (
            <nav className={styles} key={index}>
                <Button aria-label="hamburger menu" onClick={toggleDrawer(anchor, true)} style={{ minWidth: 'auto' }}><MenuIcon /></Button>
                <Drawer
                    anchor={anchor}
                    open={state[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                >
                    {list(anchor)}
                </Drawer>
            </nav>
        ))



    )
}

export default Hamburger