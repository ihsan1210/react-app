import { Card,Text,AspectRatio,Box } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Video(){
  const {id} = useParams()
  
  const [video, setVideo] = useState([]);
  
  
  useEffect(() => {
      getVideoById(id);
  }, [id]);


  const getVideoById = async (id) => {
    const response = await axios.get(`https://final-term-backend.up.railway.app/video/${id}`);
    setVideo(response.data);
  };

  return(
    <Card width={'60%'} p={'4'} align={'center'} variant={'outline'}>
      {
        video.map((video)=>(
          <Box key={video.videoId}>
            <Text fontSize={'3xl'} pb={4} fontWeight={'300'}>Review Hp Gadgetin</Text>
            <AspectRatio width='720px' ratio={2}>
                <iframe  src={video.urlVideo} allowFullScreen ></iframe>
            </AspectRatio>    
          </Box>
        ))
      }
      
    </Card>
  )
}