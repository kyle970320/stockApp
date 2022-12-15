import React from "react";
import { Link } from "react-router-dom";
import { SlChart, SlUserFollowing, SlDiamond } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
const SideBar = () => {
  const locate = useLocation();
  const style = {
    active: {
      backgroundColor: "#5738c0",
      color: "white",
      opacity: "0.9",
    },
    nonActive: {
      backgroundColor: "#e1dcf2",
      // opacity: "0.6",
    },
  };
  return (
    <aside>
      <NavLink
        to={"/mystock/main"}
        style={
          locate.pathname.includes("main") ? style.active : style.nonActive
        }
      >
        <SlUserFollowing />내 주식 정보
      </NavLink>
      <NavLink
        to={"/mystock/assets"}
        style={
          locate.pathname.includes("assets") ? style.active : style.nonActive
        }
      >
        <SlDiamond />
        자산정보
      </NavLink>
      <NavLink
        to={"/mystock/stocklist"}
        style={
          locate.pathname.includes("stocklist") ? style.active : style.nonActive
        }
      >
        <SlChart />
        주식 상세정보
      </NavLink>
    </aside>
  );
};

export default SideBar;
