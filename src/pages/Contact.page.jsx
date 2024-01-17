import React from 'react'
import Navbar from '../components/Navbar'


const Contact = () => {
    return (
        <header className="header">
            <Navbar />
            <div className="container">
                <div className="contact">
                    <div className="text">
                        <input type="email"placeholder='Кому' className="ad" />
                        <input type="email" placeholder='Від кого' className="ad" />
                        <input type="text"placeholder='Тема' className="ad" />
                        <input type="text" placeholder='Сповіщення' className="ad4" />
                    </div>
                    <div className="buttons">
                        <button className="btn">Відправити</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Contact