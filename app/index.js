import { View, Text } from "react-native";
import { Button } from "react-native";
import React, { useState } from "react";

const Home = () => {
    const [num1, setNum1] = useState(Math.floor(Math.random() * 100));
    const [num2, setNum2] = useState(Math.floor(Math.random() * 100));
    const [points, setPoints] = useState(0);

    const handleNum1Press = () => {
        const newNum1 = Math.floor(Math.random() * 100);
        setNum1(newNum1);
        if (newNum1 > num2) {
            alert("You are correct!");
            setPoints(points + 5);
        } else {
            alert("You are wrong!");
            setPoints(points - 3);
        }
    };

    const handleNum2Press = () => {
        const newNum2 = Math.floor(Math.random() * 100);
        setNum2(newNum2);
        if (newNum2 > num1) {
            alert("You are correct!");
            setPoints(points + 5);
        } else {
            alert("You are wrong!");
            setPoints(points - 3);
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
                Bigger Number Game
            </Text>
            <View style={{ backgroundColor: "#fff", padding: 10 }}>
                <Text style={{ textAlign: "center", fontSize: 24 }}>
                    {num1} vs {num2}
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                    <Button title={`Choose ${num1}`} onPress={handleNum1Press} />
                    <Button title={`Choose ${num2}`} onPress={handleNum2Press} />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-around", marginTop: 20 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 20 }}>Points: {points}</Text>
                </View>
            </View>
        </View>
    );
};

export default Home;