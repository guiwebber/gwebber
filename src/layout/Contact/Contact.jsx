import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.init('dnxHT1l7StqvPDwZm'); // Initialize EmailJS with your user ID

    const serviceID = 'default_service';
    const templateID = 'template_y5ktjt5';

    const templateParams = {
      name: name,
      email: email,
      message: message
    };

    emailjs.send(serviceID, templateID, templateParams)
      .then((response) => {
        console.log("Email enviado com sucesso", response.status, response.text);
        alert("Sua mensagem foi enviada, obrigado!");
        // Limpar os campos do formulário após o envio bem-sucedido
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Oops! Algo deu errado com sua mensagem, por favor atualize e mandar novamente");
      });
  };

  return (
    <form className="form" id="form" onSubmit={sendEmail}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu Nome"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Seu Email"
        required
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Sua Mensagem"
        required
      />
      <button type="submit" className="btn btn-primary" id="btn-submit">Enviar</button>
    </form>
  );
}

export default Contact;
