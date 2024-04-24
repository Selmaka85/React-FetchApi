import React,{Component} from 'react';
import Card from '../card/card.component'
import './card-list.style.css';


class CardList extends Component{
    render(){
        //console.log(this.props.monsters);
        // destructuring array to be able to extract multiple values 
        const {monsters}=this.props;   
        return (
    //Keys help React identify which items have changed, are added, or are removed
    //from data stored in objects array (unpack values from array)
    //Keys are used to elements inside array to give the elements stable identity 
        <div className=" card-list p-2 m-2">
            {monsters.map((monster) =>{
                return <Card monster={monster}/>
            })}
        </div>    
        );
    }
}

export default CardList;