import React from 'react';
import PostPreview from './PostPreview';

class Container extends React.Component {
  render () {
    return(
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
          <PostPreview />
          <div className="clearfix">
            <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Container;
