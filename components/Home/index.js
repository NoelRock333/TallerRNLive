import React from 'react';
import { View, Text } from 'react-native';
import Api from '../../utils/api';
import {
  Container,
  Content,
  Header,
  Left,
  Body,
  Right
} from 'native-base';
import ImageCard from '../ImageCard';

class Home extends React.Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    Api.get('/posts')
    .then(res => {
      return res.json();
    })
    .then(data => {
      this.setState({ posts: data });
    })
  }

  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Text>Home</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          {this.state.posts.map((post) => (
            <ImageCard post={post} navigation={this.props.navigation}/>
          ))}
        </Content>
      </Container>
    )
  }
}

export default Home;