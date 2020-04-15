import React, { useState, useEffect, Fragment } from 'react';
import DefaultTimeLineItem from './timeline/DefaultTimeLineItem'
import Axios from 'axios';

const backend = "http://varunthefalcon.pythonanywhere.com/projectTimeline/"

const LeftAligned = () => {
    const [loading, setLoading] = useState(false)
    const [project, setProject] = useState({
        id: '',
        name: '',
        allocatedHours: 0,
        consumedHours: 0,
        timeline: []
    })

    const handleClick = () => {
        if (window.prompt('A developer without vision is a ______?', 'mudinja sollu') === 'tool') {
            window.open(backend, "_blank") || window.location.replace(backend);
        } else {
            alert('po da venna')
        }
    }

    useEffect(() => {
        async function getProjectDetails() {
            setLoading(true)
            const config = {
                method: 'GET',
                url: 'https://varunthefalcon.pythonanywhere.com/project/4/',
            }
            const response = await Axios(config)
            setProject(response.data)
            setLoading(false)
        }
        getProjectDetails()
    }, [])

    const { name, allocatedHours, consumedHours, timeline } = project
    return (
        <div className="app-wrapper">
            {loading
                ? <p>loading....</p>
                : <Fragment>
                    <h1 onClick={handleClick} style={{ cursor: 'pointer' }}>
                        {`${name} - ${allocatedHours} years old - ${consumedHours}% life wasted`}
                    </h1>
                    <div className="timeline-section clearfix animated slideInUpTiny animation-duration-3">
                        {timeline.map((event, index) => <DefaultTimeLineItem key={index} data={event} />)}
                    </div>
                </Fragment>}
        </div>
    )
};

export default LeftAligned;

