import axios from 'axios'
import React from 'react'

const handler = async (req, res) => {
   
        try {

            const { data } = await axios.get('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2020-01-01&endtime=2020-01-10&limit=50');
            res.send(data)
        } catch (error) {
            res.status('401').send(error)
        }
    };

    export default handler;
    
