import {Box, Stack} from "@chakra-ui/react"
import Item from "./Item"
import Video from "../components/Video"
import Comment from "../components/Comment"

export default function ItemList(){
  return(
    <Box width={'100vw'} height={'90vh'} px={'20'} py={12}>  
    <Stack direction={'row'} spacing={8} height={'95%'} >
      <Item/>
      <Video/>
      <Comment/>
    </Stack>
  </Box>
  )
}