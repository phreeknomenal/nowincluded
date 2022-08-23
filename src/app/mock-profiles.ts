import { Profile } from "./Profiles";

export const PROFILES: Profile[] = [
    {
        id: 1,
        firstName: 'Marques',
        lastName: 'Bradley',
        email: 'test@test.com',
        phone: '1234567890',
        address: '123 Test Street',
        city: 'Testville',
        state: 'Testland',
        zip: '54321',
        bio: 'I am a test bio.',
        avatar: 'assets/images/avatars/test.jpg',
        cover: 'assets/images/covers/test.jpg',
        social: {
            facebook: 'test',
            twitter: 'test',
            instagram: 'test',
            linkedin: 'test'
        },
        settings: {
            isActive: true,
            isDeleted: false,
            isBanned: false
        },
        createdAt: new Date(),
        completedPercent: 33
    }
];