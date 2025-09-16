export interface StaffMember
{
    id: string;
    name: string;
    role?: string;
    avatarURL?: string;
    bio?: string;
    socials?: {label: string, url: string}[];
    bgURL?: string;
}