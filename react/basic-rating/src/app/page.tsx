function basicRating(){
    let rating: number = Number(prompt('Digite sua nota'));
    if(rating > 5) rating = 5;
    if(rating < 0) rating = 0;
    rating = Math.round(rating);
    


    return(
        <div className="w-screen h-screen bg-slate-900">

            <div className="emoji flex justify-center text-3xl p-3 text-neutral-50">
                Nota: {rating} {'⭐️'.repeat(rating)}{'☁️'.repeat(5 - rating)}</div>

        </div>
    ); 
}

export default basicRating;