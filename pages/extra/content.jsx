import List from '@/components/List_ai'
import { useState, useEffect } from 'react'
import Divide from '@/components/Divideline'
import { useRouter } from 'next/router'
import { extracontentapi } from "@/pages/api/contents";
import { addApi, rmApi } from "@/pages/api/interest";

export default function extra_content() {
    const router = useRouter()
    const [interest, setInterest] = useState(false)
    const [contents, setContents] = useState([])
    const [AIcontents, setAIContents] = useState([])
    const [color, setColor] = useState(<svg className="absolute right-6 w-14 h-14 top-40" fill="none" stroke="#E1E1E4" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>)
    const randNum = Math.floor(Math.random() * 3);
    const [activity, setActivity] = useState()
    const [benefit, setBenefit] = useState()
    const [requirement, setRequirement] = useState()
    const [error, setError] = useState(true)
    const id = String(router.query.id)

    const getContents = async () => {
        const response = await extracontentapi(id)
        response.data.isSuccess && setContents(response.data.result.findResult)
        response.data.isSuccess && setAIContents(response.data.result.AIResult.findResult)
        if (response.data.result.AIResult.AI === false) {
            setError(false)
        }
        checkInterest("activity", id)
        if (randNum === 0) {
            setActivity(<><p>모든 상담은 비대면, 앱으로 진행되며, 셰어즈(멘토)가 상담이 가능한 시간을 앱 내 캘린더에 등록해 놓으면 상담을 받기 원하는 피어즈(학생)이 상담 요청을 보내고, 서로 확인하에 상담 일정이 등록됩니다.</p>
                <p>상담은 앱 내 영상통화 기능을 이용해 영상통화 or 통화 or 채팅으로 진행됩니다.</p></>)
            setBenefit(<><p>30분 멘토링 건 당 약 7,000원 / 60분 멘토링 건 당 약 14,000원 (원천징수 3.3%)</p>
                <p>급여는 멘토링 다음날 입금됩니다.</p></>)
            setRequirement(<p>입시(정시,수시 등) 를 직접 경험한 4년제 20~23학번 대학생 (휴학생 가능)</p>)
        }
        else if (randNum === 1) {
            setActivity(<><p>✔️마케팅 전략 기획: 리서치, 시장 및 고객조사(고객 인터뷰 등)</p>
                <p>✔️광고 집행: 800만원 광고 집행!</p>
                <p>Meta 페이스북, 인스타그램, 네이버 GFA, SA, 카카오모먼트, 틱톡, 인플루언서, 커뮤니티 등</p>
                <p>✔️ 1: 1 취업 멘토링(포트폴리오, 자소서 첨삭 및 모의면접 진행)</p>
                <p>✔️ 취뽀에 진심인 멘토, 소수 정예 러너 24시간 밀착 관리</p></>)
            setBenefit(<><p>✔ 포트폴리오, 자소서 & 이력서 1: 1첨삭</p>
                <p>✔ 수료증(활동 완료 시)</p>
                <p>✔ 실습 가이드 VOD 제공</p></>)
            setRequirement(<><p>✔️ 비전공자 혹은 마케팅 실무 경험이 하나도 없어 어떻게 시작해야 할지 막막하신 분</p>
                <p>✔️ 요즘 다하는 대외활동, 서포터즈 말고 진짜 실무 경험하고 싶은 분</p>
                <p>✔️ 빠르게 마케터로 취업하고 싶은 졸업예정자, 졸업생, 취준생</p>
                <p>✔️ 인턴 지원하는데, 마케팅 경력이 없어서 서류부터 탈락했던 경험 있으신 분</p></>)
        }
        else {
            setActivity(<><p>지구와 아동권리를 지키기 위한 챌린지를 통해 매주 1회씩 총3주간 3회기에 거쳐 위기에 빠진 아동을 구출하는 방탈출 형식의 미션 참여(온라인)</p></>)
            setBenefit(<><p>- 챌린지 완료 수료증</p>
                <p>- 굿네이버스 회원증서</p>
                <p>- 우수 지구 지킴이 시상</p>
                <p>- 지구 지킴이 KIT</p></>)
            setRequirement(<><p>- 굿네이버스 서울북부지부 관할 내 대학 학생 (재학, 휴학, 졸업예정자 무관)</p>
                <p>- 대학생 외에도 굿네이버스 서울북부지부 관할 내에 주소지를 둔 모든 분들(강북구, 성북구, 노원구, 도봉구, 동대문구, 중랑구)</p>
                <p>- 정기적인 나눔활동이 가능하신 분(매달 1만원)</p></>)
        }
    }

    useEffect(() => {
        getContents()
    }, [id])

    const checkInterest = async (type, contentId) => {
        const response = await addApi(type, contentId)
        console.log(response.data, "add")
        if (response.data.isSuccess || response.data.code === 2000) {
            const res = await rmApi(type, contentId)
            console.log(res.data, "rm")
        }
        else {
            setColor(<svg className="w-14 h-14 absolute right-6 top-40" fill="#FFA12E" stroke="#FFA12E" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>)
            setInterest(true)
        }
    }
    const addInterest = async (type, contentId) => {
        addApi(type, contentId)
    }
    const rmInterest = async (type, contentId) => {
        rmApi(type, contentId)
    }

    const colorChange = () => {
        if (interest === true) {
            setColor(<svg className="w-14 h-14 absolute right-6 top-40" fill="none" stroke="#E1E1E4" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>)
            setInterest(false)
            rmInterest("activity", id)
        }
        else {
            setColor(<svg className="w-14 h-14 absolute right-6 top-40" fill="#FFA12E" stroke="#FFA12E" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>)
            setInterest(true)
            addInterest("activity", id)
        }
    }

    return (
        <>{/* 검색결과 없을 때 */}
            {contents.length === 0 ?
                <div role="status ">
                    <svg aria-hidden="true" className="w-20  absolute top-72 left-[40%] mr-2 text-gray-light animate-spin fill-orange" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" /><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" /></svg>
                </div>
                :
                <>
                    <div className='relative w-[67%]'>
                        <ul className='mb-8'>
                            <li className='flex justify-start mt-6'>
                                <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[14px] font-bold rounded-xl'>{contents.type}</div>
                            </li>
                            <li className='mt-3'>
                                <span className='text-2xl text-black font-extrabold text-[23px] whitespace-normal w-[300px]'>{contents.title}</span>
                            </li>
                            <li className='flex mt-3'>
                                <span className='w-20 text-gray-dark text-[15px]'>주최기관</span>
                                <span className='text-black text-[15px]  w-80'>{contents.institution}</span>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>접수기간</span>
                                <span className='text-black text-[15px] w-80 '>{contents.period}</span>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>지원자격</span>
                                <span className='text-black text-[15px]  '>{contents.target}</span>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>모집인원</span>
                                <span className='text-black text-[15px]  '>{contents.person_num}</span>
                                <button onClick={colorChange}>
                                    {color}
                                </button>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>우대역량</span>
                                <span className='text-black text-[15px]  '>{contents.prefer}</span>
                            </li>
                        </ul>
                        <Divide></Divide>
                        <ul className='mt-10'>
                            <li>
                                <span className='ml-2 text-xl text-black font-extrabold'>상세정보</span>
                            </li>
                            <ul className='list-disc m-4 mt-6 marker:text-orange'>
                                <li>
                                    <div className='text-lg text-orange font-extrabold mb-2'>공모주제</div>
                                    <div className=''>{activity}</div>
                                </li>
                                <li>
                                    <div className='mt-10 text-lg text-orange font-extrabold mb-2'>시상내역</div>
                                    <div className=''>{benefit}</div>
                                </li>
                                <li>
                                    <div className='mt-10 text-lg text-orange font-extrabold mb-2'>응모대상</div>
                                    <div className='mb-10'>{requirement}</div>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className='pl-5 pt-5 absolute top-14 right-0 w-[32%] h-[120%] border-l border-gray/50 '>
                        <div className='mb-8'>
                            <span className='ml-2 p-2 text-white text-lg font-extrabold border-2 bg-orange rounded-xl'>AI 추천</span><span className='ml-4 font-bold text-xl'>이 공모전 어떠세요?</span>
                        </div>
                        <List AIcontents={AIcontents} error={error}></List>
                    </div>
                </>
            }
        </>
    )
}