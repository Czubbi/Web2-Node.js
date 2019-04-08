import React, { Component } from 'react';
import CustomerCard from '../cards/CustomerCard';
import Modal from '../modals/Modal';
import $ from 'jquery';
import { resolve } from 'url';
import { rejects } from 'assert';
class CustomerMain extends Component {
  constructor(){
    super();
    this.state={
      customers:[],
      isModalOpen:false,
    }
  }
  componentDidMount(){
    this.refreshList();
  }
  refreshList=()=>{
    fetch('/api/getCustomers').then(x=>x.json()).then(customers=>{this.setState({customers:customers})});
  }
  removeCustomer(id){
    return new Promise((resolve,reject)=>{
      $.post( `/api/deleteCustomer/${id}`, function( data ) {
        if(data)
        {
          resolve();
        }
        else reject();
      });
    })
  }
  createCustomer()
  {
    return new Promise((resolve,reject)=>{
      console.log($("#createCustForm").serialize());
      resolve();
      $.post(`/api/insertCustomer`,$("#createCustForm").serialize(),function( data ) {
        if(data)
        {
          resolve();
        }
        else reject();
      });
    })
  }
  render() {
    return (
      <div className="content">
        {this.state.isModalOpen?
          <Modal onFilterClick={()=>{this.setState({isModalOpen:false});}} title="Create customer">
            <form id="createCustForm" style={{position:'relative'}}>
              <div className="formName" style={{}}> 
                <div className="form-group row">
                   <label htmlFor="name" className="col-md-2 col-form-label">Full name:</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" name="name" id="name" placeholder="Customer's full name"></input>
                    </div>
                </div>
              </div>
              <div className="formWrapper">
                <div className="formRight">
                  <h3 style={{margin:0,marginBottom:40}}>Address:</h3>
                  <div className="form-group row">
                      <label htmlFor="address" className="col-md-2 col-form-label">Address:</label>
                      <div className="col-md-10">
                          <input type="text" className="form-control" name="address" id="address" placeholder="Customer's address"></input>
                      </div>
                  </div>
                  <div className="form-group row">
                      <label htmlFor="city" className="col-md-2 col-form-label">City:</label>
                      <div className="col-md-10">
                          <input type="text" className="form-control" name="city" id="city" placeholder="Customer's city"></input>
                      </div>
                  </div>
                  <div className="form-group row">
                      <label htmlFor="zip" className="col-md-2 col-form-label">Zip:</label>
                      <div className="col-md-10">
                          <input type="text" className="form-control" name="zip" id="zip" placeholder="Customer's zip"></input>
                      </div>
                  </div>
                </div>
                <div className="formLeft">
                <h3 style={{margin:0, marginBottom:40}}>Contact:</h3>
                  <div className="form-group row">
                      <label htmlFor="phone" className="col-md-2 col-form-label">Phone:</label>
                      <div className="col-md-10">
                          <input type="text" className="form-control" name="phone" id="phone" placeholder="Customer's phone"></input>
                      </div>
                  </div>
                  <div className="form-group row">
                      <label htmlFor="email" className="col-md-2 col-form-label">Email address:</label>
                      <div className="col-md-10">
                          <input type="text" className="form-control" name="email" id="email" placeholder="Customer's email address"></input>
                      </div>
                  </div>
                </div>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',}}>
                <button onClick={()=>{this.createCustomer().then(()=>{this.setState({isModalOpen:false});this.refreshList();})}} style={{width:'90%'}} className="btn btn-lg btn-primary mb-2">Confirm</button>  
              </div>
            </form>
          </Modal>:null}
        <div style={{minHeight:'calc(100vh}'}}>
          <div className="contentHeader" style={{height:150,backgroundImage:'none'}}>
            <h1>CentiSoft - customers</h1>
          </div>
          <div className="customer-card-container">
          {
            this.state.customers.map(customer=>{
              return(<CustomerCard>
              <div className="card-image">
                <div style={{borderRadius:'50%',width:100,height:100,display:'flex',justifyContent:'center',alignItems:'center',border:"3px solid black"}}>
                  <i className="fas fa-user" style={{fontSize:50,color:'black'}}></i>
                </div>
              </div>
              <div className="card-info">
                <div>
                  <h1>{customer.name}</h1>
                  <div className="customer-card-details">
                    <div style={{borderRight:"2px solid",borderImageSlice:1,borderImageSource:"linear-gradient(to top, transparent 0%,transparent 20%,#999999 20%,#999999 80%,transparent 80%,transparent 100%)", paddingRight:10}}>
                      <h4>Address:</h4>
                      <p>{customer.address}</p>
                      <p>{customer.zip} {customer.city}</p>
                    </div>
                    <div style={{paddingLeft:30}}>
                      <h4>Contact:</h4>
                      <p>{customer.phone}</p>
                      <p>{customer.email}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-buttons">
                <div>
                  <button className="btn btn-primary"> Modify </button><br/>
                  <button className="btn btn-danger" onClick={()=>{this.removeCustomer(customer._id).then(()=>{this.refreshList()})}}> Remove </button>
                </div>
              </div>
            </CustomerCard>)
            })
          }
          </div>
          <div className="addBtn" onClick={()=>{this.setState({isModalOpen:true})}}>
            <i style={{fontSize:40,color:'white',}}className="fas fa-plus"></i> 
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default CustomerMain;