import { Box } from "@mui/material";
import React, { useState } from "react";
import {
  Home as HomeIcon,
  Comment as CommentIcon,
  Event as EventIcon,
  GetApp as GetAppIcon,
  Place as PlaceIcon,
  FavoriteBorder as FavoriteBorderIcon,
  Favorite as FavoriteIcon,
} from "@mui/icons-material";
import { string as STRINGCONST } from "../../utils/constants/string_constants.tsx";

const ToolBar = () => {
  const [like, setLike] = useState(false);

  const handleIconClick = (type) => {
    switch (type) {
      case "like":
        setLike(!like);
        break;
      case "home":
        console.log("Home clicked");
        break;
      case "comment":
        console.log("Comment clicked");
        break;
      case "calendar":
        console.log("Calendar clicked");
        break;
      case "download":
        console.log("Download clicked");
        break;
      case "location":
        console.log("Location clicked");
        break;
      default:
        break;
    }
  };

  const actions = [
    {
      icon: <HomeIcon />,
      label: STRINGCONST.HOME,
      type: "home",
    },
    {
      icon: <CommentIcon />,
      label: STRINGCONST.COMMENT,
      type: "comment",
    },
    {
      icon: <EventIcon />,
      label: STRINGCONST.EVENT,
      type: "calendar",
    },
    {
      icon: <GetAppIcon />,
      label: STRINGCONST.DOWNLOAD_RESUME,
      type: "download",
    },
    {
      icon: <PlaceIcon />,
      label: STRINGCONST.CURRENT_LOCATION,
      type: "location",
    },
    {
      icon: like ? <FavoriteIcon /> : <FavoriteBorderIcon />,
      label: STRINGCONST.LIKE,
      type: "like",
    },
  ];

  return (
    <Box className="w-16 rounded-full border bg-black text-center gap-2 shadow-2xl shadow-black">
      {actions.map((action, index) => (
        <Box key={index} className="py-3 px-3">
          <Box
            className="relative w-fit p-2 group bg-slate-100 rounded-full shadow-inner cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300"
            onClick={() => handleIconClick(action.type)}
          >
            {action.icon}
            <span
              className={`absolute bg-black text-white rounded-full px-4 py-1 left-12 opacity-0 shadow-2xl shadow-black group-hover:opacity-100 transition-opacity z-50 ${
                action.label === STRINGCONST.DOWNLOAD_RESUME ||
                action.label === STRINGCONST.CURRENT_LOCATION
                  ? "w-44"
                  : ""
              }`}
            >
              {action.label}
            </span>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ToolBar;
