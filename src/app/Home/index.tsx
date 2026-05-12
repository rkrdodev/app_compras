import { Alert, FlatList, Image, StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View, } from "react-native";

import {styles} from "./styles";
import { Button } from "@/components/Button";
import { Imput } from "@/components/Imput";
import { Filter } from "@/components/Filter";
import { FilterStatus} from "@/types/FilterStatus";
import { Item } from "@/components/Item";
import { useState } from "react";


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
    function receberNome (value: string){
        console.log(value);
        setDescription(value);
    }
    function handleAdd(){
        if(!description.trim()){
            Alert.alert("Atenção", "Informe a descrição do item");
            return;
        }
        console.log("Clicou em adicionar");
        setDescription("");
    }
      
    const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITENS = [
{ id: 1, status: FilterStatus.DONE, description: "Ricardo...." },
{ id: 2, status: FilterStatus.PENDING, description: "Odebrecht...." },
{ id: 3, status: FilterStatus.PENDING, description: "Vitor...." },
{ id: 4, status: FilterStatus.DONE, description: "favela...." },
{ id: 5, status: FilterStatus.PENDING, description: "favela...." },
];
    const [filter, setFilter] = useState(FilterStatus.PENDING);
    function update(value: FilterStatus) {
        setFilter(value);
        console.log(value);
    };
    const [description, setDescription] = useState("");
     
    return(
        <View style={styles.conteiner}> 
        <Image source={require("@/assets/logo.png")} style={styles.image} />
        
        <View style={styles.form}>
            <Imput 
                placeholder="o que vc precisa comprar" 
                value={description}
                onChangeText={receberNome}              
            />

        <Button title="Adicionar" onPress={handleAdd} /> 
            <Text>{description}</Text>
         </View>        

        <View style={styles.content}>
            <View style={styles.header}>
                {FILTER_STATUS.map((status)=>
                    <Filter 
                    key={status} 
                    status={status} 
                     isActive={status===filter}
                     onPress={()=>update(status)}

                    />)}
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