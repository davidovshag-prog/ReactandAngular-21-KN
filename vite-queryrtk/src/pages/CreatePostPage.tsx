import MyHeader from "../common/MyHeader";
import MyButton from "../common/MyButton";

const CreatePostPage = () => {
    //post запит - це спеціальний запит на сервер, який призначений для
    //зміни даних - у більшості випадків для створення інформації


    return (
        <>
            <MyHeader text={"Створити пост"} />
            <MyButton text={"Створити"}/>
        </>
    )
}

export default CreatePostPage;