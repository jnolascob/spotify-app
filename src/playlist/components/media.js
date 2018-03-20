import React from 'react';
import PropTypes from 'prop-types';
import cover from './bitcoin.jpg';
import './media.css';

class Media extends React.Component {
  handleClick = (event) => {
    console.log(this.props.title);
  }

  render() {
    const { title, author, type } = this.props;
    return (
      <div className="Media" onClick={this.handleClick}>
        <div className="Media-cover">
          <img className="Media-image" src={cover} alt={type} width={260} height={160} />
          <h3 className="Media-title">{title}</h3>
          <p className="Media-author">{author}</p>
        </div>
      </div>
    );
  }
}

Media.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  type: PropTypes.oneOf(['audio', 'video']),
};

export default Media;
