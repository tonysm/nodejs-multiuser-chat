var socket = io.connect('http://localhost:8888'),
    username = prompt('Qual o seu login?') || 'Anonymous';

socket.emit('user_conected', username);
