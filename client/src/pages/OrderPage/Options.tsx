import React from 'react'

export interface OptionsProps {
  name: string;
  updateItemCount: (name:string, value: number) => void
}


const Options = ({ name, updateItemCount }: OptionsProps) => {
    return (
        <form>
            <input
                type="checkbox"
                id={`${name} option`}
                onChange={(event) => {
                    updateItemCount(name, event.target.checked ? 1 : 0);
                }}
            />{" "}
            <label htmlFor={`${name} option`}>{name}</label>
        </form>
    );
};

export default Options