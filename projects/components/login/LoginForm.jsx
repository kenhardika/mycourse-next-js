import React from 'react';

export default function LoginForm({onChangeEvent, handleSubmit}) {
    return (
    <form
        className="flex bg-white rounded-lg flex-col justify-center w-1/4 p-5 gap-1.5"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="inputName">Nama Lengkap: </label>
          <input
            type="text"
            id="inputName"
            placeholder="Masukan Nama Lengkap"
            name='name'
            onChange={onChangeEvent} 
            required
          />
        </div>

        <div className=" flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="inputText">Email: </label>
          <input
            type="text"
            id="inputText"
            placeholder="Masukan Email"
            name="email"
            onChange={onChangeEvent}
            required
          />
        </div>
        <div className=" flex flex-row w-full justify-end px-3 gap-14 ">
          <label htmlFor="inputPass">Kata Sandi: </label>
          <input
            type="password"
            id="inputPass"
            placeholder="Masukan Kata Sandi"
            name='password'
            onChange={onChangeEvent}
            required
          />
        </div>
        <a className='text-xs text-right px-3'> lupa kata sandi? </a>
        <div className=" flex justify-center ">
          <button className=' text-white rounded-lg px-2 w-40 bg-red-300 
              text-sm active:translate-y-[2px] p-1' type="submit">
            Masuk
          </button>
        </div>
      </form>
    );
}
