import React from 'react';
import ListPreview from './ListPreview';
import './Home.css';
// import api from './api';

class Home extends React.Component {
  static defaultProps = { mainLists: [] };

  render() {

    const { mainLists } = this.props;

    return (
      <div className='home'>
        <h3>Top <br /> Suggestions</h3>
        {
          mainLists.map(list =>  
            <ListPreview
              key={list.list_id}
              list={list}
            />
          )
        }
      </div>
    );
  };
};

export default Home;