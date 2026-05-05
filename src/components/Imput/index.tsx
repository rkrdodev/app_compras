import { TextInput, TextInputIOSProps, TextInputProps } from "react-native";
import { styles } from "./styles";

export function Imput({...rest}:TextInputProps){
    return(
        <TextInput style={styles.conteinerimput}{...rest} placeholderTextColor="#999"/>
    );
}