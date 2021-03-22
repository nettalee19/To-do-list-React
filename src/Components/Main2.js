import React from "react"

class Main2 extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            newTask:'',
            list: [],
        }
        
    }

    updateTask(key, value){
        this.setState({
            [key]: value
        })
    }

    addTask(){
        const newTask ={
            id: 1+ Math.random(),
            value: this.state.newTask
        }

        const list=[...this.state.list]

        list.push(newTask)

        this.setState({
            list,
            newTask:'',
        })
    }

    deleteTask(id){
        const list = [...this.state.list]

        //filter the item that is being deleted
        const updateList = list.filter(item => item.id !== id)

        this.setState({
            list: updateList
        })
    }

    

    render(){
        return <div>
           Add a new task: <br/>
           <input type="text" placeholder="Write your Task here" value={this.state.newTask} onChange={e => this.updateTask("newTask", e.target.value)}/>
           
           <button onClick={() =>this.addTask()}>Save</button>

           <br/>
           {/* going over each item in the list array */}
           <ul> 
               {this.state.list.map(item => {
                   return(
                       <li key={item.id}>
                           {item.value}
                           <button onClick={() =>this.deleteTask(item.id)}>X</button>
                           <button onClick={() =>this.deleteTask(item.id)}>update</button>
                       </li>
                   )
               })} 
           </ul>

        </div>
    }
}

export default Main2