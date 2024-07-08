import { useActiveAccount } from "thirdweb/react"
import { Stack } from "expo-router"
import TabLayout from "./(tabs)/_layout"
import SpaceLogin from "@/components/ninja/Login"
import { ThemedView } from "@/components/ThemedView"
export function MainNav(){
    const account = useActiveAccount()


 return(
    <>
        {account? (<Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>):<SpaceLogin/>}
    </>
    
 )
}