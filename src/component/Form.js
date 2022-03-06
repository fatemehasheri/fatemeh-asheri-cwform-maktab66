import React,{Component} from "react";

class NameForm extends Component {
    constructor(props) {
      super(props);
      this.state = {};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.name + ' ' + this.state.family);
      event.preventDefault();
    }
  
    render() {
      return (
        <form className="form my-5" onSubmit={(e) => this.handleSubmit(e)}>
          <label>
            Name:
            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            family:
            <input type="text" name="family" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            phone-number:
            <input type="number" name="phone" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input className="my-5" type="submit" value="Submit" />
        </form>
      );
    }
}
export default NameForm;