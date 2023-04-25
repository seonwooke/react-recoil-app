import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../App';

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    const handleChnge = (event) => {
        setText(event.target.value);
    }

    return (
        <div>
            <input value={text} onChange={handleChnge} />
            <br />
            Echo: {text}
        </div>
    )
}

export default TextInput;