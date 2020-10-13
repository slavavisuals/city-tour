import React, { Component } from 'react';
import styles from './tour.module.scss';

export default class Tour extends Component {

    state = {
        showInfo: false
    };

    handleInfo = () => {
        this.setState({
           showInfo: !this.state.showInfo
        })
    }


    render() {
        const {id,city,img,name,info} = this.props.tour;
        const {removeTour} = this.props;

        return (
          <article className={styles.tour}>
              <div className={styles['img-container']}>
                  <img src={img} alt="city tour"/>
                  <span className={styles['close-btn']} onClick={() => removeTour(id)}>
                      <i className="fas fa-window-close"></i>
                  </span>
              </div>
              <div className={styles['tour-info']}>
                  <h3>{city}</h3>
                  <h4>{name}</h4>
                  <h5>info <span onClick={this.handleInfo}><i className="fas fa-caret-square-down"/></span></h5>
                  {this.state.showInfo && <p>{info}</p>}
              </div>

          </article>
        )
    }
}