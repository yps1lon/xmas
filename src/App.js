import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
styleReset,
Window,
WindowContent,
WindowHeader,
Button,
} from "react95";
import { List } from "@react95/core";
import { Rnd } from "react-rnd";
import original from "react95/dist/themes/original";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Photos from "./Photos";
import MissYou from "./MissYou";
import Favorites from "./Favorites";
import { Logo, Packager, Mail, Folder, Computer, Earth, Notepad } from "@react95/icons";
import { Tooltip } from "react95";
import GarfieldWelcome from "./GarfieldExtraswelcome.gif";
import LoveGif from "./i_love_you.gif";
import background from "./screensaver.jpg";

const GlobalStyles = createGlobalStyle`
${styleReset}
body {
background: url(${background}) no-repeat center center fixed;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 100vh;
margin: 0;
position: relative;
}

.top-gif {
margin-top: 20px;
}

.center-gif {
display: flex;
justify-content: center;
align-items: center;
margin-top: 100px;
}

.start-menu {
position: absolute;
bottom: 50px;
left: 10px;
background: white;
border: 2px solid #000;
box-shadow: 3px 3px 0px #888888;
width: 200px;
z-index: 100;
}

.start-menu .menu-header {
background: #000080;
color: white;
padding: 5px;
font-size: 14px;
display: flex;
align-items: center;
gap: 8px;
}

.taskbar {
position: fixed;
bottom: 0;
left: 0;
width: 100%;
height: 40px;
background-color: #c0c0c0;
border-top: 2px solid #808080;
box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.5),
inset 0 -2px 2px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: flex-start;
padding: 0 8px;
z-index: 99;
}

.taskbar-button {
height: 32px;
background: white;
display: flex;
align-items: center;
justify-content: center;
margin-right: 8px;
border: 2px outset white;
cursor: pointer;
}

.taskbar-button:hover {
border: 2px inset white;
}

.taskbar-logo {
margin-right: 8px;
}

.program-icons {
position: absolute;
top: 150px;
left: 20px;
display: flex;
flex-direction: column;
gap: 20px;
z-index: 10;
}

.program-icon {
display: flex;
flex-direction: column;
align-items: center;
cursor: pointer;
transition: transform 0.3s;
}

.program-icon:hover {
transform: scale(1.1);
}

.program-icon p {
margin-top: 5px;
font-size: 14px;
}

.context-menu {
position: absolute;
background: white;
border: 2px solid #000;
box-shadow: 3px 3px 0px #888888;
z-index: 100;
display: none;
width: 150px;
font-size: 12px;
}

.context-menu ul {
list-style: none;
padding: 0;
margin: 0;
}

.context-menu li {
padding: 5px;
cursor: pointer;
}

.context-menu li:hover {
background-color: #d3d3d3;
}
`;

function App() {
const [isWindowOpen, setIsWindowOpen] = useState(true);
const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });
const [menuOpen, setMenuOpen] = useState(false);
const [contextMenu, setContextMenu] = useState({ visible: false, x: 0, y: 0 });
const [errorWindows, setErrorWindows] = useState({});
const [firstPrompt, setFirstPrompt] = useState(true);

useEffect(() => {
const centerX = window.innerWidth / 2 - 200;
const centerY = window.innerHeight / 2 - 150;
setWindowPosition({ x: centerX, y: centerY });
}, []);

const handleGetStartedClick = () => {
setFirstPrompt(false);
};

const handleCloseWindow = () => {
setIsWindowOpen(false);
};

const toggleMenu = () => {
setMenuOpen((prev) => !prev);
};

const closeMenu = () => {
setMenuOpen(false);
};

const handleRightClick = (e) => {
e.preventDefault();
setContextMenu({
visible: true,
x: e.clientX,
y: e.clientY
});
};

const closeContextMenu = () => {
setContextMenu({ visible: false, x: 0, y: 0 });
};

const handleIconClick = (iconName) => {
setErrorWindows((prev) => ({
...prev,
[iconName]: true,
}));
};

const closeErrorWindow = (iconName) => {
setErrorWindows((prev) => ({
...prev,
[iconName]: false,
}));
};


