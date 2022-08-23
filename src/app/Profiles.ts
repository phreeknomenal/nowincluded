export interface Profile {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zip: string;
    bio: string;
    avatar: string;
    cover: string;
    social: {
        facebook: string;
        twitter: string;
        instagram: string;
        linkedin: string;
    };
    settings: {
        isActive: boolean;
        isDeleted: boolean;
        isBanned: boolean;
    };
    createdAt: Date;
    completedPercent: number;
}