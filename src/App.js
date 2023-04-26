import React from "react";
// import Sidebar from "../Dashboard/Sidebar";
// import Feed from "../Dashboard/Feed";
// import Rightbar from "../Dashboard/Rightbar";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "../src/components/Navbar/Navbar";
// import Add from "../Dashboard/Add";
import { useState } from "react";

/*eslint-disable */
function App() {
    const [mode, setMode] = useState("light")

    const darkTheme = createTheme({
        palette: {
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <Navbar />
                <Stack direction="row" spacing={3} justifyContent="space-between">
                    {/* <Sidebar setMode={setMode} mode={mode} /> */}
                  
                </Stack>
            </Box>
        </ThemeProvider>
    );
};

export default App;