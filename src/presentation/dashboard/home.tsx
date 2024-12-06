import React from "react";
import ToolBar from "../public/toolbar.tsx";
import { Avatar, Box, Typography } from "@mui/material";
import CustomCard from "../../components/card.tsx";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import { string as STRINGCONST } from "../../utils/constants/string_constants.tsx";
import TodayIcon from "@mui/icons-material/Today";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { CircularProgressWithLabel } from "../../components/circularProgressWithLabel.tsx";
import LinearProgressBar from "../../components/linearDeterminate.tsx";
import CustomCalander from "../../components/calander.tsx";
import AlbumIcon from '@mui/icons-material/Album';
import PhoneIcon from '@mui/icons-material/Phone';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';

const stylesClass = {
  iconContainer: "border rounded-full w-fit h-fit p-1",
  iconContainer2: "border rounded-full w-fit h-fit p-0.5",
  buttonBorder: "border rounded-lg h-fit px-2 py-1",
};

const Home = () => {
  // Get current date
  const currentDate = new Date();

  // Format to get month and year
  const customDate: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
  };
  const formattedDate = currentDate.toLocaleDateString(undefined, customDate);

  return (
    <React.Fragment>
      <Box className="flex bg-slate-100">
        <Box
          className="flex items-center"
          sx={{ height: "calc(100vh - 65px)" }}
        >
          <ToolBar />
        </Box>
        <Box className="w-full md:w-[100%] sm:w-[90%]">
          <Box className="flex flex-wrap">
            <Box className="w-full md:w-[34%] sm:w-[100%]">
              <CustomCard customWidth="md:w-max" customHeight="md:h-[16rem] sm:h-full">
                <Box className="flex justify-between px-2">
                    <Box className= "flex justify-between">
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 100, height: 100 }}
                  />
                  <Box sx={{ padding: 3 }}>
                    <Typography variant="h5" className="text-bold">
                      Divyamohan Tyagi
                    </Typography>
                    <Typography>Sr. Full Stack Developer</Typography>
                  </Box>
                  </Box>
                  <Box
                    className={`${stylesClass.iconContainer} my-6 bg-slate-50 shadow-inner cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                  >
                    <MoreVertIcon className="p-0.5" />
                  </Box>
                </Box>
                <Box className="flex py-2">
                  <Box
                    className={`${stylesClass.iconContainer} mx-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                  >
                    <EmailIcon className="p-0.5" />
                  </Box>
                  <Box
                    className={`${stylesClass.iconContainer} mx-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                  >
                    <PhoneInTalkIcon className="p-0.5" />
                  </Box>
                  <Box
                    className={`${stylesClass.iconContainer} mx-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                  >
                    <MapsUgcIcon className="p-0.5" />
                  </Box>
                </Box>
                <Typography className="text-[9px] font-bold px-2">
                  {STRINGCONST.TIME_SLOTS}
                </Typography>
                <Box className="flex justify-between h-11 px-2">
                  <Box>
                    <Box className="h-fit" sx={{ display: "ruby-text" }}>
                      <Typography className="border rounded-lg px-2 py-1">
                        {formattedDate}
                      </Typography>
                      <Box
                        className={`${stylesClass.iconContainer} mx-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                      >
                        <TodayIcon className="p-0.5" />
                      </Box>
                    </Box>
                  </Box>
                  <Box className={`border rounded-lg h-fit px-2 py-1`}>
                    {STRINGCONST.MEETING}
                  </Box>
                </Box>
              </CustomCard>
            </Box>
            <Box className="w-full md:w-[66%] sm:w-[100%]">
            <CustomCard customMargin="md:mt-4 md:mb-4 md:mr-4 md:ml-0 sm:ml-4 sm:mr-4 sm:mt-0 sm:mb-4" customHeight="md:h-[16rem] sm:h-full">
              <Box className="">
                <Box className="flex justify-between">
                  <Box className="flex items-center">
                    <Typography
                      variant="h6"
                      className="text-bold bg-black text-white rounded-2xl px-3 py-1"
                    >
                      {STRINGCONST.ONGOING_PROJECT}
                    </Typography>
                    <Box
                      className={`${stylesClass.iconContainer} mx-1 py-2 px-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                    >
                      <KeyboardArrowDownIcon />
                    </Box>
                  </Box>
                  <Box className="flex">
                    <Box
                      className={`${stylesClass.iconContainer} mx-1 py-2 px-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                    >
                      <ControlPointIcon />
                    </Box>
                    <Box
                      className={`${stylesClass.iconContainer} mx-1 py-2 px-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                    >
                      <FilterAltIcon />
                    </Box>
                    <Box
                      className={`${stylesClass.iconContainer} mx-1 py-2 px-2 shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                    >
                      <FavoriteIcon />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className="flex flex-wrap md:flex-nowrap" sx={{ fontSize: "12px" }}>
                <CustomCard
                  bgColor="bg-yellow-100"
                  customMargin="my-4 md:ml-0 md:mr-4 sm:ml-0 sm:mr-2"
                >
                  <Box className="">
                    <Box className="flex justify-between items-center mb-1">
                      <Box className={`${stylesClass.buttonBorder} text-xs`}>
                        15/11/2023
                      </Box>
                      <Box
                        className={`${stylesClass.iconContainer2} bg-slate-50 shadow-inner p-0.5 rounded-full cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300`}
                      >
                        <MoreVertIcon
                          className="text-xs"
                          sx={{ fontSize: "18px" }}
                        />
                      </Box>
                    </Box>
                    <Box className="flex justify-between items-center py-0.5">
                      <Box className="text-xs font-medium">Web Designing</Box>
                      <Box
                        className={`px-0.5 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                      >
                        <InfoOutlinedIcon
                          className="text-sm text-gray-600"
                          sx={{ fontSize: "15px" }}
                        />
                      </Box>
                    </Box>

                    <Box className="flex justify-between items-center py-0.5">
                      <Typography sx={{ fontSize: "11px" }}>
                        Prototyping
                      </Typography>
                      <Box className="flex items-center gap-1">
                        <CircularProgressWithLabel
                          value={70}
                          size={20}
                          thickness={1.5}
                        />
                        <Box className={`${stylesClass.buttonBorder} text-xs`}>
                          Progress
                        </Box>
                      </Box>
                    </Box>
                    <Box className="py-2">
                      <LinearProgressBar
                        interval={300}
                        step={15}
                        maxProgress={100}
                        onComplete={() => {}}
                        barBGColor="#facc15"
                        barColor="#fef08a"
                      />
                    </Box>
                    <Box className="flex justify-between items-center pt-1 text-xs">
                      <Box></Box>
                      <Box className={`${stylesClass.buttonBorder} text-xs`}>
                        <Typography sx={{ fontSize: "10px" }}>
                          Progress: 70%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CustomCard>
                <CustomCard bgColor="bg-lime-100" customMargin="my-4 md:ml-0 md:mr-0 sm:ml-0 sm:mr-0">
                <Box className="">
                    <Box className="flex justify-between items-center mb-1">
                      <Box className={`${stylesClass.buttonBorder} text-xs`}>
                        15/11/2023
                      </Box>
                      <Box
                        className={`${stylesClass.iconContainer2} bg-slate-50 shadow-inner p-0.5 rounded-full cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300`}
                      >
                        <MoreVertIcon
                          className="text-xs"
                          sx={{ fontSize: "18px" }}
                        />
                      </Box>
                    </Box>
                    <Box className="flex justify-between items-center py-0.5">
                      <Box className="text-xs font-medium">Web Designing</Box>
                      <Box
                        className={`px-0.5 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                      >
                        <InfoOutlinedIcon
                          className="text-sm text-gray-600"
                          sx={{ fontSize: "15px" }}
                        />
                      </Box>
                    </Box>

                    <Box className="flex justify-between items-center py-0.5">
                      <Typography sx={{ fontSize: "11px" }}>
                        Prototyping
                      </Typography>
                      <Box className="flex items-center gap-1">
                        <CircularProgressWithLabel
                          value={70}
                          size={20}
                          thickness={1.5}
                        />
                        <Box className={`${stylesClass.buttonBorder} text-xs`}>
                          Progress
                        </Box>
                      </Box>
                    </Box>
                    <Box className="py-2">
                      <LinearProgressBar
                        interval={300}
                        step={15}
                        maxProgress={100}
                        onComplete={() => {}}
                        barBGColor="#84cc16"
                        barColor="#bef264"
                      />
                    </Box>
                    <Box className="flex justify-between items-center pt-1 text-xs">
                      <Box></Box>
                      <Box className={`${stylesClass.buttonBorder} text-xs`}>
                        <Typography sx={{ fontSize: "10px" }}>
                          2 Days Left
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CustomCard>
                <CustomCard bgColor="bg-pink-100" customMargin="md:ml-4 my-4 mr-0 sm:ml-2">
                <Box className="">
                    <Box className="flex justify-between items-center mb-1">
                      <Box className={`${stylesClass.buttonBorder} text-xs`}>
                        15/11/2023
                      </Box>
                      <Box
                        className={`${stylesClass.iconContainer2} bg-slate-50 shadow-inner p-0.5 rounded-full cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300`}
                      >
                        <MoreVertIcon
                          className="text-xs"
                          sx={{ fontSize: "18px" }}
                        />
                      </Box>
                    </Box>
                    <Box className="flex justify-between items-center py-0.5">
                      <Box className="text-xs font-medium">Web Designing</Box>
                      <Box
                        className={`px-0.5 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full`}
                      >
                        <InfoOutlinedIcon
                          className="text-sm text-gray-600"
                          sx={{ fontSize: "15px" }}
                        />
                      </Box>
                    </Box>

                    <Box className="flex justify-between items-center py-0.5">
                      <Typography sx={{ fontSize: "11px" }}>
                        Prototyping
                      </Typography>
                      <Box className="flex items-center gap-1">
                        <CircularProgressWithLabel
                          value={70}
                          size={20}
                          thickness={1.5}
                        />
                        <Box className={`${stylesClass.buttonBorder} text-xs`}>
                          Progress
                        </Box>
                      </Box>
                    </Box>
                    <Box className="py-2">
                    <LinearProgressBar
                    interval={300}
                    step={15}
                    maxProgress={100}
                    onComplete={() => {}}
                    barBGColor="#ec4899"
                    barColor="#f9a8d4"
                    />

                    </Box>
                    <Box className="flex justify-between items-center pt-1 text-xs">
                      <Box></Box>
                      <Box className={`${stylesClass.buttonBorder} text-xs`}>
                        <Typography sx={{ fontSize: "10px" }}>
                          Progress: 70%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CustomCard>
              </Box>
            </CustomCard>
            </Box>
          </Box>
          <Box className="flex flex-wrap">
            <Box className="w-full xl:w-1/3 md:w-[66%] sm:w-[100%]">
            <CustomCard customMargin="md:ml-4 md:mr-4 sm:ml-4 sm:mr-4">
              <Box className="flex justify-between px-4 py-2 pb-5">
                <Typography variant="h6" className="text-bold">
                  Detailed Information
                </Typography>
              </Box>
              <Box className="flex px-4 py-2 border rounded-xl items-center">
                <Box className="flex-none w-14 h-8">
                    <AlbumIcon />
                </Box>
                <Box className="grow h-14 py-1">
                <Typography variant="body1" className="font-bold">
                    Full Name
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                    Divyamohan Tyagi
                </Typography>
                </Box>
                <Box className="mt-1 flex items-center gap-x-1.5 text-lime-500 w-16 h-6 px-1 border rounded">
                    <Box className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <Box className="size-1.5 rounded-full bg-emerald-500"></Box>
                    </Box>
                    <p className="text-xs/5">Online</p>
                </Box>
              </Box>
              <Box className="flex px-4 my-2 py-2 border rounded-xl items-center">
                <Box className="flex-none w-14 h-8">
                    <AlbumIcon />
                </Box>
                <Box className="grow h-14 py-1">
                <Typography variant="body1" className="font-bold">
                    Email Address
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                    divyamohant97@gmail.com
                </Typography>
                </Box>
                <Box className="flex-none text-lime-500 mx-4 w-8 h-8 text-center text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <EmailIcon className="p-0.5" />
                </Box>
              </Box>
              <Box className="flex px-4 my-2 py-2 border rounded-xl items-center">
                <Box className="flex-none w-14 h-8">
                    <AlbumIcon />
                </Box>
                <Box className="grow h-14 py-1">
                <Typography variant="body1" className="font-bold">
                    Contact Number
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                    +91-8851512349
                </Typography>
                </Box>
                <Box className="flex-none text-lime-500 mx-4 w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <PhoneIcon className="p-0.5" />
                </Box>
              </Box>
              <Box className="flex px-4 my-2 py-2 border rounded-xl items-center">
                <Box className="flex-none w-14 h-8">
                    <AlbumIcon />
                </Box>
                <Box className="grow h-14 py-1">
                <Typography variant="body1" className="font-bold">
                    Designation
                </Typography>
                <Typography variant="body2" className="text-gray-500">
                    Sr. Full Stack Developer
                </Typography>
                </Box>
                <Box className="flex-none text-lime-500 mx-4 w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <InfoOutlinedIcon className="p-0.5" />
                </Box>
              </Box>
            </CustomCard>
            </Box>
            <Box className="w-full lg:w-1/3 md:w-[66%] sm:w-[100%]">
            <CustomCard customMargin="md:ml-0 md:mr-0 md:my-0 sm:my-4 sm:ml-4 sm:mr-4">
              <Box className="flex justify-between px-4 py-2">
                <Typography variant="h6" className="text-bold">
                  Calender
                </Typography>
              </Box>
              <CustomCalander />
            </CustomCard>
            </Box>
            <Box className="w-full lg:w-1/3 md:w-[66%] sm:w-[100%]">
            <CustomCard customMargin="md:ml-4 md:mr-4 sm:ml-4 sm:mr-4">
              <Box className="flex justify-between px-4 py-2">
                <Typography variant="h6" className="text-bold pb-3">
                  Inbox
                </Typography>
              </Box>
              <Box className="flex px-4 justify-between py-2">
              <Box className="flex min-w-0 gap-x-4">
                <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <Box className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">Leslie Alexander</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">leslie.alexander@example.com</p>
                </Box>
                </Box>
                <Box className="flex-none w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <PushPinOutlinedIcon className="p-0.5" />
                </Box>
              </Box>
              <Box className="flex px-4 justify-between py-2">
              <Box className="flex min-w-0 gap-x-4">
                <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <Box className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">Michael Foster</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">michael.foster@example.com</p>
                </Box>
                </Box>
                <Box className="flex-none w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <PushPinOutlinedIcon className="p-0.5" />
                </Box>
            </Box>
            <Box className="flex px-4 justify-between py-2">
                <Box className="flex min-w-0 gap-x-4">
                <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <Box className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">Dries Vincent</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">dries.vincent@example.com</p>
                </Box>
                </Box>
                <Box className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <Box className="flex-none w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <PushPinOutlinedIcon className="p-0.5" />
                </Box>
                <Box className="mt-1 flex items-center gap-x-1.5">
                    <Box className="flex-none rounded-full bg-emerald-500/20 p-1">
                    <Box className="size-1.5 rounded-full bg-emerald-500"></Box>
                    </Box>
                    <p className="text-xs/5 text-gray-500">Online</p>
                </Box>
                </Box>
            </Box>
            <Box className="flex px-4 justify-between py-2">
                <Box className="flex min-w-0 gap-x-4">
                <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <Box className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">Lindsay Walton</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">lindsay.walton@example.com</p>
                </Box>
                </Box>
                <Box className="flex-none w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <PushPinOutlinedIcon className="p-0.5" />
                </Box>
            </Box>
            <Box className="flex px-4 justify-between py-2">
                <Box className="flex min-w-0 gap-x-4">
                <img className="size-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
                <Box className="min-w-0 flex-auto">
                    <p className="text-sm/6 font-semibold text-gray-900">Courtney Henry</p>
                    <p className="mt-1 truncate text-xs/5 text-gray-500">courtney.henry@example.com</p>
                </Box>
                </Box>
                <Box className="flex-none w-8 h-8 text-center border shadow-inner bg-slate-50 cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 active:bg-gray-300 rounded-full">
                    <PushPinOutlinedIcon className="p-0.5" />
                </Box>
            </Box>
            </CustomCard>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default Home;
