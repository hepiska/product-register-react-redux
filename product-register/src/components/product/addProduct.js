import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Input, Icon, Modal, Form } from 'semantic-ui-react';

import { addProduct } from '../../actions';

class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        imageurl: '',
        name: '',
        description: '',
        price: '',
      },
      modalOpen: false,
    };
  }
  addProduct(newProduct) {
    console.log(newProduct);
    this.props.addProduct(newProduct);
    this.closeModal();
    let product ={
      imageurl: '',
      name: '',
      description: '',
      price: '',
    }
    this.setState({ product: product })
  }
  openModal() {
    this.setState({ modalOpen: true });
  }
  closeModal() {
    this.setState({ modalOpen: false });
  }
  handleChange(e) {
    const newProduct = this.state.product;
    newProduct[e.target.name] = e.target.value;
    this.setState({ products: newProduct });
  }
  render() {
    const { product } = this.state;
    return (
      <div>
      <Button secondary onClick={() => this.openModal()}>Secondary</Button>
        <Modal open={this.state.modalOpen}>
          <Modal.Header>Add Product</Modal.Header>
          <Modal.Content>
            <Form>
              <Form.Field>
                <label>Name</label>
                <Input
                  focus
                  fluid placeholder="Name"
                  name="name" value={this.state.product.name}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Image URL</label>
                <Input
                  focus
                  fluid placeholder="Image URL"
                  name="imageurl" value={this.state.product.imageurl}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Price {this.state.product.price}</label>
                <Input
                  focus
                  fluid placeholder="Price"
                  name="price" value={this.state.product.price}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Field>
              <Form.Field>
                <label>Description</label>
                <Input
                  focus
                  fluid placeholder="Description"
                  name="description" value={this.state.product.description}
                  onChange={e => this.handleChange(e)}
                />
              </Form.Field>
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={e =>{this.addProduct(product); }} >
              Submit <Icon name="right chevron" />
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: newProduct => dispatch(addProduct(newProduct)),
});
export default connect(null, mapDispatchToProps)(AddProduct);
