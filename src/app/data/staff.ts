import { StaffMember } from "../models/staff-member";

export const STAFF:StaffMember[] =
[
    {
        id: "nizrixx-rose",
        name: "Nizrixx Rose",
        role: "Host",
        avatarURL: 'assets/avatars/nizrixx.png',
        bio: 'Da Beeg Baus',
        socials: [{label:'Twitter', url: 'https://x.com/nizrixx'}]
    },
    { id: 'elia', name: 'Elia', role: 'DJ', bio: 'Curates weekly setlists with deep house + city pop vibes.' },
    { id: 'nagao', name: 'Nagao', role: 'Mixologist', bio: 'Signature mocktails & seasonal specials.' },
    { id: 'para', name: 'Para', role: 'Security', bio: 'Chill. Observant. Keeps it safe and friendly.' },
    { id: 'haru', name: 'Haru', role: 'Photographer', bio: 'Candid shots + monthly staff mag editor.' },
    { id: 'aki', name: 'Aki', role: 'Floor', bio: 'First to greet, last to leave. Knows every regular.' },
    { id: 'elarea', name: 'Elarea', role: 'PR', bio: 'Events, collabs, submissions. Your point of contact.' },
    { id: 'sasame', name: 'Sasame', role: 'Designer', bio: 'Brand, posters, and merch concepts.' }

]