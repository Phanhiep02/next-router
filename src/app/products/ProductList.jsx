"use client";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import { Grid, Paper } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function ProductList() {
  const [posts, setPost] = useState([]);
  const getPosts = async () => {
    const response = await axios.get("https://dummyjson.com/post");
    const data = await response.data.posts;
    setPost(data);
  };
  useEffect(() => {
    getPosts();
  }, []);
  console.log(posts);

  return (
    <div>
      <h1>Products</h1>
      <Container sx={{ marginTop: 5 }} maxWidth="lg">
        <Grid container spacing={2}>
          {posts.map(({ id, title, body }, index) => {
            return (
              <Grid key={index} item>
                <Paper>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      sx={{ height: 140 }}
                      image="https://fastly.picsum.photos/id/832/200/300.jpg?hmac=6gMt7WeRsS41_901ujRTrOgfwtW9MBZ375g8qXO3LUc"
                      title="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          overflow: "hidden",
                          display: "-webkit-box",
                          WebkitBoxOrient: "vertical",
                          WebkitLineClamp: 3, // Giới hạn số dòng hiển thị
                        }}
                      >
                        {body}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={`products/${id}`}>Details</Link>
                    </CardActions>
                  </Card>
                </Paper>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
}
