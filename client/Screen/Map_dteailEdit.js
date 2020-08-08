import React, { Component } from "react";
import { StyleSheet } from "react-native";
import {
  Header,
  Title,
  Container,
  Content,
  Body,
  Button,
  Text,
  Icon,
  Right,
  Left,
  Form,
  ListItem,
  Item,
  Label,
  Input,
} from "native-base";
import SecurityService from "../security/SecurityService";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions


// START IMPORT ACTIONS
import Map_dteailActions from "../redux/actions/Map_dteailActions";
import MapinfoActions from "../redux/actions/MapinfoActions";

// END IMPORT ACTIONS

/** APIs

* actionsMap_dteail.create
*	@description CRUD ACTION create
*
* actionsMap_dteail.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsMap_dteail.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsMapinfo.findBy_map_dteail
*	@description CRUD ACTION findBy_map_dteail
*	@param Objectid key - Id of model to search for
*

**/


class Map_dteailEdit extends Component {
  
  // Init map_dteail
  constructor(props) {
    super(props);
    this.state = {
      map_dteail: {},
      authorized: false
    };
  }

  // Load data on start
  componentWillMount() {

    this.props.navigation.addListener("willFocus", async () => { 
      // Check security
      if (await SecurityService.isAuth([  ])) {
        this.setState({ authorized: true });
      } else {
        this.props.navigation.navigate("Login", {
          showError: "Not authorized"
        });
        return;
      }


      // Load data
      const itemId = this.props.navigation.getParam("id", "new");
      if (itemId !== "new") {
        this.props.actionsMap_dteail.loadMap_dteail(itemId);
        this.props.actionsMapinfo.findBy_map_dteail(itemId);
      } else {
        this.setState({
          map_dteail: {}
        });
      }
      
    });
  }

  // Clear reducer
  componentWillUnmount() {
    this.setState({
      map_dteail: {}
    });
    this.props.actionsMap_dteail.reset();
  }

  // Insert props map_dteail in state
  componentWillReceiveProps(props) {
    this.setState({
      map_dteail: props.map_dteail
    });
  }

  // Save data
  save() {
    // Validation
    let errors = {};
    

    this.setState({ errors: errors });
    if (Object.keys(errors).length > 0) {
      return;
    }

    // Save
    if (this.state.map_dteail._id) {
      // Edit
      this.props.actionsMap_dteail.saveMap_dteail(this.state.map_dteail).then(data => {
        this.props.navigation.navigate("Map_dteailList");
      });
    } else {
      // Create
      this.props.actionsMap_dteail.createMap_dteail(this.state.map_dteail).then(data => {
        this.props.navigation.navigate("Map_dteailList");
      });
    }
  }

  // Show content
  render() { 

    // Check security
    if (!this.state.authorized) {
      return null;
    }

    return (
      <Container>
        <Header>
          <Left>
            <Button
            transparent
            onPress={() => this.props.navigation.goBack()}
            >
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Detail Map_dteail</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => this.save()}>
              <Text>Save</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            
            <Item floatingLabel>
              <Label>
                Bas_file
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { bas_file: value }))
                }
                value={this.state.map_dteail.bas_file && this.state.map_dteail.bas_file.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Bas_map
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { bas_map: value }))
                }
                value={this.state.map_dteail.bas_map && this.state.map_dteail.bas_map.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                In_user
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { in_user: value }))
                }
                value={this.state.map_dteail.in_user && this.state.map_dteail.in_user.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_add1
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_add1: value }))
                }
                value={this.state.map_dteail.map_add1 && this.state.map_dteail.map_add1.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_add2
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_add2: value }))
                }
                value={this.state.map_dteail.map_add2 && this.state.map_dteail.map_add2.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_add3
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_add3: value }))
                }
                value={this.state.map_dteail.map_add3 && this.state.map_dteail.map_add3.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_box
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_box: value }))
                }
                value={this.state.map_dteail.map_box && this.state.map_dteail.map_box.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_line
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_line: value }))
                }
                value={this.state.map_dteail.map_line && this.state.map_dteail.map_line.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_name
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_name: value }))
                }
                value={this.state.map_dteail.map_name && this.state.map_dteail.map_name.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_txt
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_txt: value }))
                }
                value={this.state.map_dteail.map_txt && this.state.map_dteail.map_txt.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Map_type
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { map_type: value }))
                }
                value={this.state.map_dteail.map_type && this.state.map_dteail.map_type.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Mapid
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { mapid: value }))
                }
                value={this.state.map_dteail.mapid && this.state.map_dteail.mapid.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Update_date
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { update_date: value }))
                }
                value={this.state.map_dteail.update_date && this.state.map_dteail.update_date.toString()}
              />
            </Item>
          
            
            <Item floatingLabel>
              <Label>
                Update_res
              </Label>
              <Input
                onChangeText={value =>
                  this.setState(Object.assign(this.state.map_dteail, { update_res: value }))
                }
                value={this.state.map_dteail.update_res && this.state.map_dteail.update_res.toString()}
              />
            </Item>
          

          {/* RELATIONS */}
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with mapinfo */}

          

          </Form>
        </Content>
      </Container>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsMap_dteail: bindActionCreators(Map_dteailActions, dispatch),
    actionsMapinfo: bindActionCreators(MapinfoActions, dispatch),
  };
};

// Validate types
Map_dteailEdit.propTypes = { 
  actionsMap_dteail: PropTypes.object.isRequired,
  actionsMapinfo: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    map_dteail: state.Map_dteailEditReducer.map_dteail,
    listMapinfo: state.Map_dteailEditReducer.listMapinfo
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map_dteailEdit);

const styles = StyleSheet.create({
  validatorItem: { borderColor: "red" },
  validatorLabel: { color: "red" },
  validatorMessage: { color: "red", marginLeft: 15, marginTop: 5 }
});
