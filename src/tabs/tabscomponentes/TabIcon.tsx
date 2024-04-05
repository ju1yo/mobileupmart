import React from "react";
import { Image } from "react-native";
import {useIsFocused} from '@react-navigation/native';

interface TabIconProps {
    source: any;
    focused: boolean;
}

function TabIcon({source, focused}: TabIconProps) {
    const isFocused = useIsFocused();

    return (
        <Image
            source={source}
            style={{
            width: 30,
            height: 30,
            tintColor: focused? "orange" : "White",
            }}
        />
    )
}

export default TabIcon