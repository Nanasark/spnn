import type { PropsWithChildren, ReactNode } from "react";
import { StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { ThemedView } from "@/components/ThemedView";

const HEADER_HEIGHT = 100; // Adjust as needed

type Props = PropsWithChildren<{
  className?: string;
  headerClassName?: string;
  header?: ReactNode;
}>;

export function PlainParallaxScrollView({ className, headerClassName, children, header }: Props) {
  return (
    <ThemedView className={className} style={styles.container}>
      <ThemedView className={headerClassName} style={styles.header}>
        {header}
      </ThemedView>
      <Animated.ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContainer}
      >
        <ThemedView>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: HEADER_HEIGHT,
    zIndex: 1, // Ensures header stays above content
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  scrollView: {
    flex: 1,
    marginTop: HEADER_HEIGHT,
  },
  scrollContainer: {
    flexGrow: 1,
  },
});
