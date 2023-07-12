import React from "react";

const About = () => {
    return(
        <>
            <form action = "/my-handling-form-page" method = "post">
            <ul>
                <li>
                <label for = "name">Name:</label>
                <input type = "text" id = "name" name = "user_name"/>
                </li>
                
                <li>
                <label for = "mail">E-mail:</label>
                <input type = "email" id = "mail" name = 'user_mail'/>
                </li>
                
                <li>
                <label for = "msg">Message:</label>
                <textarea id = "msg" name = "user_message"></textarea>
                </li>
                
                <li class = "button">
                <button onClick={(e) => e.preventDefault()} type = "submit">Send your message</button>
                </li>
            </ul>
            </form>
        </>
    )
}

export default About;