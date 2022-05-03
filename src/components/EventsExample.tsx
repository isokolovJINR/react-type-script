import React, {FC, useRef, useState} from 'react';

const EventsExample: FC = () => {
    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null)
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(inputRef.current?.value);

    }

    const dragHanadler = (e: React.DragEvent<HTMLDivElement>) => {
        console.log('DRAG');
    }
    const dragOverHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true);
    }
    const dragLeaveHadler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
    }

    const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false);
        console.log('DROP');
    }

    return (
        <div>
            <input value={value}
                   onChange={changeHandler}
                   type={"text"}/>
            <input placeholder={"Don't control"}
                   ref={inputRef}
                   type={"text"}
            />
            <button
                onClick={clickHandler}
            >sssss</button>
            <div onDrag={dragHanadler} draggable style={{width: 200, height: 200, background: 'red'}}></div>
            <div
                onDrop={dropHandler}
                onDragLeave={dragLeaveHadler}
                onDragOver={dragOverHandler}
                style={{width: 200,
                    height: 200,
                    background: isDrag ? 'blue' : 'red', marginTop: 15}}>
            </div>
        </div>
    );
};

export default EventsExample;