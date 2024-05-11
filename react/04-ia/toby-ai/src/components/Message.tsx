type Props = {
  author: string,
  message:string,
}

export function Message({author, message}: Props){
  let messageStyle = ' bg-white '

  if(author === 'model') {
    messageStyle = ' bg-blue-300 '
  }

  return(
    <div
    className={messageStyle + ' w-full max-w-2xl p-4 rounded-md '}
    >
      {message}
    </div>
  );
}