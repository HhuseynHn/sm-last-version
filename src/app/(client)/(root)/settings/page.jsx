"use client"
import SettingsLayout from '@/modules/user/profile/settings/settings-layout'
import Link from 'next/link'
import React from 'react'

const SettingsPage = () => {
    return (

        <>
            Got to <u><i>Settings <SettingsLayout /></i></u><br />
            Got to <Link href="/home" className='text-blue-900'><u><i>Home page</i></u></Link>

        </>
    )
}

export default SettingsPage