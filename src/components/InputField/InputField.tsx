import React, { useRef } from 'react';
import "./InputField.css";

interface Props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {

    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className="input" onSubmit={(e) => {
            handleAdd(e);
            inputRef.current?.blur();
            }}>
            <input
                ref={inputRef}
                className="input__box"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                type="input"
                placeholder="What to do?" />
            <button className="input_submit" type="submit">Add</button>
        </form>
    )
}

export default InputField