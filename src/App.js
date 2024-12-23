import React, { useState, useEffect } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  styleReset,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  AppBar,
} from "react95";
import { List } from "@react95/core";
import { Rnd } from "react-rnd"; // Import Rnd for draggable and resizable functionality
import original from "react95/dist/themes/original";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; // Use Switch instead of Routes
import Photos from "./Photos"; // Import the new Photos component
import MissYou from "./MissYou"; // Import the new MissYou component
import Favorites from "./Favorites"; // Import the new Favorites component

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    background: teal;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
`;

function App() {
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [windowPosition, setWindowPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Calculate the center position dynamically
    const centerX = window.innerWidth / 2 - 200; // Adjust based on width
    const centerY = window.innerHeight / 2 - 150; // Adjust based on height
    setWindowPosition({ x: centerX, y: centerY });
  }, []); // Run once when the component mounts

  const handleGetStartedClick = () => {
    setIsWindowOpen(false);
  };

  const handleCloseWindow = () => {
    setIsWindowOpen(false);
  };

  return (
      <Router>
        <ThemeProvider theme={original}>
          <>
            <GlobalStyles />
            <AppBar>
              <List>
                {/* Update menu items and make them clickable */}
                <List.Item>
                  <Link to="/photos">
                  <span role="img" aria-label="icon">
                    🖼️
                  </span>{" "}
                    Photos
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to="/miss-you">
                  <span role="img" aria-label="icon">
                    💭
                  </span>{" "}
                    Miss You
                  </Link>
                </List.Item>
                <List.Item>
                  <Link to="/favorites">
                  <span role="img" aria-label="icon">
                    ⭐
                  </span>{" "}
                    Favorites
                  </Link>
                </List.Item>
              </List>
            </AppBar>

            {/* Conditionally render Window and AppBar */}
            {isWindowOpen && (
                <Rnd
                    default={{
                      x: windowPosition.x, // Dynamically set the X position
                      y: windowPosition.y, // Dynamically set the Y position
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
                      <Button style={{ marginLeft: "auto" }} onClick={handleCloseWindow}>
                        X
                      </Button>
                    </WindowHeader>
                    <WindowContent>
                      <p>Dear Kaya<br/>
                      This might not come as a big of a shock, but because ive been holed up with exams for the last few weeks, i simply did not have time to send your xmas gifts. So accept this for now, hopefully you'll like it. Lots of love <br/> - Benji <br/> (P.S u can move this box around)
                      </p>
                      <Button primary onClick={handleGetStartedClick}>
                        Get Started
                      </Button>
                    </WindowContent>
                  </Window>
                </Rnd>
            )}

            {/* Use Switch to render the route that matches */}
            <Switch>
              <Route path="/photos" component={Photos} />
              <Route path="/miss-you" component={MissYou} />
              <Route path="/favorites" component={Favorites} />
              <Route exact path="/" render={() => <h2>Welcome to the App</h2>} />
            </Switch>
          </>
        </ThemeProvider>
      </Router>
  );
}

export default App;
