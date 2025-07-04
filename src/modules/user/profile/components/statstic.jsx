import React from 'react'

const Stats = () => {
    return (

        <>

            <div className="flex gap-6 mt-4 pt-4 border-t">
                <div className="text-center">
                    <div className="font-bold text-lg">1,234</div>
                    <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="text-center">
                    <div className="font-bold text-lg">12.5K</div>
                    <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="text-center">
                    <div className="font-bold text-lg">892</div>
                    <div className="text-sm text-gray-500">Following</div>
                </div>
                <div className="text-center">
                    <div className="font-bold text-lg">2.1M</div>
                    <div className="text-sm text-gray-500">Likes</div>
                </div>
            </div>
        </>
    )
}

export default Stats