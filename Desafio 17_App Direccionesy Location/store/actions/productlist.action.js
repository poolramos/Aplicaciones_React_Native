import * as FileSystem from 'expo-file-system';

export const SELECT_ITEM = 'SELECT_ITEM'
export const ADD_ITEM = 'ADD_ITEM'

export const addItem = (item,image) =>{
    return /* async */ dispatch =>{

        /* console.log(item)
        console.log(image) */

        /* const fileName = image.split('/').pop()
        const Path = FileSystem.documentDirectory + fileName; */

        try {
            /* await FileSystem.moveAsync({
                from: image,
                to: Path,
            }); */

            dispatch({
                type: ADD_ITEM,
                payload: {
                    item,
                    image: image,
                },
            });
        } catch (err) {
            console.log(err.mesage);
            throw err;
        }

    }
}


export const selectItem = (prdId) =>({
    type: SELECT_ITEM,
    payload: prdId
})
