import { useEffect, useRef } from "react";
import { resetNavigationStack } from "../../navigation/service";
import { Animated } from "react-native";

export default () => {
    const scale = useRef(new Animated.Value(0.8)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // fade in + slight pop
        Animated.parallel([
            Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
            Animated.sequence([
                Animated.timing(scale, { toValue: 1.05, duration: 700, useNativeDriver: true }),
                Animated.spring(scale, { toValue: 1, friction: 6, useNativeDriver: true }),
            ]),
        ]).start(() => {
            // hold for a moment, then finish
            setTimeout(() => resetNavigationStack("Tabs"), 500);
        });
    }, [opacity, scale]);

    return {
        scale,
        opacity
    }
}