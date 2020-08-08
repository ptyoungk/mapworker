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
import MapinfoActions from "../redux/actions/MapinfoActions";
import Map_dteailActions from "../redux/actions/Map_dteailActions";

// END IMPORT ACTIONS

/** APIs

* actionsMapinfo.list
*	@description CRUD ACTION list
*	@returns ARRAY OF mapinfo
*
* actionsMapinfo.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id mapinfo
*
* actionsMapinfo.create
*	@description CRUD ACTION create
*	@param mapinfo obj - Object to insert
*
* actionsMapinfo.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id mapinfo
*	@returns mapinfo
*
* actionsMapinfo.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id mapinfo
*	@returns mapinfo
*
* actionsMapinfo.findBy_map_dteail
*	@description CRUD ACTION findBy_map_dteail
*	@param Objectid key - Id of model to search for
*
* actionsMap_dteail.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsMap_dteail.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsMap_dteail.create
*	@description CRUD ACTION create
*
* actionsMap_dteail.list
*	@description CRUD ACTION list
*
* actionsMap_dteail.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*

**/

class MapinfoList extends Component {
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
      this.props.actionsMapinfo.loadMapinfoList();
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
    this.props.actionsMapinfo.deleteMapinfo(data._id).then(() => {
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
            <Title>List Mapinfo</Title>
          </Body>
          <Right>
            <Button
              transparent
              name="menu"
              onPress={() => this.props.navigation.navigate("MapinfoEdit")}
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
                  this.props.navigation.navigate("MapinfoEdit", {
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
    actionsMapinfo: bindActionCreators(MapinfoActions, dispatch),
    actionsMap_dteail: bindActionCreators(Map_dteailActions, dispatch),
  };
};

// Validate types
MapinfoList.propTypes = { 
  actionsMapinfo: PropTypes.object.isRequired,
  actionsMap_dteail: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    list: state.MapinfoListReducer.listMapinfo
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapinfoList);