return (
<Router>
<ThemeProvider theme={original}>
<>
    <GlobalStyles />
    <img src={GarfieldWelcome} alt="Garfield Welcome" className="top-gif" />

    <div className="program-icons">
        <div className="program-icon" onClick={() => handleIconClick("myComputer")}>
            <Tooltip title="My Computer">
                <Computer style={{ width: '48px', height: '48px' }} />
            </Tooltip>
            <p>My Computer</p>
        </div>
        <div className="program-icon" onClick={() => handleIconClick("internetExplorer")}>
            <Tooltip title="Internet Explorer">
                <Earth style={{ width: '48px', height: '48px' }} />
            </Tooltip>
            <p>Internet Explorer</p>
        </div>
        <div className="program-icon" onClick={() => handleIconClick("notepad")}>
            <Tooltip title="Notepad">
                <Notepad style={{ width: '48px', height: '48px' }} />
            </Tooltip>
            <p>Notepad</p>
        </div>
        <div className="program-icon" onClick={() => handleIconClick("email")}>
            <Tooltip title="Email">
                <Mail style={{ width: '48px', height: '48px' }} />
            </Tooltip>
            <p>Email</p>
        </div>
        <div className="program-icon" onClick={() => handleIconClick("trash")}>
            <Tooltip title="Trash">
                <Packager style={{ width: '48px', height: '48px' }} />
            </Tooltip>
            <p>Trash</p>
        </div>
    </div>

    {firstPrompt && (
        <Rnd
            default={{
                x: windowPosition.x,
                y: windowPosition.y,
                width: 400,
                height: 300,
            }}
            bounds="window"
            dragHandleClassName="window-header"
        >
            <Window style={{ width: "100%", height: "100%" }}>
                <WindowHeader
                    active={true}
                    className="window-header"
                    style={{ cursor: "move" }}
                >
                    <span>Welcome.exe</span>
                    <Button onClick={handleCloseWindow} style={{ marginLeft: "auto" }}>
                        X
                    </Button>
                </WindowHeader>
                <WindowContent>
                    <p>
                        Dear Kaya, <br />
                        I was too holed up with my exams, so I haven't had time to send your gifts. Here's your creative gift for now! Lots of love! <br />- Benji
                    </p>
                    <Button primary onClick={handleGetStartedClick}>
                        Get Started
                    </Button>
                </WindowContent>
            </Window>
        </Rnd>
    )}

    {Object.keys(errorWindows).map(
        (key) =>
            errorWindows[key] && (
                <Rnd
                    key={key}
                    default={{
                        x: windowPosition.x,
                        y: windowPosition.y,
                        width: 400,
                        height: 200,
                    }}
                    bounds="window"
                    dragHandleClassName="window-header"
                >
                    <Window style={{ width: "100%", height: "100%" }}>
                        <WindowHeader
                            active={true}
                            className="window-header"
                            style={{ cursor: "move" }}
                        >
                            <span>{`${key}   Message! :3`}</span>
                            <Button onClick={() => closeErrorWindow(key)} style={{ marginLeft: "auto" }}>
                                X
                            </Button>
                        </WindowHeader>
                        <WindowContent>
                            <p>{`None of these do anything :p, you can click them and move them around but thats about it. If you hover them it'll display the OG WIN95 tooltip tho!`}</p>
                        </WindowContent>
                    </Window>
                </Rnd>
            )
    )}

    {contextMenu.visible && (
        <div
            className="context-menu"
            style={{ top: contextMenu.y, left: contextMenu.x }}
            onClick={closeContextMenu}
        >
            <ul>
                <li>Settings</li>
                <li>Run...</li>
                <li>Help</li>
                <li>Archive</li>
            </ul>
        </div>
    )}

    <Switch>
        <Route path="/photos" component={Photos} />
        <Route path="/miss-you" component={MissYou} />
        <Route path="/favorites" component={Favorites} />
        <Route
            exact
            path="/"
            render={() => (
                <div className="center-gif">
                    <img src={LoveGif} alt="I Love You" />
                </div>
            )}
        />
    </Switch>

    <div onContextMenu={handleRightClick} style={{ width: "100%", height: "100%" }}></div>

    <div className="taskbar">
        <div className="taskbar-button" onClick={toggleMenu}>
            <Logo className="taskbar-logo" style={{ height: "20px", width: "20px" }} />
            Start
        </div>
        <div className="taskbar-button">
            <Folder style={{ width: '20px', height: '20px' }} />
            Explorer
        </div>

        {menuOpen && (
            <div className="start-menu">
                <div className="menu-header">
                    <Logo style={{ height: "16px", width: "16px" }} />
                    Start Menu
                </div>
                <List>
                    <List.Item>
                        <Link to="/photos">Photos</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/miss-you">Miss You</Link>
                    </List.Item>
                    <List.Item>
                        <Link to="/favorites">Favorites</Link>
                    </List.Item>
                </List>
            </div>
        )}
    </div>
</>
</ThemeProvider>
</Router>
);
}

export default App;
