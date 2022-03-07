import React, {useRef, useEffect} from "react";

const {tableau} = window;

const Dashboard = () => {

    const ref = useRef(null)
    //Tableau URL
    const url = "https://public.tableau.com/shared/BXN7YZ4JF?:display_count=n&:origin=viz_share_link" 
    // const url = "https://public.tableau.com/shared/WMWJFZBSJ" 

    const initViz = () => {
        new tableau.Viz(ref.current, url);
    }

    useEffect(() => {
        initViz();
    }, [])

    function vizResize() {
        var width = document.getElementById("resizeWidth").value;
        var height = document.getElementById("resizeHeight").value;

        tableau.Viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
    }

    return (
        <div>
            <h1>Tableau Dashboard</h1>
            <div ref={ref}  > </div>
            
        </div>
    )
}

export default Dashboard