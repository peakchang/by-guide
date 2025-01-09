<script>
    import { goto } from "$app/navigation";
    import QuestionItem from "$src/lib/components/QuestionItem.svelte";

    let daehang = $state("");
    let testifif = $state("");

    let businessCategorys = $derived([
        "아파트",
        "오피스텔",
        "도시형생활주택(도생)",
        "호텔",
        "레지던스",
        "상가/쇼핑몰",
        "오피스",
        "지식산업센터",
        "토지",
        "빌라",
        "타운하우스",
        "펜션/풀빌라",
        "전원주택",
        "기타",
    ]);

    let jobCategorys = $derived([
        "시행/대행사무직",
        "분양대행사",
        "본부장",
        "팀장",
        "직원",
        "데스크",
        "TM상담사",
        "알바",
    ]);

    let feeBases = $derived(["본부", "팀", "직원", "상담시"]);

    let SelFeeBase = $state("");
</script>

<!-- 숨겨진 헤더!!!!!!!!!!!!!!!!!!!!!! -->
<div class="fixed top-0 left-0 w-full bg-green-50 z-50 suit-font">
    <div class="max-w-[530px] mx-auto bg-white border-b">
        <div class="px-3 py-1 flex justify-between items-center">
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="text-3xl w-12 cursor-pointer"
                style="color: #3da83b;"
                on:click={() => {
                    window.history.back();
                }}
            >
                <i class="fa fa-angle-left" aria-hidden="true"></i>
            </div>
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div
                class="cursor-pointer"
                on:click={() => {
                    goto("/");
                }}
            >
                <img src="/logo.png" alt="" class=" max-w-[110px]" />
            </div>
            <div class="w-12"></div>
        </div>
    </div>
</div>

<div class="bg-green-50 relative min-h-screen">
    <div class="max-w-[530px] mx-auto suit-font pt-12 pb-24">
        <div class="text-center font-semibold text-xl bg-white p-3">
            구인글 등록
        </div>

        <form action="">
            <div class="mt-2 bg-white p-5">
                <div class="font-semibold text-lg">공고제목 (현장명)</div>
                <div class="mt-1.5">
                    <input
                        type="text"
                        placeholder="Type here"
                        class="input input-bordered input-info input-sm w-full"
                    />
                </div>

                <div class="mt-3 font-semibold text-lg">현장 포인트</div>
                <div class="mt-1.5">
                    <textarea
                        class="textarea textarea-info w-full p-2"
                        placeholder="Bio"
                    ></textarea>
                </div>

                <div class="mt-3 font-semibold text-lg">근무지</div>
                <div class="mt-1.5 flex w-full items-center gap-1">
                    <div
                        class="border w-full py-1.5 px-2 text-sm border-sky-400 rounded-md"
                    >
                        근무지 주소를 입력하세요
                    </div>
                    <button class="btn btn-outline btn-info btn-sm">
                        <span>주소 입력</span>
                    </button>
                </div>

                <div
                    class="mt-2 h-40 border w-full text-sm border-sky-400 rounded-md overflow-hidden"
                >
                    <div
                        class=" bg-gray-300 w-full h-full flex justify-center items-center text-2xl"
                    >
                        지도 표시 영역
                    </div>
                </div>
            </div>

            <div class="mt-2 bg-white p-5">
                <div class="font-semibold text-lg">기본정보</div>

                <QuestionItem
                    sbj="대행사 *"
                    placeholder="필수입력"
                    bind:iptVal={daehang}
                />
                <QuestionItem
                    sbj="담당자 성함 *"
                    placeholder="필수입력"
                    bind:iptVal={testifif}
                />

                <QuestionItem sbj="담당자 연락처 *" placeholder="필수입력" />

                <div class="mt-5">
                    <div class="w-1/5 text-center text-sm">업종분류 *</div>
                    <div class="mt-3 grid grid-cols-2 gap-1">
                        {#each businessCategorys as businessCategory, idx}
                            <label class="button-checkbox">
                                <input type="checkbox" hidden />
                                <div>{businessCategory}</div>
                            </label>
                        {/each}
                    </div>
                </div>

                <div class="mt-5">
                    <div class="w-1/5 text-center text-sm">직종분류 *</div>
                    <div class="mt-3 grid grid-cols-2 gap-1">
                        {#each jobCategorys as jobCategory, idx}
                            <label class="button-checkbox">
                                <input type="checkbox" hidden />
                                <div>{jobCategory}</div>
                            </label>
                        {/each}
                    </div>
                </div>

                <QuestionItem sbj="경력 *" placeholder="필수입력" />

                <QuestionItem sbj="인원 *" placeholder="필수입력" />
            </div>

            <div class="mt-2 bg-white p-5">
                <div class="font-semibold text-lg">급여 및 영업지원</div>

                <div class="mt-2">
                    <div class="flex w-full items-center">
                        <div class="w-1/5 text-center text-sm">수수료 *</div>
                        <div class="w-4/5 flex gap-1">
                            {#each feeBases as feeBase}
                                <label class="button-checkbox w-full">
                                    <input
                                        type="radio"
                                        value={feeBase}
                                        hidden
                                        bind:group={SelFeeBase}
                                    />
                                    <div class="">{feeBase}</div>
                                </label>
                            {/each}
                        </div>
                    </div>

                    <div class="flex justify-end items-center gap-3 mt-2">
                        <div class="w-4/5 flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="숫자만 입력해주세요"
                                class="input input-bordered input-info input-sm w-full"
                            />
                            <div>원</div>
                        </div>
                    </div>
                </div>
                <QuestionItem
                    sbj="일비"
                    placeholder="있을 경우만 입력 (ex, 월 100만원 / 일 3만원)"
                />

                <QuestionItem
                    sbj="숙소비"
                    placeholder="있을 경우만 입력 (ex, 원룸 제공)"
                />

                <QuestionItem
                    sbj="프로모션"
                    placeholder="있을 경우만 입력 (ex, 5채 판매시 추가 100만)"
                />

                <QuestionItem
                    sbj="기본급여"
                    placeholder="있을 경우만 입력 (ex, 5채 판매시 추가 100만)"
                />
            </div>

            <div class="mt-2 bg-white p-5">
                <div class="font-semibold text-lg">상세내용</div>
                <div class="mt-1.5">
                    <textarea
                        class="textarea textarea-info w-full p-2"
                        placeholder="Bio"
                        rows="5"
                    ></textarea>
                </div>

                <div class="mt-1.5">
                    <button class="btn btn-success w-full text-white">등록하기</button>
                </div>
            </div>
        </form>
    </div>
</div>

<style>
    .button-checkbox div {
        display: block;
        background-color: #f0f0f0;
        color: #333;
        font-size: 14px;
        border: 1.5px solid #ccc;
        border-radius: 5px;
        padding: 8px 0;
        text-align: center;
        cursor: pointer;
        transition: all 0.3s;
    }

    .button-checkbox input[type="checkbox"]:checked + div {
        background-color: #08b9ff;
        color: white;
        border-color: #0099ff;
    }

    .button-checkbox input[type="radio"]:checked + div {
        background-color: #08b9ff;
        color: white;
        border-color: #0099ff;
    }
</style>
