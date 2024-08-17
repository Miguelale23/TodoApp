import { Text, View, Button, StyleSheet } from "react-native";
export default function TodoItem( { keyId, title, deleteTodo } ){

    return (
        <View key={keyId} style={styles.container}>
            <Button title="done" color="#ff3333"onPress={() => {deleteTodo(keyId)}}/>
            <Text>
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        columnGap: 5
    }
})