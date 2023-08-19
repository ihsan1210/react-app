import { Card, Stack,Image,Text,Tag,TagLabel, Link } from "@chakra-ui/react"
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";



function CardImage(){
  const {id} = useParams()
  
  const [product, setProduct] = useState([]);
  
  
  useEffect(() => {
      getProduct(id);
  }, [id]);


  const getProduct = async (id) => {
    const response = await axios.get(`https://final-term-backend.up.railway.app/video/listProduk/${id}`);
    setProduct(response.data);
  };

  
  
  return product.map(listProduk=>{
    return listProduk.map(itemProduk=>(
      <Link href={itemProduk.linkProduct} isExternal style={{ textDecoration: 'none' }} key={itemProduk.productId}>        
      <Card align={'center'} py={2}>
        <Image
          boxSize='70%'
          objectFit='cover'
          src={itemProduk.thumbnailProduct}
        />
        <Stack pt={2} align={'center'}>
          <Tag size='lg' colorScheme='red' borderRadius='full'>
            <TagLabel>{itemProduk.productName}</TagLabel>
          </Tag>
          <Text fontSize={'md'}  fontWeight={300}>
            Rp. {itemProduk.price}
          </Text>
        </Stack>
      </Card>
    </Link>
    ))
  })  
}

export default function Item(){
  return(
    <Card width={'20%'} variant={'outline'} align={'center'} overflowY={'auto'}>
      <Stack width={'80%'} spacing={5} pt={2}>
        <CardImage/>
      </Stack>
    </Card>
  )
}