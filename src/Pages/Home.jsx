import { Box } from "@chakra-ui/react"
import Logo from "../components/Logo"
import VideoList from "../components/VideoList"

export default function Home(){
  return(
    
    <Box width={'100vw'} height={'100vh'} px={'20'} py={12}>
      <Logo></Logo>
      <VideoList></VideoList>
    </Box>
  )
}