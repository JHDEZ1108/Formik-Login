import { ReactComponent as Logo} from "../../assets/Logo_Final.svg"
import FlexBetween from '../FlexBetween';
import { Box } from "@mui/material";

const Navbar = () => {
  return(
    <Box sx={{ boxShadow: 4, width:"100%"}}>
      <FlexBetween className="navbar" padding="1rem 6%" sx={{ backgroundColor: "#0e0f2a"}}>
          <Logo width={30} fill="#c5a102" cursor="pointer" />
      </FlexBetween>
    </Box>
  )
}
export default Navbar;