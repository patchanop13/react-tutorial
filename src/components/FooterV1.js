import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => {
    const {title,website,postcode,isOpen} = props;
    return (
        <div>
            <h3 style={styles.title}>{title} &copy; {new Date().getFullYear()}</h3>
            <p style={{color:'green',fontSize:30}}>{website} {postcode} isOpen: {isOpen.toString()}</p>
        </div>
    )
}

const styles={
    title:{
        color:'red'
    }
}

Footer.propTypes={
    title:PropTypes.string,
    website:PropTypes.string,
    postcode:PropTypes.number,
    isOpen:PropTypes.bool
}

export default Footer
