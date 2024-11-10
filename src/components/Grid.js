import React from 'react'
import KeywordRow from './KeywordRow'

const Grid = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-y-6">
            <KeywordRow />
            <KeywordRow />
            <KeywordRow />
        </div>
    )
}

export default Grid