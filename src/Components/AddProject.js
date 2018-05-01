import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(e) {
        if (this.refs.title.value === '') {
            alert('Title is required');
        } else {
            this.setState({newProject: {
                id: uuid.v4(),
                title: this.refs.title.value,
                category: this.refs.category.value
            }}, function(){
                this.props.addProject(this.state.newProject);
            });
        }
        e.preventDefault();
    }

  render() {
      let categoryOptions = this.props.categories.map(category => {
          return <option key={category} value={category}>{category}</option>
      });
    return (
      <div className="container">
        <h2>Add Project</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control" id="title" ref="title" />
            </div>
            <div className="form-group">
                <label htmlFor="category">Category</label>
                <select className="form-control" id="category" ref="category">
                    {categoryOptions}
                </select>
            </div>
            <input type="submit" className="btn btn-primary" value="submit" />
        </form>
      </div>
    );
  }
}

export default AddProject;
