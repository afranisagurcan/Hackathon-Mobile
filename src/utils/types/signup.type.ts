import {TextInputProps, ViewStyle} from "react-native";

declare namespace ISignUp {
    interface ISignUpKey {
        email: string;
        password: string;
        name: string;
        surname: string;
    }
    interface InputGroupProps extends TextInputProps {
        label?: string;
        contentContainerStyle?: ViewStyle;
    }

}

export default ISignUp;
