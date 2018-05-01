import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            projects: []
        }
    }

    componentWillMount() {
        this.setState({projects: [
            {
                id: uuid.v4(),
                title: 'Business Website',
                category: 'Web Design'
            },
            {
                id: uuid.v4(),
                title: 'Social App',
                category: 'Mobile Development'
            },
            {
                id: uuid.v4(),
                title: 'Ecommerce Shopping Cart',
                category: 'Web Development'
            }
        ]});
    }

    handleAddProject(project) {
        // console.log(project)
        let projects = this.state.projects;
        projects.push(project);
        this.setState({projects:projects});
    }

    handleDeleteProject(id) {
        // console.log(id)
        let projects = this.state.projects;
        let index = projects.findIndex(x => x.id === id);

        projects.splice(index, 1);

        this.setState({projects:projects});
    }

    render() {
        return (
            <div className="App">
                <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
                <AddProject addProject={this.handleAddProject.bind(this)}/>
            </div>
            // <div className="App">
            //   <header className="App-header">
            //     <img src={logo} className="App-logo" alt="logo" />
            //     <h1 className="App-title">Welcome to React</h1>
            //   </header>
            //   <p className="App-intro">
            //     To get started, edit <code>src/App.js</code> and save to reload.
            //   </p>
            // </div>
        );
    }
}

export default App;
