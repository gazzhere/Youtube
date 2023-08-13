import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglemenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/Constants";
import {chacheResult} from "../utils/searchSlice"

const Head = () => {



  const [searchQuery, setSearchQuery] = useState("");
  const [suggestion, setSuggetions] = useState([]);
  const [showSuggestion, setshowsuggetion] = useState(false);
  const searchCache=useSelector((store)=>store.search);



  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggetions(searchCache[searchQuery]);
      } else {
        getSearchSugestion();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const dispatch = useDispatch();

  const getSearchSugestion = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    // console.log(searchQuery);
    setSuggetions(json[1]);
    dispatch(chacheResult({
      [searchQuery]:json[1]
    }))
  };

  const togglemenuhandler = () => {
    dispatch(togglemenu());
  };

  return (
    <div className="  grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1 ">
        <img
          onClick={() => togglemenuhandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="logo"
            src="https://logodownload.org/wp-content/uploads/2014/10/youtube-logo-1-3.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-15">
        <div>
          <input
            className=" border border-gray-400 w-1/2 rounded-l-full p-2 "
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setshowsuggetion(true)}
            onBlur={() => setshowsuggetion(false)}
          />

          <button className=" border border-gray-400 rounded-r-full  p-2 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestion && (
          <div className="  absolute shadow-md rounded-sm bg-white py-2 px-5 w-[43.5rem] border border-gray-100">
            <ul>
              {suggestion.map((s) => (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100" key={s}>
                  🔍 {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="use"
          src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
        />
      </div>
    </div>
  );
};

export default Head;
