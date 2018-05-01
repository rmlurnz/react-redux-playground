import React, { Component } from 'react';

class ProjectItem extends Component {
    deleteProject(id) {
        this.props.onDelete(id);
    }
    render() {
        return (
            <tr>
                <td>{this.props.project.title}</td>
                <td>{this.props.project.category}</td>
                <td className="text-right"><button className="btn btn-outline-danger" onClick={this.deleteProject.bind(this, this.props.project.id)}>remove</button></td>
            </tr>
        );
    }
}

export default ProjectItem;
