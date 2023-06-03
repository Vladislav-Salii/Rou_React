import React from "react";

export const Form = () => <div className="contact__form_block">
    <div className="contact__form_title">Write us a message</div>

    <form className="contact__form" action="" method="post">
        <input className="contact__form_name" placeholder="Your name" type="text" name="" id=""
               required/>
        <input className="contact__form_email" required placeholder="Your email" type="email"
               name="" id=""/>
        <input className="contact__form_text" placeholder="Subject" type="text" name=""
               id=""/>
        <textarea className="contact__form_area" type="textarea" required
                  placeholder="Start writing message here" name="name" id=""></textarea>
        <button className="contact__form_submit" type="submit">Get Started</button>
    </form>
</div>