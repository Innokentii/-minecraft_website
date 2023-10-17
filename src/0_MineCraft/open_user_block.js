import React from 'react'
import Frame_7_blue_2 from './Frame_7_blue_2.png'
import Frame_7_blue from './Frame_7_blue.png'


export default function Open_user_block() {
    // Функции переключения кнопок "Профиль" и "Безопасность"

    function profile_open() {
        let profile_id = document.getElementById('profile_id');
        let safety_id = document.getElementById('safety_id');
        let block_open_2_id = document.getElementById('block_open_2_id');
        let block_open_3_id = document.getElementById('block_open_3_id');
        profile_id.style.color = '#000';
        profile_id.style.background = '#FFF';
        safety_id.style.color = '#FFF';
        safety_id.style.background = '#3A6BF2';
        block_open_2_id.style.display = 'none';
        block_open_3_id.style.display = 'flex';
    }


    function safety_open() {
        let profile_id = document.getElementById('profile_id');
        let safety_id = document.getElementById('safety_id');
        let block_open_2_id = document.getElementById('block_open_2_id');
        let block_open_3_id = document.getElementById('block_open_3_id');
        safety_id.style.color = '#000';
        safety_id.style.background = '#FFF';
        profile_id.style.color = '#FFF';
        profile_id.style.background = '#3A6BF2';
        block_open_2_id.style.display = 'flex';
        block_open_3_id.style.display = 'none';
    }


    return(
        <div>
            <div className="flex flex-row gap-5 mb-10; justify-start mb-[2.5rem]">
                <div id="profile_id" onClick={safety_open} style={{background: '#3A6BF2'}} className='rounded-[0.75rem] text-white cursor-pointer flex flex-col justify-center text-center w-[22.8125rem] h-[5.4375rem] shrink-0 text-2xl not-italic font-medium leading-[normal] rounded-xl; font-family: "Ubuntu", sans-serif'><div>Профиль</div></div>
                <div id="safety_id" onClick={profile_open} style={{background: '#FFF'}} className='rounded-[0.75rem] text-black cursor-pointer flex flex-col justify-center text-center w-[22.8125rem] h-[5.4375rem] shrink-0 text-2xl not-italic font-medium leading-[normal] rounded-xl; font-family: "Ubuntu", sans-serif'><div>Безопасность</div></div>
            </div>
            <div className="flex flex-row gap-5" id="block_open_2_id">
                <div className="w-[30.8125rem] h-[17.875rem] shrink-0 rounded-xl" style={{background: '#fff'}}>
                    <div className='text-black text-2xl not-italic font-medium leading-[normal] ml-[1.69rem] mt-[1.44rem] mb-[0.62rem]'>Ваши данные</div>
                    <div className='text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem]'>Информация об аккаунте</div>
                    <hr color="#E1E1E1" />
                    <div className='ml-[1.69rem]'>
                        <table>
                            <thead className="table_1">
                                <tr>
                                    <td className='w-[6.125rem] h-[2.8775rem] text-black text-xl not-italic font-medium leading-[normal]'>Ник</td>
                                    <td className='text-black text-xl not-italic font-normal leading-[normal]'>username</td>
                                </tr>
                                <tr>
                                    <td className='w-[6.125rem] h-[2.8775rem] text-black text-xl not-italic font-medium leading-[normal]'>Email</td>
                                    <td className='text-black text-xl not-italic font-normal leading-[normal]'>username@email.com</td>
                                </tr>
                                <tr>
                                    <td className='w-[6.125rem] h-[2.8775rem] text-black text-xl not-italic font-medium leading-[normal]'>Id</td>
                                    <td className='text-black text-xl not-italic font-normal leading-[normal]'>123456789</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
                <div className="w-[30.875rem] h-[38.75rem] shrink-0 rounded-xl" style={{background: '#fff'}}>
                    <div className='text-black text-2xl not-italic font-medium leading-[normal] ml-[1.69rem] mt-[1.44rem] mb-[0.62rem]'>История покупок</div>
                    <div className='text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem]'>Информация о совершенных покупках</div>
                    <hr color="#E1E1E1" />
                </div>
                <div className="w-[30.875rem] h-[38.75rem] shrink-0 rounded-xl" style={{background: '#fff'}}>
                    <div className='text-black text-2xl not-italic font-medium leading-[normal] ml-[1.69rem] mt-[1.44rem] mb-[0.62rem]'>Подарки</div>
                    <div className='text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem]'>Информация о подарках</div>
                    <hr color="#E1E1E1" />
                </div>
            </div>
            <div className="flex flex-row justify-between hidden" id="block_open_3_id">
                <div className="w-[38.875rem] h-[39.5rem] shrink-0 pt-[1.44rem] rounded-xl" style={{background: '#fff'}}>
                    <div className='text-black text-2xl not-italic font-medium leading-[normal] ml-[1.69rem] mb-[0.62rem]'>Пароль</div>
                    <div className='text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem] pr-[2rem]'>Рекомендуем периодически обновлять пароль, чтобы повысить безопасность аккаунта</div>
                    <hr color="#E1E1E1" />
                    <div className="ml-[1.69rem] my-[1.56rem]">
                        <div className='text-black text-xl not-italic font-medium leading-[normal] mb-[1.12rem]'>Текущий пароль</div>
                        <input type="text" className='w-[35.5rem] h-16 text-xl mb-[1.56rem] pl-[1.56rem] rounded-lg border-2 border-solid border-[#B8C9F6]' style={{background: '#fff'}}/>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] mb-[1.12rem]'>Новый пароль</div>
                        <input type="text"  className='w-[35.5rem] h-16 text-xl mb-[1.56rem] pl-[1.56rem] rounded-lg border-2 border-solid border-[#B8C9F6]' style={{background: '#fff'}}/>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] mb-[1.12rem]'>Повтор нового пароля</div>
                        <input type="text"  className='w-[35.5rem] h-16 text-xl mb-[1.56rem] pl-[1.56rem] rounded-lg border-2 border-solid border-[#B8C9F6]' style={{background: '#fff'}}/>
                    </div>
                    <div className="w-[17.375rem] h-[3.5rem] active:w-[16.875rem] active:h-[3rem] active:ml-[2.19rem] active:mb-[0.25rem] active:mt-[0.25rem] hover:cursor-pointer inline-flex justify-center items-center gap-2.5 ml-[1.69rem] px-[5.0625rem] rounded-lg" style={{background: `url(${Frame_7_blue})`, backgroundSize: 'cover'}}></div>
                </div>
                <div>
                    <div className="w-[54.875rem] h-[17.125rem] shrink-0 rounded-xl pt-[1.44rem]" style={{background: '#fff'}}>
                        <div className='text-black text-2xl not-italic font-medium leading-[normal] ml-[1.69rem] mb-[0.62rem]'>Пароль</div>
                        <div className='text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem]'>Изменить Email можно через поддержку</div>
                        <hr color="#E1E1E1" />
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.69rem] mt-[1.56rem] mb-[1.12rem]'>Текущий Email</div>
                        <input className='w-[50rem] items-center text-black text-xl not-italic font-medium leading-[normal] ml-[1.69rem] pl-[1.3125rem] pr-0 pt-[1.3125rem] pb-5 rounded-lg border-2 border-solid border-[#DCDCDC]' step={{background: '#f4f4f4'}} type="text" value="username@email.com" disabled />
                    </div>
                    <div className="w-[54.875rem] h-[18.125rem] shrink-0 mt-5 pt-[1.44rem] rounded-xl" style={{background: '#fff'}}>
                        <div className='ml-[1.69rem] pr-8 text-black text-2xl not-italic font-medium leading-[normal] ml-[1.69rem] mb-[0.62rem]'>Двухэтапная аутентификация</div>
                        <div className='ml-[1.69rem] pr-8 text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem]'>Дополнительная защита вашего аккаунта</div>
                        <hr color="#E1E1E1" />
                        <div className='ml-[1.69rem] pr-8 text-black text-xl not-italic font-normal leading-[normal] ml-[1.69rem] mb-[1.56rem]'>Помимо пароля, для входа также будет требоваться одноразовый еод из приложения.</div>
                        <div className='w-[17.375rem] h-[3.5rem] active:w-[16.875rem] active:h-[3rem] active:ml-[2.19rem] active:mb-[0.25rem] active:mt-[0.25rem] hover:cursor-pointer inline-flex justify-center items-center gap-2.5 ml-[1.69rem] px-[5.0625rem] rounded-lg' style={{background: `url(${Frame_7_blue_2})`, backgroundSize: 'cover'}}></div>
                    </div>
                </div>
            </div>
        </div>
    )
}