import { useThemeColor } from "@/hooks/useThemeColor";
import {
    type PressableProps,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    ViewStyle,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ReactNode } from "react";

export type ThemedButtonProps = {
    lightColor?: string;
    darkColor?: string;
    onPress?: PressableProps["onPress"];
    title?: string;
    loading?: boolean;
    loadingTitle?: string;
    variant?: "primary" | "secondary";
    children?: ReactNode;
    style?: ViewStyle;
    className?: string;
};

export function ThemedButton(props: ThemedButtonProps) {
    const {
        lightColor,
        darkColor,
        onPress,
        title,
        loading,
        loadingTitle,
        variant = "primary",
        children,
        style,
    } = props;

    const bg = useThemeColor({ light: lightColor, dark: darkColor }, "tint");
    const textInverted = useThemeColor({ light: lightColor, dark: darkColor }, "textInverted");
    const text = useThemeColor({ light: lightColor, dark: darkColor }, "text");
    const textColor = variant === "secondary" ? text : textInverted;

    return (
        <TouchableOpacity
            disabled={loading}
            activeOpacity={0.5}
            style={[
                styles.button,
                {
                    borderColor: variant === "secondary" ? bg : "transparent",
                    borderWidth: variant === "secondary" ? 1 : 0,
                    backgroundColor: variant === "secondary" ? "transparent" : bg,
                },
                style,
            ]}
            onPress={(e) => {
                props.onPress?.(e);
            }}
        >
            {loading && <ActivityIndicator animating={loading} color={textColor} />}
            {title || loadingTitle ? (
                <ThemedText type="defaultSemiBold" style={{ color: textColor }}>
                    {loading ? loadingTitle : title}
                </ThemedText>
            ) : (
                children
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        gap: 8,
        padding: 12,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
});
