import React, {useRef, useEffect} from "react";

const {tableau} = window;

const Dashboard = () => {

    const ref = useRef(null)
    //Tableau URL
    const url = "https://public.tableau.com/shared/WMWJFZBSJ?:display_count=n&:origin=viz_share_link" 
    // const url = "https://public.tableau.com/shared/WMWJFZBSJ" 

    const initViz = () => {
        new tableau.Viz(ref.current, url);
    }

    useEffect(() => {
        initViz();
    }, [])

    return (
        <div>
            <h1>Tableau Dashboard</h1>
            <div ref={ref} > </div>
        </div>
    )
}

export default Dashboard