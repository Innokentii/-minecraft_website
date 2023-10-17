import React from 'react'
import Frame_35 from './Frame_35.png'
import Rectangle_72_1 from './Rectangle_72_1.png'
import Rectangle_72_2 from './Rectangle_72_2.png'
import Frame_15 from './Frame_15.jpg'
import Frame_42 from './Frame_42.png'
import { hover } from '@testing-library/user-event/dist/hover'

export default function Main_block() {

    return(
        <div>
            <div className="w-[95rem] h-[42.125rem] shrink-0 rounded-xl" style={{background: `linear-gradient(180deg, #000 0%, rgba(0, 0, 0, 0.23) 49.48%, #000 100%), url(${Frame_15}), lightgray 50%`, backgroundSize: 'cover'}}>
                <div className='relative left-[20.31rem] w-[54.375rem] text-white text-center text-8xl not-italic font-bold leading-[normal] top-[11.75rem]'>Ваш новый любимый сервер</div>
                <div className='relative left-[calc((var(--width)_-_80rem)_/_2)] text-white text-center text-[2rem] not-italic font-medium leading-[normal] top-60'>еще какой то текст о том что этот сервер ахуенный</div>
                <div className="inline-flex items-start gap-16 relative left-[37.44rem] inline-flex items-start gap-16 w-[24.6rem] top-[18.44rem]">
                    <div className="flex items-center gap-3">
                        <div className='w-6 h-6 rounded-[2.125rem] bg-green-400'></div>
                        <div className='text-white text-center text-xl not-italic font-medium leading-[normal]'>15 000+ онлайн</div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className='w-6 h-6 rounded-[2.125rem] bg-red-600'></div>
                        <div className='text-white text-center text-xl not-italic font-medium leading-[normal]'>500 чего то</div>
                    </div>
                </div>
            </div>
            <div className="w-full inline-flex flex-col items-start gap-[3.75rem] mt-[4rem]">
                <div className='text-black text-5xl not-italic font-medium leading-[normal]'>О сервере</div>
                <div className="flex w-full items-start gap-5">
                    <div className="flex w-[30.8125rem] flex-col items-start gap-5">
                        <div className='flex w-[30.8125rem] h-[7.9375rem] items-center gap-11 overflow-hidden rounded-xl flex h-[7.9375rem] items-center gap-11 pr-0 rounded-xl;' style={{background: '#FFF'}}>
                            <div style={{background: `url(${Frame_35})`, lightgray: '50%', backgroundSize: 'cover'}} className='w-[7.9375rem] h-[7.9375rem] shrink-0'></div>
                            <div className='text-[2rem] font-medium'>BedWars</div>
                        </div>
                        <div className='flex w-[30.8125rem] h-[7.9375rem] items-center gap-11 overflow-hidden rounded-xl flex h-[7.9375rem] items-center gap-11 pr-0 rounded-xl;' style={{background: '#FFF'}}>
                            <div style={{background: `url(${Frame_35})`, lightgray: '50%', backgroundSize: 'cover'}} className='w-[7.9375rem] h-[7.9375rem] shrink-0'></div>
                            <div className='text-[2rem] font-medium'>Grief</div>
                        </div>
                        <div className='flex w-[30.8125rem] h-[7.9375rem] items-center gap-11 overflow-hidden rounded-xl flex h-[7.9375rem] items-center gap-11 pr-0 rounded-xl;' style={{background: '#FFF'}}>
                            <div style={{background: `url(${Frame_35})`, lightgray: '50%', backgroundSize: 'cover'}} className='w-[7.9375rem] h-[7.9375rem] shrink-0'></div>
                            <div className='text-[2rem] font-medium'>SkyBlock</div>
                        </div>
                        <div className='flex w-[30.8125rem] h-[7.9375rem] items-center gap-11 overflow-hidden rounded-xl flex h-[7.9375rem] items-center gap-11 pr-0 rounded-xl;' style={{background: '#FFF'}}>
                            <div style={{background: `url(${Frame_35})`, lightgray: '50%', backgroundSize: 'cover'}} className='w-[7.9375rem] h-[7.9375rem] shrink-0'></div>
                            <div className='text-[2rem] font-medium'>BedWars</div>
                        </div>
                        <div className='flex w-[30.8125rem] h-[7.9375rem] items-center gap-11 overflow-hidden rounded-xl flex h-[7.9375rem] items-center gap-11 pr-0 rounded-xl;' style={{background: '#FFF'}}>
                            <div style={{background: `url(${Frame_35})`, lightgray: '50%', backgroundSize: 'cover'}} className='w-[7.9375rem] h-[7.9375rem] shrink-0'></div>
                            <div className='text-[2rem] font-medium'>Grief</div>
                        </div>
                    </div>
                    <div className="flex h-[44.7rem] items-end content-end gap-[1.25rem_1.1875rem] flex-wrap overflow-hidden">
                        <div className="flex w-full h-[18.9375rem] items-center gap-[4.125rem] bg-cover pr-0 rounded-xl" style={{background: `url(${Frame_42})`}}></div>
                        <div className="flex w-[30.875rem] h-[24.5rem] flex-col items-center gap-8 shrink-0 overflow-hidden pb-0 rounded-xl" style={{background: '#3a6bf2'}}>
                            <div className='w-[30.875rem] h-[17.6875rem]' style={{background: `url(${Rectangle_72_1})`, backgroundSize: 'cover'}}></div>
                            <div className='text-white text-[2rem] not-italic font-medium leading-[normal]'>Ежедневный онлайн +5 000</div>
                        </div>
                        <div className="flex w-[30.875rem] h-[24.5rem] flex-col items-center gap-8 shrink-0 overflow-hidden pb-0 rounded-xl" style={{background: '#3a6bf2'}}>
                            <div className='w-[30.875rem] h-[17.6875rem]' style={{background: `url(${Rectangle_72_2})`, backgroundSize: 'cover'}}></div>
                            <div className='text-white text-[2rem] not-italic font-medium leading-[normal]'>Дружелюбное комьюнити</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[3.75rem] mt-[4rem]">
                <div className='text-black text-5xl not-italic font-medium leading-[normal]; font-family: Ubuntu;'>Новости</div>
                <div className="flex flex-col items-center gap-10">
                    <div className="flex w-[95.0625rem] items-start content-start gap-[1.25rem_1.3125rem] flex-wrap">
                        <div className="inline-flex flex-col items-start gap-3.5 p-[1.375rem] rounded-xl" style={{background: '#fff'}}>
                            <div className='w-[28.0625rem] h-[16.125rem] rounded-lg' style={{background: '#d9d9d9'}}></div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>01/03/2023</div>
                            <div className='text-black text-2xl not-italic font-medium leading-[normal]'>Заголовок </div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        </div>
                        <div className="inline-flex flex-col items-start gap-3.5 p-[1.375rem] rounded-xl" style={{background: '#fff'}}>
                            <div className='w-[28.0625rem] h-[16.125rem] rounded-lg' style={{background: '#d9d9d9'}}></div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>01/03/2023</div>
                            <div className='text-black text-2xl not-italic font-medium leading-[normal]'>Заголовок </div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        </div>
                        <div className="inline-flex flex-col items-start gap-3.5 p-[1.375rem] rounded-xl" style={{background: '#fff'}}>
                            <div className='w-[28.0625rem] h-[16.125rem] rounded-lg' style={{background: '#d9d9d9'}}></div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>01/03/2023</div>
                            <div className='text-black text-2xl not-italic font-medium leading-[normal]'>Заголовок </div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        </div>
                        <div className="inline-flex flex-col items-start gap-3.5 p-[1.375rem] rounded-xl" style={{background: '#fff'}}>
                            <div className='w-[28.0625rem] h-[16.125rem] rounded-lg' style={{background: '#d9d9d9'}}></div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>01/03/2023</div>
                            <div className='text-black text-2xl not-italic font-medium leading-[normal]'>Заголовок </div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        </div>
                        <div className="inline-flex flex-col items-start gap-3.5 p-[1.375rem] rounded-xl" style={{background: '#fff'}}>
                            <div className='w-[28.0625rem] h-[16.125rem] rounded-lg' style={{background: '#d9d9d9'}}></div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>01/03/2023</div>
                            <div className='text-black text-2xl not-italic font-medium leading-[normal]'>Заголовок </div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        </div>
                        <div className="inline-flex flex-col items-start gap-3.5 p-[1.375rem] rounded-xl" style={{background: '#fff'}}>
                            <div className='w-[28.0625rem] h-[16.125rem] rounded-lg' style={{background: '#d9d9d9'}}></div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>01/03/2023</div>
                            <div className='text-black text-2xl not-italic font-medium leading-[normal]'>Заголовок </div>
                            <div className='w-[28.0625rem] text-black text-xl not-italic font-normal leading-[normal]'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet </div>
                        </div>
                    </div>
                    <div className="flex items-start gap-5">
                        <svg className='rounded-[0.625rem] w-[2.8125rem] h-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M15.5 5L9.5 12L15.5 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>1</div>
                        <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>2</div>
                        <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>3</div>
                        <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>4</div>
                        <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>5</div>
                        <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>6</div>
                        <svg className='rounded-[0.625rem] w-[2.8125rem] h-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                            <path d="M9.5 5L15.5 12L9.5 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}