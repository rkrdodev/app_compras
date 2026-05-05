import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View, } from "react-native";

import {styles} from "./styles";
import { Button } from "@/components/Button";
import { Imput } from "@/components/Imput";
import { Filter } from "@/components/Filter";
import { FilterStatus} from "@/types/FilterStatus";
import { Item } from "@/components/Item";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITENS = [
{ id: 1, status: FilterStatus.DONE, description: "Ricardo...." },
{ id: 2, status: FilterStatus.PENDING, description: "Odebrecht...." },
{ id: 3, status: FilterStatus.PENDING, description: "Vitor...." },
{ id: 4, status: FilterStatus.DONE, description: "favela...." },
{ id: 5, status: FilterStatus.PENDING, description: "favela...." },
];
export default function Home() {
    function handleStatus(){
        console.log("Clicou em status");
    }
    function handleRemove(){
        console.log("Clicou em remover");
    }
    function handleClick(){
        console.log("Clicou em adicionar");
    }

    return(
        <View style={styles.conteiner}> 
        <Image source={require("@/assets/logo.png")} style={styles.image} />
        
        <View style={styles.form}>
            <Imput placeholder="o que vc precisa comprar"/>
        <Button title="Adicionar" onPress={handleClick} />
        </View>
        
        <View style={styles.content}>
            <View style={styles.header}>
                {FILTER_STATUS.map((status)=>
                    <Filter key={status} status={status} isActive/>)}
            <TouchableOpacity style={styles.cleanButton}>
                <Text style={styles.cleanText}> Limpar</Text>                
            </TouchableOpacity>
            </View>
            <View>
                <FlatList
                        data={ITENS}
                        keyExtractor={(Item) => Item.id.toString()}
                        renderItem={({item}) => (
                    <Item 
                        data={item}
                        onRemove={handleRemove}
                        onStatus={handleStatus}
                    />
                    )}
                        showsHorizontalScrollIndicator={false}
                        ItemSeparatorComponent={() => <View style={styles.separator} />}
                        contentContainerStyle={styles.listContent}
                        ListEmptyComponent={() =>(
                    <Text style={styles.empty}>
                            Nenhum item aqui
                        </Text>)}
                />
            </View>
        </View>

        </View>
    )
}