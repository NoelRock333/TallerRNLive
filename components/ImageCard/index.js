import React from 'react';
import { Image } from 'react-native';
import { Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'

const ImageCard = ({ post, navigation }) => (
  <Card>
    <CardItem>
      <Left>
        <Thumbnail source={{ uri: post.user.profile_url }} />
        <Body>
          <Text>{post.title}</Text>
          <Text note>{post.user.name}</Text>
        </Body>
      </Left>
    </CardItem>
    <CardItem cardBody>
      <Image source={{uri: post.photo_url }} style={{height: 200, width: null, flex: 1}}/>
    </CardItem>
    <CardItem>
      <Left>
        <Button transparent onPress={() => navigation.navigate('Comments', { id: post.id })}>
          <Icon active name="chatbubbles" />
          <Text>{post.comments.length} Comments</Text>
        </Button>
      </Left>
      <Body>
  
      </Body>
      <Right>
      </Right>
    </CardItem>
  </Card>
);

export default ImageCard;
