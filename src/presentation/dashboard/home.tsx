import React from "react";
import ToolBar from "../public/toolbar.tsx";
import { Box } from "@mui/material";

const Home = () => {
    return (
        <React.Fragment>
            <Box>
                <Box className="flex items-center" sx={{height: "calc(100vh - 65px)"}}>
                    <ToolBar />
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default Home;