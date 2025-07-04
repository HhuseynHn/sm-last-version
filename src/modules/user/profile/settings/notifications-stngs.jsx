import { Card, CardContent, CardDescription, CardHeader, CardTitle, Label, Separator, Switch, TabsContent } from '@/common/components'
import { notificationsMock } from '@/mock/user-profile'
import { Bell, Mail, Smartphone } from 'lucide-react'
import React, { useState } from 'react'

const NotificationsSetiings = () => {
    const [notifications, setNotifications] = useState(notificationsMock)
    return (

        <>
            <TabsContent value="notifications" className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Bell className="w-5 h-5" />
                            Notification Preferences
                        </CardTitle>
                        <CardDescription>Choose what notifications you want to receive</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <h4 className="font-medium">Activity Notifications</h4>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Likes</Label>
                                    <p className="text-sm text-gray-500">When someone likes your posts</p>
                                </div>
                                <Switch
                                    checked={notifications.likes}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, likes: checked })}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Comments</Label>
                                    <p className="text-sm text-gray-500">When someone comments on your posts</p>
                                </div>
                                <Switch
                                    checked={notifications.comments}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, comments: checked })}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>New Followers</Label>
                                    <p className="text-sm text-gray-500">When someone follows you</p>
                                </div>
                                <Switch
                                    checked={notifications.follows}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, follows: checked })}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Messages</Label>
                                    <p className="text-sm text-gray-500">When you receive new messages</p>
                                </div>
                                <Switch
                                    checked={notifications.messages}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, messages: checked })}
                                />
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <h4 className="font-medium">Delivery Methods</h4>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5 flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    <div>
                                        <Label>Email Notifications</Label>
                                        <p className="text-sm text-gray-500">Receive notifications via email</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={notifications.emailNotifications}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, emailNotifications: checked })}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5 flex items-center gap-2">
                                    <Smartphone className="w-4 h-4" />
                                    <div>
                                        <Label>Push Notifications</Label>
                                        <p className="text-sm text-gray-500">Receive push notifications on your device</p>
                                    </div>
                                </div>
                                <Switch
                                    checked={notifications.pushNotifications}
                                    onCheckedChange={(checked) => setNotifications({ ...notifications, pushNotifications: checked })}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}

export default NotificationsSetiings