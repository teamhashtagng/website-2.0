import React, { useState, useEffect } from 'react'
import Button from './Button'

const PrimaryButton = (props) => {
    const { text, bgColor } = props
    return <>
        <Button style={{backgroundColor: `${bgColor}`}} className="button button-primary button-wide-mobile button-sm">
            {text}
        </Button>
    </>
}

export default PrimaryButton