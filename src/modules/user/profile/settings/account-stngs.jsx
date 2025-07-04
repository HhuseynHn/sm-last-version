import { Button, Card, CardContent, CardDescription, CardHeader, CardTitle, Separator, TabsContent } from '@/common/components'
import { Download, Eye, Trash2 } from 'lucide-react'
import React from 'react'

const AccountSettings = () => {
    return (

        <>
            <TabsContent value="account" className="space-y-4">
                <Card>
                    <CardHeader>
                        <CardTitle>Account Management</CardTitle>
                        <CardDescription>Manage your account data and security settings</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <h4 className="font-medium">Data & Privacy</h4>

                            <Button variant="outline" className="w-full justify-start">
                                <Download className="w-4 h-4 mr-2" />
                                Download Your Data
                            </Button>

                            <Button variant="outline" className="w-full justify-start">
                                <Eye className="w-4 h-4 mr-2" />
                                View Privacy Policy
                            </Button>
                        </div>

                        <Separator />

                        <div className="space-y-4">
                            <h4 className="font-medium text-red-600">Danger Zone</h4>

                            <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                <div className="space-y-3">
                                    <div>
                                        <h5 className="font-medium text-red-800">Deactivate Account</h5>
                                        <p className="text-sm text-red-600">
                                            Temporarily disable your account. You can reactivate it anytime.
                                        </p>
                                    </div>
                                    <Button variant="outline" className="text-red-600 border-red-300 hover:bg-red-50">
                                        Deactivate Account
                                    </Button>
                                </div>
                            </div>

                            <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                                <div className="space-y-3">
                                    <div>
                                        <h5 className="font-medium text-red-800">Delete Account</h5>
                                        <p className="text-sm text-red-600">
                                            Permanently delete your account and all associated data. This action cannot be undone.
                                        </p>
                                    </div>
                                    <Button variant="destructive" className="bg-red-600 hover:bg-red-700">
                                        <Trash2 className="w-4 h-4 mr-2" />
                                        Delete Account
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </>
    )
}

export default AccountSettings