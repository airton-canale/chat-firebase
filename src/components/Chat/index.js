import React from "react";
import { Circle } from "better-react-spinkit";
import * as C from "./styles";
import Login from "../Login";

const Loading = () => {
    return (
        <C.Container>
        <Circle />
        </C.Container>
    )
}

export default Login;