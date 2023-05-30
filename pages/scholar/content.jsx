import List from '@/components/List_ai'
import { useEffect, useState } from 'react'
import Divide from '@/components/Divideline'
import { useRouter } from 'next/router'
import { scholarcontentapi } from "@/pages/api/contents";
import { addApi, rmApi } from "@/pages/api/interest";

export default function scholar_content() {
    const router = useRouter()
    const [interest, setInterest] = useState(false)
    const [contents, setContents] = useState([])
    const [AIcontents, setAIContents] = useState([])
    const [color, setColor] = useState(<svg className="w-14 h-14 absolute right-6 top-40" fill="none" stroke="#E1E1E4" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
    </svg>)
    const randNum = Math.floor(Math.random() * 3);
    const [benefit, setBenefit] = useState()
    const [request, setRequest] = useState()
    const [requirement, setRequirement] = useState()
    const id = String(router.query.id)

    const getContents = async () => {
        const response = await scholarcontentapi(id)
        response.data.isSuccess && setContents(response.data.result.findResult)
        response.data.isSuccess && setAIContents(response.data.result.AIResult)
        checkInterest("scholarship", id)
        if (randNum === 0) {
            setBenefit(<><p>[장학금지급] 최대 3,000 만원</p>
                <p>- 지급 기간 : 석사과정 최대 3년, 석/박사과정 최대 5년</p>
                <p>- 지급 금액 : 매년 3,000만원</p>
                <p>* 전년도 학업 성취가 부진하면 중도탈락될 수 있음</p></>)
            setRequest(<><p>[장학금지급] 최대 3,000 만원</p>
                <p>- 지급 기간 : 석사과정 최대 3년, 석/박사과정 최대 5년</p>
                <p>- 지급 금액 : 매년 3,000만원</p>
                <p>* 전년도 학업 성취가 부진하면 중도탈락될 수 있음</p></>)
            setRequirement(<><p>[전공기준] 사회계열, 인문계열</p>
                <p>- 미국 대학원에서 인문, 사회계열 전공으로 입학허가를 받거나 받기로 예정된 자 (재학중인 자 포함)</p>
                <p>[기타조건]</p>
                <p>- 국가관이 투철하고 미국에서 석사 or 박사학위를 취득한 후 귀국하여 국가, 사회에 기여하고자 하는 자</p></>)
        }
        else if (randNum === 1) {
            setBenefit(<><p>[장학금지급] 최대 200만원</p>
                <p>- 유형별 장학금액 상이 (공고문 확인)</p>
                <p>- 타 기관의 장학금과 중복 수혜 가능</p>
                <p>- 논산시장학회 타 장학금과 중복 수혜 불가</p></>)
            setRequest(<><p>[장학금지급] 최대 200만원</p>
                <p>- 유형별 장학금액 상이 (공고문 확인)</p>
                <p>- 타 기관의 장학금과 중복 수혜 가능</p>
                <p>- 논산시장학회 타 장학금과 중복 수혜 불가</p></>)
            setRequirement(<><p>[지역기준] 주민등록지, 학교 소재지</p>
                <p>- 본인 or 부모가 논산시 1년 이상 거주</p>
                <p>- 논산시 관내 중·고등학교 재학생 or 국내 정규대학교 신입생(or 재학생)</p>
                <p>[유형별신청자격] 3개 신청유형</p>
                <p>- 학업장려 / 지역대학진학 / 사회적배려 장학 유형</p></>)
        }
        else {
            setBenefit(<><p>[기타혜택] 최대 10 만원</p>
                <p>- 참여자 교통카드 사용금액(1월 1일 ~ 12월)의 20%를 교통 마일리지로 지원</p>
                <p>- 연간 10만원 한도 내에서 지급</p>
                <p>- 2023년 국민취업지원제도, 서울시 청년수당, 서울시 임산부 교통비 지원사업에 참여해 지원금을 받는 자 선발 제외</p></>)
            setRequest(<><p>[기타혜택] 최대 10 만원</p>
                <p>- 참여자 교통카드 사용금액(1월 1일 ~ 12월)의 20%를 교통 마일리지로 지원</p>
                <p>- 연간 10만원 한도 내에서 지급</p>
                <p>- 2023년 국민취업지원제도, 서울시 청년수당, 서울시 임산부 교통비 지원사업에 참여해 지원금을 받는 자 선발 제외</p></>)
            setRequirement(<><p>청년, 기타/일반 (만 19세~24세)</p></>)
        }
    }

    useEffect(() => {
        getContents()
    }, [id])

    const checkInterest = async (type, contentId) => {
        const response = await addApi(type, contentId)
        console.log(response.data, "add")
        if (response.data.isSuccess) {
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
            rmInterest("scholarship", id)
        }
        else {
            setColor(<svg className="w-14 h-14 absolute right-6 top-40" fill="#FFA12E" stroke="#FFA12E" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
            </svg>)
            setInterest(true)
            addInterest("scholarship", id)
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
                    <div className='relative w-[67%] h-screen'>
                        <ul className='mb-8'>
                            <li className='flex justify-start mt-6'>
                                <div className='flex justify-center items-center h-6 bg-gray/25 text-orange px-4 mr-1 text-center text-[14px] font-bold rounded-xl'>{contents.type}</div>
                            </li>
                            <li className='mt-3'>
                                <span className='text-2xl text-black font-extrabold text-[23px] whitespace-normal w-[300px]'>{contents.title}</span>
                            </li>
                            <li className='flex mt-3'>
                                <span className='w-20 text-gray-dark text-[15px]'>장학기관</span>
                                <span className='text-black text-[15px]  w-80'>{contents.institution}</span>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>모집기간</span>
                                <span className='text-black text-[15px] w-80 '>{contents.period}</span>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>지원대상</span>
                                <span className='text-black text-[15px]  '>{contents.target}</span>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>혜택</span>
                                <span className='text-black text-[15px]  '>{contents.benefit}</span>
                                <button onClick={colorChange}>
                                    {color}
                                </button>
                            </li>
                            <li className='flex mt-2'>
                                <span className='w-20 text-gray-dark text-[15px]'>선발인원</span>
                                <span className='text-black text-[15px]  '>{contents.person_num}</span>
                            </li>
                        </ul>
                        <Divide></Divide>
                        <ul className='mt-10'>
                            <li>
                                <span className='ml-2 text-xl text-black font-extrabold'>상세정보</span>
                            </li>
                            <ul className='list-disc m-4 mt-6 marker:text-orange'>
                                <li>
                                    <div className='text-lg text-orange font-extrabold mb-2'>장학혜택</div>
                                    <div className='text-black text-md'>{benefit}</div>
                                </li>
                                <li>
                                    <div className='mt-10 text-lg text-orange font-extrabold mb-2'>접수방법</div>
                                    <div className=''>{request}</div>
                                </li>
                                <li>
                                    <div className='mt-10 text-lg text-orange font-extrabold mb-2'>신청자격</div>
                                    <div className='mb-10'>{requirement}</div>
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className='pl-5 mt-5 absolute top-14 right-0 w-[32%] h-[110%] border-l border-gray/50 '>
                        <div className='mb-8'>
                            <span className='ml-2 p-2 text-white text-lg font-extrabold border-2 bg-orange rounded-xl'>AI 추천</span><span className='ml-4 font-bold text-xl'>이 장학금 어떠세요?</span>
                        </div>
                        <List AIcontents={AIcontents}></List>
                    </div>
                </>
            }

        </>
    )
}