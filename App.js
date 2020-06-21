import React, { useState } from "react";
import { AppLoading } from "expo";
import { StyleSheet } from "react-native";
import { COLORS } from "./style/colors";
import { loadFonts } from "./style/fonts";
import {GLOBAL_STYLES} from "./style/globalStyles";
import {PasswordChange} from "./Screens/ProfileScreens/PasswordChange";



export default function App() {
    const [loaded, setLoaded] = useState(false);
    if (!loaded) {
        return (
            <AppLoading startAsync={loadFonts} onFinish={() => setLoaded(true)}/>
        );
    }

  return (
         <PasswordChange/>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.BACKGROUND,
    paddingHorizontal: GLOBAL_STYLES.PADDING,
    justifyContent: "center",
  },

});
{/*<View style={styles.container}>*/}
{/*    <ProfileScreen/>*/}
{/*</View>*/}