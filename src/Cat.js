import React from 'react'

const Cat = ({ catfact }) => {
    // console.log(cats)
    const styles = {
        display: 'flex',
        flexDirection: 'column',
        margin: '0 auto 0 auto',
        textAlign: 'center',
        maxWidth: '1170px',
        padding: '0 2rem'
    }

    const factstyle = {
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        margin: '0 auto 0 auto',
        lineHeight: '2rem'
    }
    
    return (
        <div style={styles}>
            <h3>Daily Random Cat Facts</h3>
            <h3 style={factstyle}>{catfact}</h3>
            {/* <h3>Lorem ipsum</h3> */}
        </div>
    )
}

export default Cat