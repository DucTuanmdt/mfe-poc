import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


const drawerMenuList = [
  {
    label: "Home",
    path: "/",
    icon: <HomeOutlinedIcon />
  },
  {
    label: "Product",
    path: "/product",
    icon: <CategoryOutlinedIcon />
  },
  {
    label: "User",
    path: "/user",
    icon: <SupervisorAccountOutlinedIcon /> 
  },
  {
    label: "Dashboard",
    path: "/dashboard",
  },
  {
    label: "Setting",
    path: "/setting",
    icon: <SettingsOutlinedIcon />
  },
];

export default drawerMenuList