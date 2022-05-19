import { useAuth } from '../context/authContext';

export function Home() {

    const {user} = useAuth()
    
    // const authContext = useContext(authContext);

    console.log(user);

    return <div>home</div>;

}
