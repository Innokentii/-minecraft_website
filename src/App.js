import React from 'react'
import './0_MineCraft/Minecraft_CSS.css'
import Main_block from './0_MineCraft/main_block';
import Info_block from './0_MineCraft/info_block';
import Open_user_block from './0_MineCraft/open_user_block';
import Frame_7 from './0_MineCraft/Frame_7.png'

function App_minecraft() {
    React.useEffect(() => {
        let Open_user_block_open_close = document.querySelector('.Open_user_block_open_close');
        Open_user_block_open_close.style.display = 'none';
        let Info_block_open_close = document.querySelector('.Info_block_open_close');
        Info_block_open_close.style.display = 'none';
    });
    
    // Функция входа в пользователя
    React.useEffect(() => {
        let user_open_id_click = document.getElementById('user_open_id_click_1');
        let open_user = document.getElementById('open_user');

        let Main_block_open_close = document.querySelector('.Main_block_open_close');
        let Info_block_open_close = document.querySelector('.Info_block_open_close');
        let Open_user_block_open_close = document.querySelector('.Open_user_block_open_close');

        user_open_id_click.addEventListener('click', open_user_fun);
        open_user.addEventListener('click', open_user_fun);

        function open_user_fun() {
            let open_bottom = document.getElementById('open_bottom'); // Блок для входа в регистрацию на сайте
            let open_user = document.getElementById('open_user'); // Блок иконки и имени пользователя
            open_bottom.style.display = 'none';
            open_user.style.display = 'flex';
            Main_block_open_close.style.display = 'none';
            Info_block_open_close.style.display = 'none';
            Open_user_block_open_close.style.display = '';
        }
    });

    React.useEffect(() => {
        let Main_block_open_close = document.querySelector('.Main_block_open_close');
        let Open_user_block_open_close = document.querySelector('.Open_user_block_open_close');
        let Info_block_open_close = document.querySelector('.Info_block_open_close');
        let open_magazine_1 = document.getElementById('open_magazine_1');
        let open_magazine_2 = document.getElementById('open_magazine_2');
        open_magazine_1.addEventListener('click', open_magazine);
        open_magazine_2.addEventListener('click', open_magazine);

        function open_magazine() {
            Main_block_open_close.style.display = 'none';
            Open_user_block_open_close.style.display = 'none';
            Info_block_open_close.style.display = '';
        }
    });

    React.useEffect(() => {
        let Main_block_open_close = document.querySelector('.Main_block_open_close');
        let Open_user_block_open_close = document.querySelector('.Open_user_block_open_close');
        let Info_block_open_close = document.querySelector('.Info_block_open_close');
        let open_main_1 = document.getElementById('open_main_1');
        let open_main_2 = document.getElementById('open_main_2');
        open_main_1.addEventListener('click', open_magazine);
        open_main_2.addEventListener('click', open_magazine);

        function open_magazine() {
            Main_block_open_close.style.display = '';
            Open_user_block_open_close.style.display = 'none';
            Info_block_open_close.style.display = 'none';
        }
    });

    return (
        <div style={{ zoom: '0.85', background: '#f6f6f6' }}>
            <div className="flex flex-col gap-[38px] w-[95rem] mx-auto">
                <div className="flex flex-row justify-between items-center pl-[1.8125rem] pr-[1.625rem] py-[1.44063rem] rounded-xl" style={{ background: '#3a6bf2' }}>
                    <div className="flex items-center gap-[37px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="74" viewBox="0 0 64 74" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M32 5.87979L5.04913 21.4399V52.5601L32 68.1202L58.9509 52.5601V21.4399L32 5.87979ZM64 18.5248L32 0.0495605L0 18.5248V55.4752L32 73.9504L64 55.4752V18.5248Z"
                                fill="white" />
                            <path
                                d="M37.6494 22.7578H44.5236V53.2949H37.6494V40.3398H26.1044V53.2949H19.2302V22.7578H26.1044V34.4351H37.6494V22.7578Z"
                                fill="white" />
                        </svg>
                        <a id="open_bottom" className='hover:cursor-pointer'>
                            <div className="w-[234px] h-14" id='user_open_id_click_1' style={{ background: `url(${Frame_7})` }}></div>
                        </a>
                        <div className="hidden" id="open_user">
                            <a className='flex items-center gap-[0.9375rem] no-underline hover:cursor-pointer'>
                                <div className='w-14 h-14 rounded-[3.625rem] bg-zinc-200'></div>
                                <div className='text-white text-2xl not-italic font-medium leading-[normal]; font-family: Ubuntu;'>username</div>
                            </a>
                            <div style={{ display: "none" }}>0</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-11">
                        <div className='flex items-start gap-12 text-white text-2xl not-italic font-medium leading-[normal] no-underline'>
                            <div id='open_main_1'><a className='hover:cursor-pointer flex items-start gap-12 text-white text-2xl not-italic font-medium leading-[normal] no-underline'>Главная</a></div>
                            <div id='open_magazine_1'><a className='hover:cursor-pointer flex items-start gap-12 text-white text-2xl not-italic font-medium leading-[normal] no-underline'>Магазин</a></div>
                            <div>Правила</div>
                            <div>Банлист</div>
                            <div>Форум</div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                            <path
                                d="M40.1947 5.33337H23.832C8.88804 5.33337 5.33337 8.88804 5.33337 23.8054V40.168C5.33337 55.1094 8.86137 58.6667 23.8054 58.6667H40.168C55.1094 58.6667 58.6667 55.1387 58.6667 40.1947V23.832C58.6667 8.88804 55.1387 5.33337 40.1947 5.33337ZM48.3894 43.3867H44.4987C43.0267 43.3867 42.584 42.1947 39.944 39.5547C37.64 37.3334 36.6667 37.056 36.0827 37.056C35.2774 37.056 35.056 37.2774 35.056 38.3894V41.888C35.056 42.8347 34.7494 43.3894 32.2774 43.3894C29.8783 43.2281 27.5518 42.4993 25.4896 41.2628C23.4274 40.0263 21.6885 38.3176 20.416 36.2774C17.3952 32.5174 15.2932 28.1044 14.2774 23.3894C14.2774 22.8054 14.4987 22.2774 15.6107 22.2774H19.4987C20.4987 22.2774 20.8587 22.7227 21.2507 23.7494C23.1387 29.3067 26.36 34.1387 27.6667 34.1387C28.168 34.1387 28.3867 33.9174 28.3867 32.6667V26.944C28.2214 24.3334 26.8347 24.112 26.8347 23.168C26.8525 22.9191 26.9666 22.6868 27.1528 22.5205C27.339 22.3542 27.5826 22.267 27.832 22.2774H33.944C34.7787 22.2774 35.056 22.6934 35.056 23.6934V31.416C35.056 32.2507 35.416 32.528 35.6667 32.528C36.168 32.528 36.5547 32.2507 37.472 31.3334C39.4423 28.9306 41.0521 26.2536 42.2507 23.3867C42.3732 23.0423 42.605 22.7475 42.9108 22.5472C43.2165 22.3469 43.5794 22.2522 43.944 22.2774H47.8347C49 22.2774 49.248 22.8614 49 23.6934C47.5853 26.8625 45.8349 29.8708 43.7787 32.6667C43.36 33.3067 43.192 33.64 43.7787 34.3894C44.1654 34.9734 45.528 36.112 46.4454 37.1947C47.7785 38.5244 48.8855 40.0629 49.7227 41.7494C50.056 42.832 49.4987 43.3867 48.3894 43.3867Z"
                                fill="white" />
                        </svg>
                    </div>
                </div>
                <div className='Main_block_open_close'><Main_block></Main_block></div>
                <div className='Info_block_open_close'><Info_block></Info_block></div>
                <div className='Open_user_block_open_close'><Open_user_block></Open_user_block></div>
                <footer className='flex flex-col items-center gap-5 pl-[47px] pr-[26px] py-[34px] rounded-xl' style={{ background: '#fff' }}>
                    <div className="flex w-full justify-between items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="49" height="57" viewBox="0 0 49 57" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M24.5 4.46377L3.86574 16.377V40.2034L24.5 52.1166L45.1343 40.2034V16.377L24.5 4.46377ZM49 14.1451L24.5 0L0 14.1451V42.4352L24.5 56.5803L49 42.4352V14.1451Z"
                                fill="#3A6BF2" />
                            <path
                                d="M28.8256 17.386H34.0886V40.766H28.8256V30.8472H19.9864V40.766H14.7234V17.386H19.9864V26.3264H28.8256V17.386Z"
                                fill="#3A6BF2" />
                        </svg>
                        <div className='flex items-start gap-12 text-black text-2xl not-italic font-medium leading-[normal] no-underline'>
                            <div id='open_main_2'><a className='hover:cursor-pointer flex items-start gap-12 text-black text-2xl not-italic font-medium leading-[normal] no-underline'>Главная</a></div>
                            <div id='open_magazine_2'><a className='hover:cursor-pointer flex items-start gap-12 text-black text-2xl not-italic font-medium leading-[normal] no-underline'>Магазин</a></div>
                            <div>Правила</div>
                            <div>Банлист</div>
                            <div>Форум</div>
                        </div>
                        <div className="flex items-center gap-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.17157 5.46173C2 6.63331 2 8.51892 2 12.2902C2 16.0614 2 17.947 3.17157 19.1186C4.34315 20.2902 6.22876 20.2902 10 20.2902H14C17.7712 20.2902 19.6569 20.2902 20.8284 19.1186C22 17.947 22 16.0614 22 12.2902C22 8.51892 22 6.63331 20.8284 5.46173C19.6569 4.29016 17.7712 4.29016 14 4.29016H10C6.22876 4.29016 4.34315 4.29016 3.17157 5.46173ZM18.5762 7.81002C18.8413 8.12823 18.7983 8.60115 18.4801 8.86633L16.2837 10.6967C15.3973 11.4354 14.6789 12.0341 14.0448 12.4419C13.3843 12.8667 12.7411 13.135 12 13.135C11.2589 13.135 10.6157 12.8667 9.95518 12.4419C9.32112 12.0341 8.60271 11.4354 7.71636 10.6967L5.51986 8.86633C5.20165 8.60115 5.15866 8.12823 5.42383 7.81002C5.68901 7.49181 6.16193 7.44882 6.48014 7.71399L8.63903 9.51307C9.57199 10.2905 10.2197 10.8286 10.7666 11.1803C11.2959 11.5208 11.6549 11.635 12 11.635C12.3451 11.635 12.7041 11.5208 13.2334 11.1803C13.7803 10.8286 14.428 10.2905 15.361 9.51307L17.5199 7.71399C17.8381 7.44882 18.311 7.49181 18.5762 7.81002Z"
                                    fill="#3A6BF2" />
                            </svg>
                            <div className='text-[color:var(--Black---text,#0A1044)] text-2xl not-italic font-medium leading-7; font-family: Ubuntu;'>info@minecraft</div>
                        </div>
                    </div>
                    <div>
                        <span className='text-[#999DA6] text-base not-italic font-normal leading-[normal]'>Все права защищены </span>
                        <span className='text-[#999DA6] text-base not-italic font-normal leading-[normal]'>© 2023 название</span>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default App_minecraft;