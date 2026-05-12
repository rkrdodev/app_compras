import {FilterStatus} from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
type Props = TouchableOpacityProps & {
    status: FilterStatus;
    isActive: boolean;
    onPress: () => void;
};
export function Filter({status, isActive, onPress,  ...rest}: Props) {
    return(
        <TouchableOpacity 
        style={[styles.conteiner,{opacity: isActive ? 1 : 0.5}]}
        onPress={onPress} 
        {...rest}
        >
            <StatusIcon status={status} />
            <Text style={styles.title}>
                {status === FilterStatus.PENDING ? "Pendente" : "Comprado"}
            </Text>
        </TouchableOpacity>

    )
}