import React, { Component } from 'react';

require('../../sources/sass/Pagination.scss');

/*
  props: {
    onChange(nextPage),
    current,
    total,
  }
*/

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  onChange(nextPage, e) {

    if ( this.props.preventDefault ) {
      e.preventDefault();
    }

    if ( this.props.current === nextPage ) {
      return false;
    }
    
    this.props.onChange(nextPage);
  }

  render() {

    const prevPage = parseInt(this.props.current, 10) - 1;
    const nextPage = parseInt(this.props.current, 10) + 1;

    let items = [];
    for( let i = 2; i < this.props.total; i++) {
      if( i < prevPage || i > nextPage  ) {
        continue;
      }
      let item = '';
      item = <a 
        key={i} 
        className={`page-number ${i === this.props.current ? 'active' : ''}`}  
        onClick={this.onChange.bind(this, i)}
        href={this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g,i) : 'javascript:;'}
      >{i}</a>
      items.push(item);
    }

    return (
      <nav className="pagination">

        {
          this.props.current == 1 ? 
          '' : 
          <a
            href="javascript:;" 
            className="pre-page"
            onClick={this.onChange.bind(this, this.props.current - 1)}
            href={this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g,this.props.current - 1) : 'javascript:;'}
          >«</a>
        }

        <a
          href="javascript:;" 
          className={`page-number ${1 === this.props.current ? 'active' : ''}`} 
          onClick={this.onChange.bind(this, 1)}
          href={this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g,1) : 'javascript:;'}
        >1</a>

        {
          prevPage <= 2 ? 
          '' : 
          <span className="space">…</span>
        }

        { items }

        {
          nextPage >= this.props.total - 1 ? 
          '' :
          <span className="space">…</span>
        }

        {
          this.props.total == 1 ? 
          '' : 
          <a
            href="javascript:;" 
            className={`page-number ${this.props.total === this.props.current ? 'active' : ''}`} 
            onClick={this.onChange.bind(this, this.props.total)}
            href={this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g,this.props.total) : 'javascript:;'}
          >{this.props.total}</a>
        }
        
        {
          this.props.current >= this.props.total ? 
          '' : 
          <a
            href="javascript:;" 
            className="next-page"
            onClick={this.onChange.bind(this, this.props.current + 1)}
            href={this.props.linkFormat ? this.props.linkFormat.replace(/{{page}}/g, this.props.current + 1) : 'javascript:;'}
          >»</a>
        }
      </nav>
    )
  }

};

export default Pagination;