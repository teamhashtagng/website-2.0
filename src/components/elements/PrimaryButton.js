import React from 'react'
import Button from './Button'

const PrimaryButton = (props) => {
    const { text, bgColor, width } = props
    return <>
        <Button style={{backgroundColor: `${bgColor}`, width: `${width}`}} className="button button-primary button-wide-mobile button-sm">
            {text}
        </Button>
    </>
}

export default PrimaryButton