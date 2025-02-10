import React from 'react'

function Loader() {
    return (
        <div className="w-full mx-auto flex items-center justify-center h-screen text-6xl">
            <l-bouncy
                size="45"
                speed="1.75"
                color="#ff6700"
            ></l-bouncy>
        </div>
    )
}

export default Loader
