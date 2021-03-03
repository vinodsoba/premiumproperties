import React, { useState} from 'react'

export default function SearchBar() {

    const [input, setInput] = useState(0);

    return (
        <div>
            <div className="control">
                <input
                type='text'
                placeholder="Search Listings"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                />
            </div>
        </div>
    )
}
