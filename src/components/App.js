import React, { useState, useEffect } from "react";

function App() {
    const [image, setImage] = useState(null)
    // const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(r => r.json())
        .then(data => {
            setImage(data.message)
        });
        // if we look at the API link, each image is stored in message key!
    }, []);
    // we use [] dependency to have image render only once
    
    if (!image) return <p>Loading...</p>;
    return <img src={image} alt="A Random Dog" />

    // return (
    //     <div>
    //         { loading ? <p>"Loading..."</p> : <img>{setLoading}</img> }
    //     </div>
    // )
}

export default App;