"use client"
import React, { useState } from 'react'
import CoverPhotoEditor from './cover-photo-editor'

const CoverPhoto = () => {
    const [coverPhoto, setCoverPhoto] = useState("linear-gradient(135deg, #667eea 0%, #764ba2 100%)")

    return (
        <>

            <div className="relative h-64 z-10">
                {coverPhoto.startsWith("linear-gradient") ? (
                    <div className="w-full h-full" style={{ background: coverPhoto }} />
                ) : (

                    <img src={coverPhoto || "/placeholder.svg"} alt="Cover photo" className="w-full h-full object-cover" />
                )}
                <div className='z-20'><CoverPhotoEditor currentCover={coverPhoto} onCoverChange={setCoverPhoto} /></div>
            </div>
        </>
    )
}
export default CoverPhoto
