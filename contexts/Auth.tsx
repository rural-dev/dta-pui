import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useState, useContext, useEffect} from 'react';
import {api} from '../constant/Api';

type LoginData = {
    username: string;
    password: string;
};

type AuthContextData = {
    authData?: AuthData;
    loading: boolean;
    starting: boolean;
    onboarding: boolean;
    signIn({username, password}: LoginData): Promise<void>;
    signOut(): void;
    completeOnboarding(): void;
};

type AuthData = {
    access_token?: string;
    user: UserData;
};

type ProfileData = {
    bio: string;
    birth_date: string;
    id: number;
    image: string;
};

type UserData = {
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    pk: number;
    profile: ProfileData;
};
type LoginResponse = {
    access_token?: string;
    user: UserData;
};

type Props = {
    children: React.ReactNode;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) => {
    const [authData, setAuthData] = useState<AuthData>();

    //The loading part will be explained in the persist step session
    const [loading, setLoading] = useState(false);
    const [onboarding, setOnboarding] = useState(true);
    const [starting, setStarting] = useState(true);

    useEffect(() => {
        //Every time the App is opened, this provider is rendered
        //and call de loadStorageData function.
        loadStorageData();
    }, []);

    async function loadStorageData(): Promise<void> {
        try {
            //Try get the data from Async Storage
            const authDataSerialized = await AsyncStorage.getItem('@AuthData');
            const onboardingStorage = await AsyncStorage.getItem('@onboarding');

            if (authDataSerialized) {
                //If there are data, it's converted to an Object and the state is updated.
                const _authData: AuthData = JSON.parse(authDataSerialized);
                setAuthData(_authData);
            }
            if (onboardingStorage) {
                //If there are data, it's converted to an Object and the state is updated.
                const onboardStatus: boolean = JSON.parse(onboardingStorage);
                setOnboarding(onboardStatus);
            }
        } catch (error) {
        } finally {
            //loading finished
            setTimeout(() => {
                console.log('Delayed for 1 second.');
                setStarting(false);
            }, 1000);
        }
    }

    const signIn = async (loginInput: LoginData) => {
        try {
            setLoading(true);

            //call the service passing credential (username and password).
            const _response = await fetch(api.LoginUrl, {
                method: 'POST',
                headers: {
                    // these could be different for your API call
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginInput),
            });

            const _authData: LoginResponse = await _response.json();
            console.log(_authData);
            if (_authData.access_token) {
                //Set the data in the context, so the App can be notified
                //and send the user to the AuthStack
                setAuthData(_authData);
                AsyncStorage.setItem('@AuthData', JSON.stringify(_authData));
            }
        } catch (error) {
        } finally {
            //loading finished
            setLoading(false);
        }
    };

    const signOut = async () => {
        try {
            setLoading(true);
            //Remove data from context, so the App can be notified
            //and send the user to the AuthStack
            await AsyncStorage.removeItem('@AuthData').then(() => {
                setAuthData(undefined);
            });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    const completeOnboarding = () => {
        console.log('Passing onboarding');
        setOnboarding(false);
        AsyncStorage.setItem('@onboarding', JSON.stringify(false));
    };

    return (
        //This component will be used to encapsulate the whole App,
        //so all components will have access to the Context
        <AuthContext.Provider
            value={{
                authData,
                loading,
                onboarding,
                starting,
                signIn,
                signOut,
                completeOnboarding,
            }}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}
