// User defined component
import React from 'react';
import Table from 'react-bootstrap/Table';  //Bootstrap table to show list in tabular form
import Button from 'react-bootstrap/Button';    //Bootstrap button to handle user click
import UserDetail from './UserDetail';  //Another component to show details of user fetched from API


class UserList extends React.Component{


    constructor(props){
        super(props);   
        this.state={
            'users':[],
            'isClicked':false,
            'id':''
        }
    }

    
    componentDidMount(){
        this.getUsers();
        console.log(this.state.users)
    }
    

    async getUsers(){
       await fetch('https://jsonplaceholder.typicode.com/users').then(results => results.json())
       .then(results => this.setState({'users':results}));
    }


    handleClick(id){
        this.setState({isClicked:true,id:id});
    }

    render(){
        if(this.state.isClicked) 
        {
            return(
                <UserDetail ID={this.state.id}></UserDetail>    
            );

        }else{  //UserList Component
            return(
                <div className="UserTable">
                    <h1>User List</h1>
                    <Table variant="dark" striped bordered>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.users.map((user)=>( 
                                <tr key={user.id}  >
                                    <td>
                                       {user.id}
                                    </td>   
                                    <td> <Button variant='link' onClick={()=>this.handleClick(user.id)}>{user.name}</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
                
            );
        }
        }
}

export default UserList;