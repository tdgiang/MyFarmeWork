import { CommonActions } from '@react-navigation/native';



const navigate = (navigation, routeName) => {
    navigation.navigate({
        routeName,
        params,
    })
}


export { navigate }