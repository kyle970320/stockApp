import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { activeStyle } from '../utils/inlineStyle';
import { SlChart, SlUserFollowing, SlDiamond, SlBookOpen } from 'react-icons/sl';
const SideBar = () => {
  const locate = useLocation();
  return (
    <aside>
      <NavLink to={'/mystock/main'} style={locate.pathname.includes('main') ? activeStyle.active : activeStyle.nonActive}>
        <SlUserFollowing />내 주식정보
      </NavLink>
      <NavLink to={'/mystock/assets'} style={locate.pathname.includes('assets') ? activeStyle.active : activeStyle.nonActive}>
        <SlDiamond />
        자산정보
      </NavLink>
      <NavLink to={'/mystock/stocklist'} style={locate.pathname.includes('stocklist') ? activeStyle.active : activeStyle.nonActive}>
        <SlChart />
        주식 상세정보
      </NavLink>
      <NavLink to={'/mystock/stocknews'} style={locate.pathname.includes('stocknews') ? activeStyle.active : activeStyle.nonActive}>
        <SlBookOpen />
        최신 뉴스
      </NavLink>
    </aside>
  );
};

export default SideBar;
