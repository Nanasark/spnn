import { useThemeColor } from "@/hooks/useThemeColor";
import {
    type PressableProps,
    StyleSheet,
    TouchableOpacity,
    ActivityIndicator,
    ViewStyle,
} from "react-native";
import { ThemedText } from "./ThemedText";
import { ReactNode } from "react"; // Import ReactNode to use for the children type

export type ThemedButtonProps = {
    lightColor?: string;
    darkColor?: string;
    onPress?: PressableProps["onPress"];
    title?: string; // Make title optional since children might be used instead
    loading?: boolean;
    loadingTitle?: string;
    variant?: "primary" | "secondary";
    children?: ReactNode; // Add children property
    style?: ViewStyle; // Add style property
    className?:string
};

export function ThemedButton(props: ThemedButtonProps) {
    const variant = props.variant ?? "primary";
    const bg = useThemeColor(
        { light: props.lightColor, dark: props.darkColor },
        "tint",
    );
    const textInverted = useThemeColor(
        { light: props.lightColor, dark: props.darkColor },
        "textInverted",
    );
    const text = useThemeColor(
        { light: props.lightColor, dark: props.darkColor },
        "text",
    );
    const textColor = variant === "secondary" ? text : textInverted;
    return (
        <TouchableOpacity
            disabled={props.loading}
            activeOpacity={0.5}
            style={[
                styles.button,
                {
                    borderColor: variant === "secondary" ? bg : "transparent",
                    borderWidth: variant === "secondary" ? 1 : 0,
                    backgroundColor: variant === "secondary" ? "transparent" : bg,
                },
                props.style, // Apply the custom style prop here
            ]}
            onPress={(e) => {
                props.onPress?.(e);
            }}
        >
            {props.loading && (
                <ActivityIndicator animating={props.loading} color={textColor} />
            )}
            <ThemedText className="" type="defaultSemiBold" style={{ color: textColor }}>
                {props.loading ? props.loadingTitle : props.title}
            </ThemedText>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        flexDirection: "row",
        gap: 8,
        padding: 12,
        borderRadius: 6,
        justifyContent: "center",
        alignItems: "center",
    },
});
