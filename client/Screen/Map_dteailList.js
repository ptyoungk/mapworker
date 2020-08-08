import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Icon,
  Right,
  Left,
  Header,
  Button,
  Body,
  Title
} from "native-base";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import Map_dteailActions from "../redux/actions/Map_dteailActions";

// END IMPORT ACTIONS

/** APIs

* actionsMap_dteail.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsMap_dteail.list
*	@description CRUD ACTION list
*
* actionsUser.changePassword
*	@description Change password of user from admin
*	@returns object
*
* actionsUser.list
*	@description CRUD ACTION list
*
* actionsUser.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsUser.create
*	@description CRUD ACTION create
*
* actionsUser.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsUser.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*

**/

class Map_dteailList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: props.list
    };
  }

  // Load data on start
  componentWillMount() {
    this.props.navigation.addListener("willFocus", async () => { 
      // Load list
      this.props.actionsMap_dteail.loadMap_dteailList();
    });
  }

  // Receive props
  componentWillReceiveProps(props) {
    this.setState({
      ...this.state,
      list: props.list
    });
  }

  deleteRow(secId, rowId, rowMap, data) {
    let that = this;
    this.props.actionsMap_dteail.deleteMap_dteail(data._id).then(() => {
      rowMap[`${secId}${rowId}`].props.closeRow();
      const newData = that.state.list;
      newData.splice(rowId, 1);
      that.setState({
        list: newData
      });
    });
  }

  render() { 
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Map_dteail</Title>
          </Body>
          <Right>
            <Button
              transparent
              name="menu"
              onPress={() => this.props.navigation.navigate("Map_dteailEdit")}
            >
              <Text>Add</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <FlatList
            data={this.state.list}
            renderItem={({ item }) => (
              <ListItem
                noIndent
                onPress={() =>
                  this.props.navigation.navigate("Map_dteailEdit", {
                    id: item._id
                  })
                }
              >
                <Left>
                  <Text>{item._id}</Text>
                </Left>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            )}
            renderRightHiddenRow={(data, secId, rowId, rowMap) => (
              <Button
                full
                danger
                onPress={_ => this.deleteRow(secId, rowId, rowMap, data)}
              >
                <Icon active name="trash" />
              </Button>
            )}
          />
          {this.state.list && this.state.list.length == 0 && (
            <List>
              <ListItem>
                <Text>No elements found</Text>
              </ListItem>
            </List>
          )}
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsMap_dteail: bindActionCreators(Map_dteailActions, dispatch),
  };
};

// Validate types
Map_dteailList.propTypes = { 
  actionsMap_dteail: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.Map_dteailListReducer.listMap_dteail
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map_dteailList);
