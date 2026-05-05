import {FilterStatus} from "@/types/FilterStatus";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { styles } from "./styles";
import { StatusIcon } from "../StatusIcon";
type Props = TouchableOpacityProps & {
    status: FilterStatus;
    isActive: boolean;
};
export function Filter({status, isActive, ...rest}: Props) {
    return(
        <TouchableOpacity {...rest} style={[styles.conteiner,{opacity: isActive ? 1 : 0.5}]}>
            <StatusIcon status={status} />
            <Text style={styles.title}>{status === FilterStatus.DONE ? "Comprado": "Pendente"}</Text>
        </TouchableOpacity>

    )
}