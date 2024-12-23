import React, { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {
  styleReset,
  Window,
  WindowContent,
  WindowHeader,
  Button,
  AppBar
} from "react95";
import { List } from "@react95/core";
import original from "react95/dist/themes/original";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom"; // Use Switch instead of Routes
import Photos from "./Photos"; // Import the new Photos component
import MissYou from "./MissYou"; // Import the new MissYou component
import Favorites from "./Favorites"; // Import the new Favorites component

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  body {
    background: teal;
  }
`;

function App() {
  const [isWindowOpen, setIsWindowOpen] = useState(true);

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
                <Window style={{ width: 400, margin: "20px auto" }}>
                  <WindowHeader active={true}>
                    <span>Welcome.exe</span>
                    <Button style={{ marginLeft: "auto" }} onClick={handleCloseWindow}>
                      X
                    </Button>
                  </WindowHeader>
                  <WindowContent>
                    <p>Welcome to my retro website! Click around and explore.</p>
                    <Button primary onClick={handleGetStartedClick}>
                      Get Started
                    </Button>
                  </WindowContent>
                </Window>
            )}

            {/* Use Switch to render the route that matches */}
            <Switch>
              {/* Use 'component' instead of 'element' in React Router v5 */}
              <Route path="/photos" component={Photos} />
              <Route path="/miss-you" component={MissYou} />
              <Route path="/favorites" component={Favorites} />
              {/* You can add a default route here if you want */}
              <Route exact path="/" render={() => <h2>Welcome to the App</h2>} />
            </Switch>
          </>
        </ThemeProvider>
      </Router>
  );
}

export default App;
