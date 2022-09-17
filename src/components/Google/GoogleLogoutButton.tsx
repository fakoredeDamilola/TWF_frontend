// import GoogleLogin, { GoogleLogout } from "react-google-login"

function GoogleLogoutButton() {
    const onSuccess = () => {
        console.log("logout success")
    }
    const clientID = import.meta.env.VITE_CLIENT_ID
    return (
        <div>
            {/* <GoogleLogout
            clientId={clientID}
            onLogoutSuccess={onSuccess}
            buttonText="Logout"
            /> */}

        </div>
    )
}

export default GoogleLogoutButton