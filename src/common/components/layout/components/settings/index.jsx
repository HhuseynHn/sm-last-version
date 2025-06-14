import { Avatar, AvatarFallback, AvatarImage, Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/common/components'
import { LogOut, Settings, User } from 'lucide-react'
import React from 'react'

const SettingsProfile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative h-9 w-9 rounded-full p-0 ml-1">
                    <Avatar className="h-9 w-9 ring-2 ring-violet-500/50 transition-all duration-300 hover:ring-violet-500">
                        <AvatarImage src="/placeholder.svg?height=36&width=36" alt="Profile" />
                        <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                            <User className="h-4 w-4" />
                        </AvatarFallback>
                    </Avatar>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-xl p-2">
                <div className="flex items-center gap-2 p-2">
                    <Avatar className="h-10 w-10 ring-2 ring-violet-500/50">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
                        <AvatarFallback className="bg-gradient-to-br from-fuchsia-500 to-violet-500 text-white">
                            <User className="h-4 w-4" />
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="text-sm font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">@johndoe</p>
                    </div>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-lg focus:bg-muted">
                    <User className="mr-2 h-4 w-4" />
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-lg focus:bg-muted">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-lg focus:bg-muted">
                    <LogOut className="mr-2 h-4 w-4" />
                    Log out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default SettingsProfile