import React, { useEffect, useState } from "react"
import Alert from "@mui/material/Alert"
import Fade from "@mui/material/Fade"
import Stack from "@mui/material/Stack"
import "./AlertModal.scss"

function AlertModal(props) {
    const [isAlertError, setIsAlertError] = useState(false)
    const [isAlertSuccess, setIsAlertSuccess] = useState(false)

    const state = props.state

    useEffect(() => {
        if (state === "err") {
            handleErr()
        } else if (state === "success") {
            handleSuccess()
        }
    }, [])

    const handleSuccess = () => {
        setIsAlertSuccess((prev) => !prev)
        setTimeout(() => {
            setIsAlertSuccess((prev) => !prev)
        }, 1500)
    }

    const handleErr = () => {
        setIsAlertError((prev) => !prev)
        setTimeout(() => {
            setIsAlertError((prev) => !prev)
        }, 1500)
    }

    return (
        <>
            {isAlertSuccess && (
                <Fade
                    in={isAlertSuccess}
                    sx={{
                        width: "100%",
                        top: "8px",
                        padding: "0px 0.75rem",
                        position: "fixed",
                        right: "0",
                        borderRadius: "32px",
                        zIndex: "999",
                    }}
                >
                    <Stack
                        sx={{
                            width: "100%",
                        }}
                        spacing={2}
                    >
                        <Alert
                            severity="success"
                            color="success"
                            style={{
                                border: "1px solid #4caf50",
                            }}
                        >
                            {props.alert}
                        </Alert>
                    </Stack>
                </Fade>
            )}
            {isAlertError && (
                <Fade
                    in={isAlertError}
                    sx={{
                        width: "100%",
                        top: "8px",
                        padding: "0px 0.75rem",
                        position: "fixed",
                        right: "0",
                        borderRadius: "32px",
                        zIndex: "999",
                    }}
                >
                    <Stack
                        sx={{
                            width: "100%",
                        }}
                        spacing={2}
                    >
                        <Alert
                            severity="error"
                            color="error"
                            style={{
                                border: "1px solid #ef5350",
                            }}
                        >
                            {props.alert}
                        </Alert>
                    </Stack>
                </Fade>
            )}
        </>
    )
}

export default AlertModal
