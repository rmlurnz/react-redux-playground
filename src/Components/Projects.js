import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class Projects extends Component {

    deleteProject(id) {
        this.props.onDelete(id);
    }
  render() {
      let projectItems;
      if (this.props.projects) {
          projectItems = this.props.projects.map(project => {
              return (
                  <ProjectItem key={project.title} project={project} onDelete={this.deleteProject.bind(this)}/>
              );
          });
      }
      // console.log(this.props)
    return (
      <div className="container">
        <h2>Current Projects</h2>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Description</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {projectItems}
            </tbody>
        </table>
      </div>
    );
  }
}

export default Projects;
