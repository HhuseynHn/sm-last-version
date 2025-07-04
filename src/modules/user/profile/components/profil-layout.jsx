import React from 'react'
import ContentTabs from './content-tabs'
import CoverPhoto from './cover-photo'
import ProfileHeader from './profile-header'


const ProfileLayout = () => {
    return (
        <>

            <CoverPhoto />
            <div className='min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white'>
                <ProfileHeader />
                <ContentTabs />
            </div>
        </>
    )
}

export default ProfileLayout