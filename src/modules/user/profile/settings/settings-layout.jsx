import { Button, Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, Tabs, TabsList, TabsTrigger } from '@/common/components'
import { Settings } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import AccountSettings from './account-stngs'
import NotificationsSetiings from './notifications-stngs'
import PrivacySettings from './privacy-stngs'
import ProfileSettings from './profile-stngs'

const SettingsLayout = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const modalParam = searchParams.get('modal')


    const [isOpen, setIsOpen] = useState(modalParam === 'open')
    const handleProfileSave = () => {
        setIsOpen(false)

    }

    return (

        <>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                    <Button variant="outline" size="icon">
                        <Settings className="w-4 h-4" />

                    </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                        <DialogTitle>Settings</DialogTitle>
                        <DialogDescription>Manage your account settings and preferences</DialogDescription>
                    </DialogHeader>

                    <Tabs defaultValue="profile" className="w-full">
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger value="profile">Profile</TabsTrigger>
                            <TabsTrigger value="privacy">Privacy</TabsTrigger>
                            <TabsTrigger value="notifications">Notifications</TabsTrigger>
                            <TabsTrigger value="account">Account</TabsTrigger>
                        </TabsList>
                        {/* -- */}
                        <ProfileSettings />


                        {/* Privacy */}
                        <PrivacySettings />
                        {/* notifications */}
                        <NotificationsSetiings />
                        {/* Account */}
                        <AccountSettings />
                    </Tabs>

                    <div className="flex justify-end space-x-2 pt-4 border-t">
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleProfileSave} className="bg-purple-600 hover:bg-purple-700">
                            Save Changes
                        </Button>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    )
}

export default SettingsLayout