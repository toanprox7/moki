import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class PaginationList extends Component {
  handleLoop=() =>{
    var totalPage = this.props.totalPage;
    var next = parseInt(this.props.idpage)+1;
    var prev = parseInt(this.props.idpage)-1;
    var idPage = parseInt(this.props.idpage);
    var arrayLi=[];
    var arrayNext=[];
    var arrayPrev=[];
    if(totalPage >2 && this.props.idpage<=totalPage-1){
      arrayNext.push(<li><Link to={`/san-pham/${this.props.id}/${next}`}>Next</Link></li>);
    }
    for(let i=1;i<=totalPage;i++){
      if(i == this.props.idpage){
        arrayLi.push(<li key={i} className="active"><Link to={`/san-pham/${this.props.id}/${i}`}>{i}</Link></li>);
      }else{
        arrayLi.push(<li key={i}><Link to={`/san-pham/${this.props.id}/${i}`}>{i}</Link></li>);
      }
    }
    if(totalPage >2 && this.props.idpage>=2){
      arrayPrev.push(<li><Link to={`/san-pham/${this.props.id}/${prev}`}>Prev</Link></li>);
    }
    var catArrayLi= arrayLi.slice(idPage-1,idPage+3);
    
    return {
      catArrayLi,
      arrayNext,
      arrayPrev
    };
  }
    render() {
      const mapLi =this.handleLoop().catArrayLi.map(item =>{
        return item;
      })
      const nextLi=this.handleLoop().arrayNext.map(item =>{
        return item;
      })
      const prevLi=this.handleLoop().arrayPrev.map(item =>{
        return item;
      })
      
        return (
            <div className="row">
            <div className="pagination-moki text-right">
              <ul className="pagination">
              {nextLi}
              {mapLi}
              {prevLi}
              </ul>
            </div>
          </div>
        );
    }
}

export default PaginationList;