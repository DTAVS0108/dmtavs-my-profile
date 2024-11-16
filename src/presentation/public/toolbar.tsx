import { Box } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import CommentIcon from "@mui/icons-material/Comment";
import EventIcon from "@mui/icons-material/Event";
import GetAppIcon from "@mui/icons-material/GetApp";
import PlaceIcon from "@mui/icons-material/Place";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { string as STRINGCONST } from "../../utils/constants/string_constants.tsx";

const ToolBar = () => {
  const [like, setLike] = useState(false);

  const handleLikeClick = () => {
    setLike(!like);
  };

  const handleHomeClick = () => {};

  const handleCommentClick = () => {};

  const handleCalenderClick = () => {};

  const handleDownloadClick = () => {};

  const handleLocationClick = () => {};

  return (
    <React.Fragment>
      <Box className="w-16 rounded-full border bg-black text-center gap-2 shadow-2xl shadow-black">
        <Box className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-white rounded-full shadow-inner"
            onClick={handleHomeClick}
          >
            <HomeIcon />
            <span className="absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0 shadow-2xl shadow-black group-hover:opacity-100 transition-opacity">
              {STRINGCONST.HOME}
            </span>
          </Box>
        </Box>
        <Box className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-white rounded-full shadow-inner"
            onClick={handleCommentClick}
          >
            <CommentIcon />
            <span className="absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0  shadow-2xl shadow-black group-hover:opacity-100 transition-opacity">
              {STRINGCONST.COMMENT}
            </span>
          </Box>
        </Box>
        <Box className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-white rounded-full shadow-inner"
            onClick={handleCalenderClick}
          >
            <EventIcon />
            <span className="absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0 shadow-2xl shadow-black group-hover:opacity-100 transition-opacity">
              {STRINGCONST.EVENT}
            </span>
          </Box>
        </Box>
        <Box className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-white rounded-full shadow-inner"
            onClick={handleDownloadClick}
          >
            <GetAppIcon />
            <span className="absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0 shadow-2xl shadow-black group-hover:opacity-100 transition-opacity w-44">
              {STRINGCONST.DOWNLOAD_RESUME}
            </span>
          </Box>
        </Box>
        <Box className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-white rounded-full shadow-inner"
            onClick={handleLocationClick}
          >
            <PlaceIcon />
            <span className="absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0 shadow-2xl shadow-black group-hover:opacity-100 transition-opacity w-40">
              {STRINGCONST.CURRENT_LOCATION}
            </span>
          </Box>
        </Box>
        <Box className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-white rounded-full shadow-inner"
            onClick={handleLikeClick}
          >
            {!like ? <FavoriteBorderIcon /> : <FavoriteIcon />}
            <span className="absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0 shadow-2xl shadow-black group-hover:opacity-100 transition-opacity">
              {STRINGCONST.LIKE}
            </span>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default ToolBar;
