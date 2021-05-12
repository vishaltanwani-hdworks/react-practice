import React from 'react';
import { connect } from 'react-redux'
import { fetchData } from "../../redux/actions/fetchAction"

class Home extends React.Component{
  state = {
    list: []
  }

  handleFetch = async() => {
    await this.props.fetchData()
  }

  render(){
    const { matchesData } = this.props.dataState
    return(
      <div className="component">
        {matchesData.map((x,i) => <p key={i}>{x.matchTeamHomeShort} vs {x.matchTeamAwayShort}</p>)}
        <button onClick={this.handleFetch}> fetch</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  dataState: state.dataState
})

export default connect(mapStateToProps, { fetchData })(Home);
