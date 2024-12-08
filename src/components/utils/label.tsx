import React from "react";
import '../../assets/css/custom.css';

interface MyComponentProps {
    id: number;
    text: string|undefined;
}

const Label: React.FC<MyComponentProps> = ({ id, text }) => {
    switch (id) {
        case 1:
            return <span className="primary-label">{text}</span>
        case 2:
            return <span className="primary-label">{text}</span>
        case 3:
            return <span className="yellow-label">{text}</span>
        case 4:
            return <span className="orange-label">{text}</span>
        case 5:
            return <span className="red-label">{text}</span>
    }
};

export default Label;