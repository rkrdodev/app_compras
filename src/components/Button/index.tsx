import { Text, TouchableOpacity } from "react-native";
import { TouchableOpacityProps } from "react-native";
import { styles } from "./styles";

type Props= TouchableOpacityProps &{
    title?: string;
};
export function Button({title, ...rest}: Props){
    return(
        <TouchableOpacity{...rest} style={styles.conteiner} 
        activeOpacity={0.8}> 

            <Text style={styles.text}> {title}</Text>
        </TouchableOpacity>
    )
}