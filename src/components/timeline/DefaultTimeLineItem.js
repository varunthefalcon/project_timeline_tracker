import React from 'react';
import vlogo from '../../assets/images/vlogo.jpg'
import StopwatchIcon from '../../assets/images/yellow-stopwatch.jpg'

const DefaultTimeLineItem = ({ styleName, data }) => {
    const { label, content, eventDate } = data;
    return (
        <div className={`timeline-item ${styleName}`}>
            <div className="timeline-badge timeline-img">
                <img src={vlogo} alt="Pentagon" title="Pentagon" />
            </div>

            <div className="timeline-panel ">
                <div className="timeline-panel-header">
                    <div className="timeline-header-img timeline-left">
                        <img className="size-40 rounded-circle" src={StopwatchIcon} alt="Pentagon" title="Pentagon" />
                    </div>
                    <div className="timeline-heading">
                        <h5>{eventDate}</h5>
                        <h3 className="timeline-title">{label}</h3>
                    </div>
                </div>
                <div className="timeline-body">
                    <p>{content} </p>
                </div>
            </div>
        </div>
    )
};
export default DefaultTimeLineItem;