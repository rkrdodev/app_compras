import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#d0d2d8",
        paddingTop: 62,
    
    },
    
    logo:{
        width: 134,
        height: 34,

    },
    title:{
        fontSize: 32,
        fontWeight: 900,
    },
    text: {
        fontSize: 32,
        fontWeight: 700,
        color: "blue",
    },
    content:{
        flex: 1,
        backgroundColor: "white",
        width: "100%",
        marginTop: 32,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
        padding: 24,
    },
    image: {
        width: 134,
        height: 34,
},
form:{
    width: "100%",
    paddingHorizontal: 24,
},
    header:{
        width: "100%",
        flexDirection: "row",
        gap: 12,
        borderBottomColor: "#e4e6ec",
        borderBottomWidth: 1,
        paddingBottom: 12,
    },
    cleanButton:{
        marginLeft: "auto",
    },
    cleanText:{
        color: "#e4e6ec",
        fontWeight: 700,
    },
    separator:{
        width: "100%",
        height: 1,
        backgroundColor: "#EEF1F5",
        marginVertical: 16,

    },
    listContent:{
        paddingTop: 24,
        paddingBottom: 62,
    },
    empty:{
        fontSize: 14,
        color: "#808080",
        textAlign: "center",
    },
});