import { useContext } from "react";
import { UserContext } from "./UserContextType";
export default () => {
    const context = useContext(UserContext);

    if (!context){
        throw new Error('User context must be used within the UserProvider')
    } 
    return (
        <p>{context.name}, {context.message}</p>
    );
}