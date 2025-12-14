// import React from 'react'

const Contact = () => {
  return (
      <>
          <section>
          <h1 className="text-slate-800 font-bold text-3xl text-center m-8">Contact Me</h1>          
            <div className="grid md:grid-cols-2">
                <div></div>
                <div>
                <form action="" className="border w-full border-slate-800 rounded-2xl p-4 min-h-[15em]">
                    <div>
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Name:" />
                    </div>
                    <div>
                    <label htmlFor=""></label>
                    <input type="email" placeholder="Email" />
                    </div>
                    <div>
                        <label htmlFor=""></label>
                        <textarea name="" id="" placeholder="Message..."></textarea>
                    </div>
                </form>
                </div>
            </div>
          </section>
    </>
  );
}

export default Contact
