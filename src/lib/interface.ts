export interface LoginFormProps {
    onSubmit: (data: {email: string; password: string}) => void;
    loading: boolean
}

export interface SignupFormProps {
    onSubmit: (data: {name: string; email: string; password: string; role: string;}) => void;
    loading: boolean;
}