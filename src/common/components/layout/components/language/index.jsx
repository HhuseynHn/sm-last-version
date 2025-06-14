import { Button, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/common/components'
import { Globe } from 'lucide-react'
import React from 'react'

const Language = () => {
    const languages = [
        { code: "en", name: "English" },
        { code: "tr", name: "Turkish" },
        { code: "rus", name: "Russian" }
    ]

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted transition-colors">
                        <Globe className="h-5 w-5" />
                        <span className="sr-only">Select language</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="rounded-xl p-2">
                    <DropdownMenuLabel className="text-center font-bold py-2">Select Language</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {languages.map((lang) => (
                        <DropdownMenuItem key={lang.code} className="rounded-lg focus:bg-muted">
                            {lang.name}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    )
}

export default Language