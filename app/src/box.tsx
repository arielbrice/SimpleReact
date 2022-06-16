import React from "react";

interface Props {
    border: string,
    size: string,
    color: string,
    onClick: () => void
    children: React.ReactNode;
}

const Box: React.FC<Props> = ({
    border,
    size,
    color,
    onClick,
    children,
}) => {
    return (
        <button
            onClick={onClick}
            style={{
                backgroundColor: color,
                border,
                height: size,
                width: size


            }}
        >
            {children}
        </button>
    );
}

export default Box