import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
// import { Container, Left, Right, Text, Content, Header, Body, Icon } from 'native-base';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Input, Thumbnail, Text, Icon, Item } from 'native-base';

import Api from '../../utils/api';

class Comments extends React.Component {
  constructor(props) {
    super(props);
    const { id } = this.props.navigation.state.params;
    this.state = {
      comments: [],
      id: id,
      comment: ''
    }
  }

  componentDidMount() {
    Api.get(`/posts/${this.state.id}/comments`)
      .then(data => data.json())
      .then(data => {
        this.setState({
          comments: data
        })
      })
  }


  postComment = () => {
    const comment = {
      content: this.state.comment
    };

    Api.post(`/posts/${this.state.id}/comments`, { comment })
      .then(data => data.json())
      .then(data => {
        debugger
        this.setState({
          comments: [...this.state.comments, data],
          comment: '',
        })
      })
  }
  

  render() {

    const comentarios = this.state.comments.map((item, index) => (
      <ListItem avatar key={index}>
        <Left>
          <Thumbnail source={{ uri: item.user.profile_url }} />
        </Left>
        <Body>
          <Text>{item.user.name}</Text>
          <Text note>{item.content}</Text>
        </Body>
        <Right/>
      </ListItem>
    ));

    return (
      <Container>
        <Header>
          <Left>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </TouchableOpacity>
          </Left>
          <Body>
            <Text>Comentarios</Text>
          </Body>
          <Right />
        </Header>
        <Content>
          <Item rounded style={styles.inputComment}>
            <Input
              placeholder="Escribe un comentario"
              value={this.state.comment}
              onChangeText={(comment) => this.setState({ comment: comment })}
            />
            <TouchableOpacity onPress={() => this.postComment()}>
              <Icon active name="ios-send" />
            </TouchableOpacity>
          </Item>
          <List>
            {comentarios}
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  inputComment: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10
  }
});

export default Comments;