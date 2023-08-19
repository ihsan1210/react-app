/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { Card, Stack,Heading,StackDivider,Box,Text,FormControl,FormLabel,Input,Textarea, Button } from "@chakra-ui/react"
import { useNavigate,useParams } from "react-router-dom";
import axios from 'axios';



function CommentForm(){
  const {id} = useParams()
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState("");

  useEffect(() => {
    getComment(id);
}, [id]);


const getComment = async (id) => {
  const response = await axios.get(`https://final-term-backend.up.railway.app/comment/list/${id}`);
  setComments(response.data);
};


  const saveComment = async (e) => {
      e.preventDefault();
      try {
          await axios.post(`https://final-term-backend.up.railway.app/comment/post/${id}`, {
              id,
              username,
              comment
          });
          setUsername("")
          setComment("")
          // navigate("/users");
      } catch (error) {
          console.log(error);
      }
  }

  return(
    <Card variant={'outline'}>
      <Heading px={3} py={1} size='sm' color={'green'}>Write Comment</Heading>
      <form onSubmit={saveComment}>
        <Stack spacing={2} px={3}>
          <FormControl isRequired >
            <FormLabel>Your Name</FormLabel>
            <Input 
            id="name"
            placeholder='Name' 
            onChange={(e) => setUsername(e.target.value)}
            type="name"
            />
          </FormControl>
          <FormControl isRequired >
            <FormLabel>Your Comment</FormLabel>
            <Textarea 
            id="comment" 
            onChange={(e) => setComment(e.target.value)}
            type="text"
            placeholder='Comment' 
            />
          </FormControl>
          <Box py={1}>
            <Button type="submit"  colorScheme='green'  w={'100px'}>Submit</Button>
          </Box>
        </Stack>
      </form>
    </Card>
  )
}



function CommentList(){
  const {id} = useParams()
  
  const [comment, setComment] = useState([]);
  
  
  useEffect(() => {
      getComment(id);
  }, [id]);


  const getComment = async (id) => {
    const response = await axios.get(`https://final-term-backend.up.railway.app/comment/list/${id}`);
    setComment(response.data);
  };
  
  return(
    <Card height={'40%'} variant={'outline'}  >
      <Heading px={3} py={1} size='sm' color={'green'}>Comments</Heading>
      <Stack  overflowY={'scroll'} px={3} py={1} divider={<StackDivider />} spacing='1'  height={'90%'}>
      {
        comment.map(listComment=>(
          <Box key={listComment._id}>
            <Heading size='xs' fontWeight={'500'} >
              {listComment.username}
            </Heading>
            <Text  fontSize='xs'>
              {listComment.comment}
            </Text>
          </Box>
        ))
      }
      </Stack>
    </Card>
  )
}

export default function Comment(){
  return(
    <Card width={'20%'} align={'center'}variant={'outline'} >
    <Stack width={'90%'} spacing={4} py={2} direction={'column'} >
      <CommentList/>
      <CommentForm/>
    </Stack> 
  </Card>
  )
}
