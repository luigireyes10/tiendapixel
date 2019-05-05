import React, {Component} from 'react';
import Foo from './componentes/Foo';
import Bar from './componentes/Bar';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Paper from 'material-ui/Paper';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import Button from '@material-ui/core/Button';
import GridList from './componentes/GridList';
import SignIn from './componentes/SignIn';
import Album from './componentes/Album';

import './App.css';

const paperStyle = {
    height: '85%',
    width: "85%",
    margin: '2%',
    textAlign: 'center',
    display: 'inline-block',
};


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }

    handleToggle = () => this.setState({open: !this.state.open});

    showBar = () => {
        this.setState({show: 'bar', open: false });
    };

    showFoo = () => {
        this.setState({show: 'foo', open: false });
    };

    showGridlist = () => {
        this.setState({show: 'GridList', open: false });
    };

    showSignIn = () => {
        this.setState({show: 'SignIn'});
    };


    showAlbum = () => {
        this.setState({show: 'Album', open: false });
    };


  

    render() {
        let content = null;

        switch(this.state.show) {
            case 'foo':
                content = (<Foo/>);
                break;

            case 'bar':
                content = (<Bar/>);
                break;

                case 'GridList':
                content = (<GridList/>);
                break;

                case 'SignIn':
                content = (<SignIn/>);
                break;

                case 'Album':
                content = (<Album/>);
                break;
            default:
                content = <h1>Waiting</h1>
        }

        return (
            <div className="App">

           
                

                <AppBar  position="static"  onLeftIconButtonClick={this.handleToggle}>
               
                  <Button  color="inherit" onClick={this.showSignIn}>Login</Button>
                
              </AppBar>
    
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({open})}>

                   
                    <MenuItem id="showFooId" onClick={this.showFoo}>Show Foo</MenuItem>
                    <MenuItem id="showBarId" onClick={this.showBar}>Show Bar</MenuItem>
                    <MenuItem id="showGridList" onClick={this.showGridlist}>Show GridList</MenuItem>
                    <MenuItem id="showAlbum" onClick={this.showAlbum}>Show Album</MenuItem>
                </Drawer>
                <Paper style={paperStyle} zDepth={5}>

                    <Toolbar style={{"justifyContent": "center"}}>
                        <ToolbarTitle text="Material UI"/>
                    </Toolbar>
                    {content}
                    <p>Click the icon on the AppBar to open the Drawer and then pick a menu item. The text above should change.</p>
                </Paper>
            </div>
        );
    }
}

export default App;
