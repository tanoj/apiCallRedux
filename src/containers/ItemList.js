import React from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

const imgStyle = {
  height: 'auto',
  width: '40%',
  border: '1px solid #000',
  borderRadius: '1%'
};
const itemStyle = {
  width: '50%',
  margin: '0 auto',
  color: '#000'
}

let ItemList = ({ article }) => (
  article ?
    <div style={itemStyle} >
      <div>
        <h5>{article.title}</h5>
        <img style={imgStyle} src={article.urlToImage} alt="" />
        <h4>{article.description}</h4>
        <a href={article.url} target="_blank"><h1>...</h1></a>
      </div>
    </div> 
    :
    null
);

const mapStateToProps = (state) => ({
  article: state.items,
})

ItemList = connect(
  mapStateToProps,
  null
)(ItemList)

export default ItemList;


