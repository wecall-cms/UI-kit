import React, { useState } from 'react';
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import './Accordion.scss'


const items = [
    {
        title: 'Accordion Item #1',
        content: "This is the first item's accordion body.It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element.",
    },
    {
        title: 'Accordion Item #2',
        content: 'Content for section 2 goes here.',
    },
    {
        title: 'Accordion Item #3',
        content: 'Co2tent for section 3 goes here.',
    },
];

const Accordion = () => {
    return (
        <>

            <h1>Accordion Example</h1>

            <div className='container'>

                <Accordions items={items} />
            </div>
        </>

    )
}

export default Accordion






const Accordions = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const onItemClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const renderItems = items.map((item, index) => {
        const isActive = index === activeIndex;

        return (
            <div className={`accordion-item ${isActive ? 'active' : ''}`} key={index}>
                <div className="accordion-title" onClick={() => onItemClick(index)}>
                    <p>{item.title}</p>
                    {isActive ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                </div>
                <div className={`accordion-content ${isActive ? 'active' : ''}`}>
                    <p>
                        {item.content}
                    </p>

                </div>
            </div>
        );
    });

    return <div className="accordion">{renderItems}</div>;
};



