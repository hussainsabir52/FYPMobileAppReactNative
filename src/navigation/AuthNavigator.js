import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from '../views/Login'
import Signup from '../views/Signup';
import ForgotPassword from '../views/ForgotPassword'
import EmailVerification from "../views/EmailVerification";
import Home from "../views/Home";
import EmailVerificationSuccess from "../views/EmailVerificationSuccess";
import Startup from "../views/Startup";
import DropoffLocation from "../views/DropoffLocation/index.";
import PickupLocation from "../views/PickupLocation";
import RequestVehicle from "../views/RequestVehicle";

const AuthStack = createNativeStackNavigator();
const AuthNavigator = () => {
    return (
        <AuthStack.Navigator initialRouteName="Login">
            <AuthStack.Screen name="Login" component={Login} options={{ header: () => null }} />
            <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} options={{ header: () => null }} />
            <AuthStack.Screen name="SignUp" component={Signup} options={{ header: () => null }} />
            <AuthStack.Screen name="EmailVerification" component={EmailVerification} options={{ header: () => null }} />
            <AuthStack.Screen name="EmailVerificationSuccess" component={EmailVerificationSuccess} options={{ header: () => null }} />
            <AuthStack.Screen name="Home" component={Home} options={{ header: () => null }} />
            <AuthStack.Screen name="Dropoff" component={DropoffLocation} options={{ header: () => null }} />
            <AuthStack.Screen name="Pickup" component={PickupLocation} options={{ header: () => null }} />
            <AuthStack.Screen name="RequestVehicle" component={RequestVehicle} options={{ header: () => null }} />
        </AuthStack.Navigator>
    )
}

export default AuthNavigator;
