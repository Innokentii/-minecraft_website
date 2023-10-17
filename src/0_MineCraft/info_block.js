import React from 'react'

export default function Info_block() {

    return (
        <div className="flex flex-row">
            <div className="w-[22.8125rem] h-[24.125rem] shrink-0 rounded-xl pt-[1.5rem] pl-[2rem]" style={{background: '#fff'}}>
                <div className='text-black text-2xl not-italic font-medium leading-[normal]; font-family: Ubuntu;'>Категории</div>
                <div className='flex flex-col gap-[0.69rem] mt-[1.13rem]' style={{justifyContent: 'end'}}>
                    <div className='text-black text-xl not-italic font-medium leading-[normal]'>Категории</div>
                    <div className='text-black text-xl not-italic font-medium leading-[normal]'>Категории</div>
                    <div className='text-black text-xl not-italic font-medium leading-[normal]'>Категории</div>
                    <div className='text-black text-xl not-italic font-medium leading-[normal]'>Категории</div>
                    <div className='text-black text-xl not-italic font-medium leading-[normal]'>Категории</div>
                </div>
            </div>
            <div className="rounded-xl">
                <div className="flex flex-row gap-5 mb-5" style={{justifyContent: 'end'}}>
                    <div className='w-[22.8125rem] h-[5.4375rem] shrink-0 flex justify-center rounded-xl' style={{background: '#FFF'}}>
                        <div className='inline-flex items-center gap-[0.6875rem] text-black text-center text-2xl not-italic font-medium leading-[normal]'>
                            <div>Сортировка</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 9L12 15L19 9" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                    </div>
                    <div className='w-[22.8125rem] h-[5.4375rem] shrink-0 flex justify-center rounded-xl' style={{background: '#FFF'}}>
                        <div className='inline-flex items-center gap-[0.6875rem] text-black text-center text-2xl not-italic font-medium leading-[normal]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M10.875 18C10.875 17.3787 11.3787 16.875 12 16.875H24C24.6213 16.875 25.125 17.3787 25.125 18C25.125 18.6213 24.6213 19.125 24 19.125H12C11.3787 19.125 10.875 18.6213 10.875 18Z" fill="#3A6BF2" />
                                <path d="M15 21.375C14.3787 21.375 13.875 21.8787 13.875 22.5C13.875 23.1213 14.3787 23.625 15 23.625H21C21.6213 23.625 22.125 23.1213 22.125 22.5C22.125 21.8787 21.6213 21.375 21 21.375H15Z" fill="#3A6BF2" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M21.9969 3.49377C22.5526 3.21591 23.2284 3.44116 23.5062 3.99689L26.2262 9.43678C26.8675 9.46939 27.4523 9.5192 27.9822 9.59529C29.5658 9.82266 30.8765 10.3115 31.808 11.4637C32.7395 12.6159 32.9428 13.9999 32.8333 15.596C32.7272 17.1427 32.3092 19.0933 31.7866 21.5318L31.1095 24.6919C30.7571 26.3365 30.4712 27.6706 30.1115 28.7128C29.7366 29.7989 29.2425 30.6921 28.3985 31.3744C27.5545 32.0566 26.5776 32.3527 25.4371 32.4917C24.3426 32.625 22.9782 32.625 21.2962 32.625H14.7039C13.0219 32.625 11.6575 32.625 10.563 32.4917C9.42246 32.3527 8.44557 32.0566 7.60161 31.3744C6.75765 30.6921 6.26349 29.7989 5.88861 28.7128C5.52887 27.6706 5.24301 26.3365 4.89061 24.6918L4.21347 21.5318C3.69091 19.0933 3.2729 17.1428 3.1668 15.596C3.05732 13.9999 3.26065 12.6159 4.19212 11.4637C5.12359 10.3115 6.43427 9.82266 8.01786 9.59529C8.54777 9.5192 9.13256 9.46939 9.77382 9.43679L12.4938 3.99689C12.7716 3.44116 13.4474 3.21591 14.0031 3.49377C14.5588 3.77163 14.7841 4.44739 14.5062 5.00312L12.3187 9.3781C12.8641 9.37499 13.4381 9.37499 14.0412 9.375H21.9589C22.5619 9.37499 23.136 9.37499 23.6813 9.3781L21.4938 5.00312C21.2159 4.44739 21.4412 3.77163 21.9969 3.49377ZM8.59817 11.7881L7.99377 12.9969C7.7159 13.5526 7.94116 14.2284 8.49688 14.5062C9.05261 14.7841 9.72836 14.5588 10.0062 14.0031L11.1871 11.6414C12.0427 11.6255 13.0169 11.625 14.1329 11.625H21.8672C22.9832 11.625 23.9573 11.6255 24.8129 11.6414L25.9938 14.0031C26.2716 14.5588 26.9474 14.7841 27.5031 14.5062C28.0588 14.2284 28.2841 13.5526 28.0062 12.9969L27.4018 11.7881C27.4906 11.7988 27.5775 11.8102 27.6625 11.8225C28.9883 12.0128 29.6389 12.3595 30.0582 12.8782C30.4776 13.3969 30.6802 14.1057 30.5886 15.442C30.4948 16.8087 30.1135 18.6012 29.5674 21.15L28.9245 24.15C28.5534 25.8819 28.2944 27.0812 27.9846 27.9787C27.6849 28.8471 27.3776 29.3064 26.984 29.6246C26.5903 29.9429 26.0768 30.1471 25.1649 30.2582C24.2224 30.3731 22.9954 30.375 21.2243 30.375H14.7758C13.0047 30.375 11.7777 30.3731 10.8352 30.2582C9.92325 30.1471 9.40978 29.9429 9.01613 29.6246C8.62249 29.3064 8.31522 28.8471 8.01548 27.9787C7.70569 27.0812 7.4467 25.8819 7.0756 24.15L6.43274 21.1501C5.88656 18.6012 5.50527 16.8087 5.41152 15.442C5.31986 14.1057 5.52252 13.3969 5.94187 12.8782C6.36122 12.3595 7.0118 12.0128 8.33763 11.8225C8.42259 11.8103 8.50941 11.7988 8.59817 11.7881Z" fill="#3A6BF2" />
                            </svg>
                            <div>Корзина</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap gap-5 ml-5 mb-5">
                    <div className="w-[22.8125rem] h-[25.75rem] shrink-0 overflow-hidden rounded-xl" style={{background: '#fff'}}>
                        <div className='w-[22.8125rem] h-[15.9375rem] shrink-0' style={{background: '#d9d9d9'}}></div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-[0.69rem]'>Название</div>
                        <div className='w-[20.375rem] text-black text-base not-italic font-normal leading-[124.9%] ml-[1.37rem] mt-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-5'>14 000 Р</div>
                    </div>
                    <div className="w-[22.8125rem] h-[25.75rem] shrink-0 overflow-hidden rounded-xl" style={{background: '#fff'}}>
                        <div className='w-[22.8125rem] h-[15.9375rem] shrink-0' style={{background: '#d9d9d9'}}></div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-[0.69rem]'>Название</div>
                        <div className='w-[20.375rem] text-black text-base not-italic font-normal leading-[124.9%] ml-[1.37rem] mt-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-5'>14 000 Р</div>
                    </div>
                    <div className="w-[22.8125rem] h-[25.75rem] shrink-0 overflow-hidden rounded-xl" style={{background: '#fff'}}>
                        <div className='w-[22.8125rem] h-[15.9375rem] shrink-0' style={{background: '#d9d9d9'}}></div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-[0.69rem]'>Название</div>
                        <div className='w-[20.375rem] text-black text-base not-italic font-normal leading-[124.9%] ml-[1.37rem] mt-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-5'>14 000 Р</div>
                    </div>
                    <div className="w-[22.8125rem] h-[25.75rem] shrink-0 overflow-hidden rounded-xl" style={{background: '#fff'}}>
                        <div className='w-[22.8125rem] h-[15.9375rem] shrink-0' style={{background: '#d9d9d9'}}></div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-[0.69rem]'>Название</div>
                        <div className='w-[20.375rem] text-black text-base not-italic font-normal leading-[124.9%] ml-[1.37rem] mt-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-5'>14 000 Р</div>
                    </div>
                    <div className="w-[22.8125rem] h-[25.75rem] shrink-0 overflow-hidden rounded-xl" style={{background: '#fff'}}>
                        <div className='w-[22.8125rem] h-[15.9375rem] shrink-0' style={{background: '#d9d9d9'}}></div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-[0.69rem]'>Название</div>
                        <div className='w-[20.375rem] text-black text-base not-italic font-normal leading-[124.9%] ml-[1.37rem] mt-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-5'>14 000 Р</div>
                    </div>
                    <div className="w-[22.8125rem] h-[25.75rem] shrink-0 overflow-hidden rounded-xl" style={{background: '#fff'}}>
                        <div className='w-[22.8125rem] h-[15.9375rem] shrink-0' style={{background: '#d9d9d9'}}></div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-[0.69rem]'>Название</div>
                        <div className='w-[20.375rem] text-black text-base not-italic font-normal leading-[124.9%] ml-[1.37rem] mt-2'>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</div>
                        <div className='text-black text-xl not-italic font-medium leading-[normal] ml-[1.37rem] mt-5'>14 000 Р</div>
                    </div>
                </div>
                <div className="flex gap-5 mb-[5rem]" style={{justifyContent: 'end'}}>
                    <svg className='rounded-[0.625rem] w-[2.8125rem] h-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M15.5 5L9.5 12L15.5 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>1</div>
                    <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>2</div>
                    <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>3</div>
                    <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>4</div>
                    <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>5</div>
                    <div className='rounded-[0.625rem] w-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600'>6</div>
                    <svg className='rounded-[0.625rem] w-[2.8125rem] h-[2.8125rem] bg-zinc-200 relative left-[0] text-black text-center text-[2rem] not-italic font-medium leading-[normal] hover:cursor-pointer hover:text-[white] hover:bg-blue-600' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M9.5 5L15.5 12L9.5 19" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    )
}