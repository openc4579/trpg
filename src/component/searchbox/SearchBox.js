import React, { Component } from 'react'

import './searchbox.scss'

class SearchBox extends Component{
    constructor(props){
        super(props)
        this.state = {isOpenSearchBox: false}

        this._checkSearchBoxOpen = this._checkSearchBoxOpen.bind(this)
    }

    _checkSearchBoxOpen(e){
        let isChecked = e.target.checked;
        this.setState({
            isOpenSearchBox: isChecked
        });
    }

    render(){
        return(
            <div className="searchbox collapse">
                <input type="checkbox" onChange={this._checkSearchBoxOpen} checked={this.state.isOpenSearchBox}/>
                <div className="title collapse-title text-xl font-medium">
                    Click me to show/hide content
                </div>
                <div className="collapse-content">
                    <p>hello</p>
                </div>
                <div className='searchbox-arrow'>
                    <div className="searchbox-arrow-line left">
                    </div>
                    <label className="searchbox-arrow-icon swap bg-white -t-[10px]">
                        <input type="checkbox" onChange={this._checkSearchBoxOpen} checked={this.state.isOpenSearchBox}/>
                        <div className="swap-on translate-y-[7px]"><i className="arrow rotate-[225deg]"></i></div>
                        <div className="swap-off translate-y-[-7px]"><i className="arrow rotate-45"></i></div>
                    </label>
                    <div className="searchbox-arrow-line right">
                    </div>
                </div>
            </div>
        )
    }
}
export default SearchBox