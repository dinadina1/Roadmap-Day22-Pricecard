function Pricecard({ data }) {
    return (
        <div className="col-md-4">
            <div className='card'>
                <div className="card-body">
                    <p className='text-secondary text-center fw-bold mb-0'>{data.status}</p>
                    <h1 className='text-center pb-3'>{data.price}</h1>
                    <ul className='list-unstyled'>
                        {data.description.map((data,key) => {
                            return data.enabled ? (
                                    <li key={key}><span className='me-2'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                    </svg></span>{data.option}</li>

                            ) : (
                                <li key={key} style={{color:"#bebfc2"}}><span className='me-2 fw-bold'><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                              </svg></span>{data.option}</li>
                            )
                        })}
                    </ul>
                    {data.button_enabled ? (
                        <button className='btn btn-primary w-100 rounded-pill p-2 mt-2'>{data.button}</button>
                    ):(
                        <button className='btn btn-primary opacity-50 w-100 rounded-pill p-2 mt-2'>{data.button}</button>
                    )}
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Pricecard