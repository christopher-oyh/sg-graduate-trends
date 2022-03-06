import React,{useState} from "react"
import * as d3 from 'd3'

const BarChart = () => {

    // const fetchText = async (url) => {
    //     const response = await fetch(url);
    //     return await response.text();
    // };
    // const csvUrl = "https://storage.data.gov.sg/intake-enrolment-and-graduates-by-institutions/resources/intake-by-institutions-2021-10-18T09-01-03Z.csv"

    // fetchText(csvUrl).then(text => {
    //     const data = d3.csvParse(text)
    //     console.log(data.length)
    // })
    // return(
    //     <div>
    //     <script>const</script>
    //     </div>
    // )

    const [ data, setData ] = useState();

    //Load data from csv
    const load = function(){  
        fetch( './CSVData/enrolment-by-institutions.csv' )
            .then( response => response.text() )
            .then( responseText => {
                console.log(responseText.length)
                setData( responseText );
            })
    };

    return (
        <div>
            <button onClick={ load }>load</button>
            <h2>text:</h2>
            <pre>{ data }</pre>
        </div>
    );
}

export default BarChart