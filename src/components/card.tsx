import { Box } from "@mui/material";
import React from "react";

const CustomCard = ({children, bgColor="bg-white", customWidth="", customMargin="m-4", customHeight=""}) => {
    return (
        <React.Fragment>
            <Box className={`${customMargin} rounded-3xl`} sx={{width: "-webkit-fill-available"}}>
                <Box className={`p-4 ${bgColor} shadow-lg rounded-3xl ${customHeight} ${customWidth}`}>
                    {children}
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default CustomCard;
