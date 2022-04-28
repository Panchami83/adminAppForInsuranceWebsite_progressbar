import React from 'react'

const Progress_bar = ({ bgcolor, progress, height }) => {

    const Parentdiv = {
        height: height,
        width: '80%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 40
    }

    const Childdiv = {
        height: '80%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius: 10,
        textAlign: 'left'
    }

    const progresstext = {

        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default Progress_bar;