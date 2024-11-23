import axios from 'axios';
import React, { useState, useTransition } from 'react';
//hdnles support for using  async transition to handle pednig states, errors
const Transition = () => {
    const [data, setData] = useState([]);
    const [input, setInput] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleInputChange = (e) => {
        setInput(e.target.value);

        startTransition(async () => {
            const response = await axios.get('https://randomuser.me/api/');
            console.log(response);
            const l = [];
            for (let i = 0; i < 20000; i++) {
                l.push(e.target.value);
            }
            setData(l);
        });
    };

    return (
        <div className="flex justify-center items-center  bg-gray-100 p-1">
            <div className="w-full max-w-xl bg-white p-1 rounded-lg shadow-lg">
                <input
                    className="w-full p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                    type="text"
                    value={input}
                    onChange={(e) => handleInputChange(e)}
                    placeholder="Type something..."
                />

                <div className="mt-4">
                    {isPending ? (
                        <p className="text-center text-gray-500">Loading...</p>
                    ) : (
                        <div className="flex flex-wrap justify-center gap-4 mt-4">
                            {data.map((item, index) => (
                                <div
                                    key={index}
                                    className="p-1 bg-blue-500 text-white rounded-lg shadow-md"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Transition;
