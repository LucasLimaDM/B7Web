function basicGreeting(){
    const date = new Date;
    const hora = date.getHours();
    const minutos = date.getMinutes();

    return(
        <div className="page w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white">

            <div className="text-9xl">
                {date.getHours()}:{minutos < 10 ? '0' + minutos : minutos }

            </div>

            <div className="text-5xl font-bold">
                {hora >=0 && hora < 12 && 'Bom dia! 😊'}
                {hora >=12 && hora < 18 && 'Boa tarde! 😎'}
                {hora >=18 && hora <= 23 && 'Boa noite! 😴'}
            </div>

        </div>

    );
}

export default basicGreeting;