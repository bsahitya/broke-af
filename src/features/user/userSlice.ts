import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
    id: string;
    aud: string;
    role: string;
    email: string;
    emailConfirmedAt: string | null; // Nullable ISO date
    phone: string; // Can be an empty string
    confirmedAt: string | null; // Nullable ISO date
    lastSignInAt: string; // ISO date
    appMetadata: {
        provider: string;
        providers: string[];
    };
    userMetadata: {
        email: string;
        emailVerified: boolean;
        phoneVerified: boolean;
        sub: string;
    };
    identities: Identity[];
    createdAt: string; // ISO date
    updatedAt: string; // ISO date
    isAnonymous: boolean;
}

export interface Identity {
    identityId: string;
    id: string;
    userId: string;
    identityData: {
        email: string;
        emailVerified: boolean;
        phoneVerified: boolean;
        sub: string;
    };
    provider: string;
    lastSignInAt: string; // ISO date
    createdAt: string; // ISO date
    updatedAt: string; // ISO date
    email: string;
}

export const initialState: User = {
    id: '',
    aud: '',
    role: '',
    email: '',
    emailConfirmedAt: null,
    phone: '',
    confirmedAt: null,
    lastSignInAt: '',
    appMetadata: {
        provider: '',
        providers: [],
    },
    userMetadata: {
        email: '',
        emailVerified: false,
        phoneVerified: false,
        sub: '',
    },
    identities: [],
    createdAt: '',
    updatedAt: '',
    isAnonymous: true, // Default to anonymous before login
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess: (state, action: PayloadAction<User>) => {
            Object.assign(state, action.payload)
        },
        logout: () => {
            Object.assign(initialState)
        }
    }
});

export const { loginSuccess, logout } = userSlice.actions;

export default userSlice.reducer;
