import { Card, CardContent, CardDescription, CardHeader, CardTitle, Label, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Separator, Switch, TabsContent } from '@/common/components'
import { privacySettingMock } from '@/mock/user-profile'
import { Globe, Lock, Shield } from 'lucide-react'
import React, { useState } from 'react'

const PrivacySettings = () => {
    const [privacy, setPrivacy] = useState(privacySettingMock)
    return (

        <>
            <TabsContent value="privacy" className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Shield className="w-5 h-5" />
                            Privacy Settings
                        </CardTitle>
                        <CardDescription>Control who can see your information and interact with you</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-3">
                            <Label>Profile Visibility</Label>
                            <Select
                                value={privacy.profileVisibility}
                                onValueChange={(value) => setPrivacy({ ...privacy, profileVisibility: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="public">
                                        <div className="flex items-center gap-2">
                                            <Globe className="w-4 h-4" />
                                            Public - Anyone can see your profile
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="private">
                                        <div className="flex items-center gap-2">
                                            <Lock className="w-4 h-4" />
                                            Private - Only followers can see your profile
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Show Email Address</Label>
                                    <p className="text-sm text-gray-500">Allow others to see your email</p>
                                </div>
                                <Switch
                                    checked={privacy.showEmail}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showEmail: checked })}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Show Phone Number</Label>
                                    <p className="text-sm text-gray-500">Allow others to see your phone</p>
                                </div>
                                <Switch
                                    checked={privacy.showPhone}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showPhone: checked })}
                                />
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="space-y-0.5">
                                    <Label>Show Online Status</Label>
                                    <p className="text-sm text-gray-500">Let others see when you're online</p>
                                </div>
                                <Switch
                                    checked={privacy.showOnlineStatus}
                                    onCheckedChange={(checked) => setPrivacy({ ...privacy, showOnlineStatus: checked })}
                                />
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                            <Label>Who can message you</Label>
                            <Select
                                value={privacy.allowMessages}
                                onValueChange={(value) => setPrivacy({ ...privacy, allowMessages: value })}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="everyone">Everyone</SelectItem>
                                    <SelectItem value="followers">Followers only</SelectItem>
                                    <SelectItem value="none">No one</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}

export default PrivacySettings