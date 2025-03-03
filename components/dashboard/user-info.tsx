import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface User {
    name: string;
    email: string;
    avatar: string;
}

export function UserInfo({ user, showEmail = false }: { user: User, showEmail?: boolean }) {
    
    return (
        <>
            <Avatar className="h-8 w-8 overflow-hidden rounded-full">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback className="rounded-lg bg-neutral-200 text-black dark:bg-neutral-700 dark:text-white">
                    {user.name.slice(0, 2).toUpperCase()}
                </AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{user.name}</span>
                {showEmail && <span className="text-muted-foreground truncate text-xs">{user.email}</span>}
            </div>
        </>
    );
}
