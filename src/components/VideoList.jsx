import {
  Box,
  // Center,
  Heading,
  // Container,
  // Text,
  Stack,
  Image,
  Tag,
  TagLabel,
  // Avatar
} from '@chakra-ui/react'

import { useState, useEffect } from "react";
import axios from 'axios'
import { Link } from "react-router-dom";


function Video(){
  // const id =2

  // const [product, setProduct] = useState([]);
  // const [comment, setComment] = useState([]);
  // const [video, setVideo] = useState([]);
  // const [commentUsername, setCommentUsername] = useState("");
  // const [commentContent, setCommentContent] = useState("");

  // const { id } = useParams();

  // useEffect(() => {
  //     getProductById(id);
  //     getCommentById(id);
  //     getVideoById(id);
  // }, [id]);

  const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const response = await axios.get("https://final-term-backend.up.railway.app/video");
        // console.log(response.data);
        setVideos(response.data);
    };


  return(
    <Box mx={'20'} py={12}>
      <Stack spacing={16} direction='row'>
      
      {
        videos.map((video) => (
          <Link to={`/video/${video.videoId}`}  key ={video.videoId}>
          <Box           
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}>
            <Box
              rounded={'lg'}
              mt={-12}
              pos={'relative'}
              height={'230px'}
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: 'full',
                pos: 'absolute',
                top: 5,
                left: 0,
                backgroundImage: `url(${video.urlThumbnail})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: 'blur(20px)',
                },
              }}>
              <Image
                rounded={'lg'}
                height={230}
                width={282}
                objectFit={'cover'}
                src={video.urlThumbnail}
                alt="#"
              />
            </Box>
            <Stack pt={10} align={'center'}>
              <Tag size='lg' colorScheme='red' borderRadius='full'>
                <TagLabel>Smartphone</TagLabel>
              </Tag>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                Samsung A 51
              </Heading>
            </Stack>
          </Box>
        </Link>
  
        ))
      }
      

      </Stack>
    </Box>
  )
}
export default function VideoList(){
  return(
    <>
        <Heading mx={'20'} mt={'10'} size={'md'}> Video List</Heading>
        <Video/>

    </>
  )
}



